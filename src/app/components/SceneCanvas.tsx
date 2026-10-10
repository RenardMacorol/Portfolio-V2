'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PALETTE = {
	parchment: 0xf3e9d6,
	ink: 0x2e2118,
	sepia: 0x6b4a38,
	moss: 0x8b9a63,
	gold: 0xc79a3f,
	sage: 0xc9d3b4,
};

export default function SceneCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		const width = window.innerWidth;
		const height = window.innerHeight;

		const scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2(0xd8caa4, 0.058);

		const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
		camera.position.set(0, 0.3, 9);

		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);

		scene.add(new THREE.AmbientLight(0xf3e2c4, 0.4));

		const keyLight = new THREE.DirectionalLight(0xffdca8, 0.85);
		keyLight.position.set(3, 5, 4);
		scene.add(keyLight);

		const rimLight = new THREE.DirectionalLight(PALETTE.moss, 0.5);
		rimLight.position.set(-4, -1, -3);
		scene.add(rimLight);

		const coreLight = new THREE.PointLight(PALETTE.gold, 2.4, 8, 2);
		coreLight.position.set(0, 0, 0);
		scene.add(coreLight);

		function drawSigilTexture(seed: number) {
			const size = 512;
			const c = document.createElement('canvas');
			c.width = size;
			c.height = size;
			const ctx = c.getContext('2d')!;
			const cx = size / 2;
			const cy = size / 2;

			let s = seed;
			const rand = () => {
				s = (s * 9301 + 49297) % 233280;
				return s / 233280;
			};

			ctx.strokeStyle = 'rgba(199, 154, 63, 0.95)';
			ctx.fillStyle = 'rgba(199, 154, 63, 0.95)';
			ctx.shadowColor = 'rgba(199, 154, 63, 0.9)';
			ctx.shadowBlur = 10;

			[size * 0.46, size * 0.4, size * 0.24].forEach((r, i) => {
				ctx.lineWidth = i === 1 ? 3 : 1.5;
				ctx.beginPath();
				ctx.arc(cx, cy, r, 0, Math.PI * 2);
				ctx.stroke();
			});

			for (let i = 0; i < 24; i++) {
				const a = (i / 24) * Math.PI * 2;
				const inner = size * 0.4;
				const outer = size * 0.46;
				const long = i % 3 === 0;
				const r0 = long ? inner - 6 : inner;
				ctx.lineWidth = long ? 2 : 1;
				ctx.beginPath();
				ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
				ctx.lineTo(cx + Math.cos(a) * outer, cy + Math.sin(a) * outer);
				ctx.stroke();
			}

			const points = 5 + Math.floor(rand() * 3);
			const ringR = size * 0.4;
			const step = Math.floor(points / 2) || 2;
			const pts: [number, number][] = [];
			for (let i = 0; i < points; i++) {
				const a = (i / points) * Math.PI * 2 - Math.PI / 2;
				pts.push([cx + Math.cos(a) * ringR, cy + Math.sin(a) * ringR]);
			}
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			for (let i = 0; i < points; i++) {
				const p = pts[(i * step) % points];
				if (i === 0) ctx.moveTo(p[0], p[1]);
				else ctx.lineTo(p[0], p[1]);
			}
			ctx.closePath();
			ctx.stroke();

			for (let i = 0; i < 8; i++) {
				const a = (i / 8) * Math.PI * 2 + rand() * 0.3;
				const r = size * 0.32;
				ctx.save();
				ctx.translate(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
				ctx.rotate(a + Math.PI / 2);
				ctx.lineWidth = 2;
				const kind = Math.floor(rand() * 3);
				if (kind === 0) {
					ctx.beginPath();
					ctx.moveTo(0, -8);
					ctx.lineTo(0, 8);
					ctx.moveTo(-6, -3);
					ctx.lineTo(0, -8);
					ctx.lineTo(6, -3);
					ctx.stroke();
				} else if (kind === 1) {
					ctx.beginPath();
					ctx.arc(0, 0, 5, 0, Math.PI * 2);
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(0, -9);
					ctx.lineTo(0, -5);
					ctx.stroke();
				} else {
					ctx.beginPath();
					ctx.moveTo(-6, -6);
					ctx.lineTo(6, 6);
					ctx.moveTo(-6, 6);
					ctx.lineTo(6, -6);
					ctx.stroke();
				}
				ctx.restore();
			}

			ctx.beginPath();
			ctx.arc(cx, cy, 3, 0, Math.PI * 2);
			ctx.fill();

			return new THREE.CanvasTexture(c);
		}

		function makeSigilRing({
			radius, y, rotationX, opacity, seed,
		}: { radius: number; y: number; rotationX: number; opacity: number; seed: number }) {
			const texture = drawSigilTexture(seed);
			const material = new THREE.MeshBasicMaterial({
				map: texture,
				transparent: true,
				opacity,
				blending: THREE.AdditiveBlending,
				depthWrite: false,
				side: THREE.DoubleSide,
			});
			const mesh = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), material);
			mesh.rotation.x = rotationX;
			mesh.position.y = y;
			return mesh;
		}

		// --- Rig: everything that shifts with scroll lives in here ---
		const rig = new THREE.Group();
		scene.add(rig);

		const floorSigil = makeSigilRing({ radius: 4.4, y: -1.6, rotationX: -Math.PI / 2 + 0.15, opacity: 0.35, seed: 11 });
		rig.add(floorSigil);

		const floorSigilSmall = makeSigilRing({ radius: 2.4, y: -1.58, rotationX: -Math.PI / 2 + 0.15, opacity: 0.4, seed: 37 });
		floorSigilSmall.position.x = 0.8;
		floorSigilSmall.position.z = 0.6;
		rig.add(floorSigilSmall);

		const haloSigil = makeSigilRing({ radius: 2.6, y: 0, rotationX: 0, opacity: 0.4, seed: 73 });
		haloSigil.position.z = -1.2;
		rig.add(haloSigil);

		const cabinet = new THREE.Group();
		rig.add(cabinet);

		const core = new THREE.Mesh(
			new THREE.IcosahedronGeometry(0.62, 2),
			new THREE.MeshStandardMaterial({
				color: PALETTE.gold,
				emissive: new THREE.Color(PALETTE.gold),
				emissiveIntensity: 0.6,
				roughness: 0.35,
				metalness: 0.2,
			})
		);
		cabinet.add(core);

		const coreGlow = new THREE.Mesh(
			new THREE.SphereGeometry(0.9, 32, 32),
			new THREE.MeshBasicMaterial({ color: PALETTE.gold, transparent: true, opacity: 0.12 })
		);
		cabinet.add(coreGlow);

		function makeVial() {
			const g = new THREE.Group();
			const body = new THREE.Mesh(
				new THREE.CylinderGeometry(0.11, 0.09, 0.42, 16),
				new THREE.MeshPhysicalMaterial({ color: PALETTE.moss, roughness: 0.15, transmission: 0.6, thickness: 0.3, metalness: 0 })
			);
			const cork = new THREE.Mesh(
				new THREE.CylinderGeometry(0.06, 0.06, 0.1, 12),
				new THREE.MeshStandardMaterial({ color: PALETTE.sepia, roughness: 0.9 })
			);
			cork.position.y = 0.26;
			g.add(body, cork);
			return g;
		}
		function makeQuill() {
			const g = new THREE.Group();
			const shaft = new THREE.Mesh(
				new THREE.ConeGeometry(0.03, 0.7, 8),
				new THREE.MeshStandardMaterial({ color: PALETTE.parchment, roughness: 0.7 })
			);
			shaft.rotation.z = Math.PI * 0.15;
			const tip = new THREE.Mesh(
				new THREE.ConeGeometry(0.015, 0.15, 8),
				new THREE.MeshStandardMaterial({ color: PALETTE.ink, roughness: 0.5 })
			);
			tip.position.y = -0.4;
			tip.rotation.z = Math.PI * 0.15;
			g.add(shaft, tip);
			return g;
		}
		function makeLeaf() {
			const leaf = new THREE.Mesh(
				new THREE.SphereGeometry(0.24, 12, 8),
				new THREE.MeshStandardMaterial({ color: PALETTE.sage, roughness: 0.8 })
			);
			leaf.scale.set(1, 1.6, 0.18);
			return leaf;
		}
		function makeKey() {
			const g = new THREE.Group();
			const ring = new THREE.Mesh(
				new THREE.TorusGeometry(0.14, 0.03, 8, 16),
				new THREE.MeshStandardMaterial({ color: PALETTE.gold, roughness: 0.35, metalness: 0.6 })
			);
			const shaft = new THREE.Mesh(
				new THREE.CylinderGeometry(0.025, 0.025, 0.36, 8),
				new THREE.MeshStandardMaterial({ color: PALETTE.gold, roughness: 0.35, metalness: 0.6 })
			);
			shaft.position.y = -0.24;
			const tooth = new THREE.Mesh(
				new THREE.BoxGeometry(0.09, 0.05, 0.03),
				new THREE.MeshStandardMaterial({ color: PALETTE.gold, roughness: 0.35, metalness: 0.6 })
			);
			tooth.position.set(0.045, -0.4, 0);
			g.add(ring, shaft, tooth);
			return g;
		}
		function makeCrystal() {
			return new THREE.Mesh(
				new THREE.OctahedronGeometry(0.18, 0),
				new THREE.MeshPhysicalMaterial({ color: PALETTE.sage, roughness: 0.1, transmission: 0.5, thickness: 0.5 })
			);
		}
		function makeBook() {
			return new THREE.Mesh(
				new THREE.BoxGeometry(0.34, 0.26, 0.08),
				new THREE.MeshStandardMaterial({ color: PALETTE.sepia, roughness: 0.85 })
			);
		}

		const trinketFactories = [makeVial, makeQuill, makeLeaf, makeKey, makeCrystal, makeBook];
		const orbits = trinketFactories.map((factory, i) => {
			const mesh = factory();
			const radius = 2.1 + (i % 3) * 0.55;
			const speed = 0.12 + Math.random() * 0.08;
			const tilt = (Math.random() - 0.5) * 0.6;
			const phase = (i / trinketFactories.length) * Math.PI * 2;
			const bobAmount = 0.15 + Math.random() * 0.15;
			mesh.scale.setScalar(0.001);
			cabinet.add(mesh);
			return { mesh, radius, speed, tilt, phase, bobAmount, targetScale: 0.85 + Math.random() * 0.3 };
		});

		const MOTE_COUNT = 90;
		const moteGeometry = new THREE.BufferGeometry();
		const motePositions = new Float32Array(MOTE_COUNT * 3);
		const moteSpeeds = new Float32Array(MOTE_COUNT);
		for (let i = 0; i < MOTE_COUNT; i++) {
			motePositions[i * 3] = (Math.random() - 0.5) * 9;
			motePositions[i * 3 + 1] = (Math.random() - 0.5) * 6;
			motePositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
			moteSpeeds[i] = 0.15 + Math.random() * 0.25;
		}
		moteGeometry.setAttribute('position', new THREE.BufferAttribute(motePositions, 3));
		const motes = new THREE.Points(
			moteGeometry,
			new THREE.PointsMaterial({ color: PALETTE.gold, size: 0.035, transparent: true, opacity: 0.55, sizeAttenuation: true })
		);
		scene.add(motes); // motes stay independent of scroll rig — ambient, not scene furniture

		const pointer = { x: 0, y: 0 };
		const handlePointerMove = (e: PointerEvent) => {
			pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
			pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
		};
		window.addEventListener('pointermove', handlePointerMove);

		// --- Scroll tracking ---
		const scrollYRef = { current: window.scrollY };
		const handleScroll = () => {
			scrollYRef.current = window.scrollY;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });

		// How far (in px) the rig descends per px of page scroll — tune to taste
		const SCROLL_PARALLAX = 0.0026;

		// Fade the whole layer out once the user scrolls well past Experience
		// Keep the scene visible through Experience AND Projects,
		// then fade it out before Skills/Certifications get busy
		let fadeRangeStart = 0;
		let fadeRangeEnd = 0;
		const computeFadeRange = () => {
			const projectsEl = document.getElementById('projects');
			const experienceEl = document.getElementById('experience');
			const anchor = projectsEl ?? experienceEl;
			const start = anchor
				? anchor.offsetTop + anchor.offsetHeight * 0.75
				: window.innerHeight * 2.5;
			fadeRangeStart = start;
			fadeRangeEnd = start + window.innerHeight * 0.9;
		};
		computeFadeRange();

		const clock = new THREE.Clock();
		const loadStart = clock.getElapsedTime();
		let frameId: number;

		function animate() {
			const elapsed = clock.getElapsedTime();
			const introT = Math.min(1, (elapsed - loadStart) / 1.8);
			const eased = 1 - Math.pow(1 - introT, 3);
			const scrollY = scrollYRef.current;

			// rig descends with the page
			rig.position.y = -scrollY * SCROLL_PARALLAX;

			// fade out after Experience
			let opacity = 1;
			if (scrollY > fadeRangeStart) {
				const t = Math.min(1, (scrollY - fadeRangeStart) / (fadeRangeEnd - fadeRangeStart));
				opacity = 1 - t * 0.88; // floor around 0.12, never fully gone
			}
			if (canvas) {

				canvas.style.opacity = String(opacity);
			}

			if (!prefersReducedMotion) {
				core.rotation.x = elapsed * 0.2;
				core.rotation.y = elapsed * 0.25;
				cabinet.rotation.y = Math.sin(elapsed * 0.08) * 0.15;

				orbits.forEach((o, i) => {
					const angle = o.phase + elapsed * o.speed;
					const x = Math.cos(angle) * o.radius;
					const z = Math.sin(angle) * o.radius * 0.6;
					const y = Math.sin(elapsed * 0.6 + i) * o.bobAmount + o.tilt;
					o.mesh.position.set(x, y, z);
					o.mesh.rotation.y = elapsed * 0.4;
					o.mesh.rotation.x = elapsed * 0.25;
					o.mesh.scale.setScalar(o.targetScale * eased);
				});

				const positions = motes.geometry.attributes.position.array as Float32Array;
				for (let i = 0; i < MOTE_COUNT; i++) {
					positions[i * 3 + 1] += moteSpeeds[i] * 0.006;
					if (positions[i * 3 + 1] > 3.2) positions[i * 3 + 1] = -3.2;
				}
				motes.geometry.attributes.position.needsUpdate = true;

				coreLight.intensity = 2.4 + Math.sin(elapsed * 1.4) * 0.25;
				floorSigil.rotation.z = elapsed * 0.035;
				floorSigilSmall.rotation.z = -elapsed * 0.06;
				haloSigil.rotation.z = elapsed * 0.05;
				haloSigil.material.opacity = 0.32 + Math.sin(elapsed * 0.9) * 0.08;
				floorSigil.material.opacity = 0.28 + Math.sin(elapsed * 0.7 + 1) * 0.06;
			} else {
				orbits.forEach((o) => o.mesh.scale.setScalar(o.targetScale));
			}

			camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04;
			camera.position.y += (-pointer.y * 0.4 + 0.3 - camera.position.y) * 0.04;
			camera.lookAt(0, 0, 0);

			renderer.render(scene, camera);
			frameId = requestAnimationFrame(animate);
		}
		animate();

		const handleResize = () => {
			const w = window.innerWidth;
			const h = window.innerHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
			computeFadeRange();
		};
		window.addEventListener('resize', handleResize);

		return () => {
			cancelAnimationFrame(frameId);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('pointermove', handlePointerMove);
			window.removeEventListener('scroll', handleScroll);

			scene.traverse((obj) => {
				if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
					obj.geometry?.dispose();
					const material = obj.material as THREE.Material | THREE.Material[];
					if (Array.isArray(material)) material.forEach((m) => m.dispose());
					else material?.dispose();
				}
			});
			renderer.dispose();
		};
	}, []);

	return (
		<div className="fixed inset-0 -z-10 bg-coffeeBean pointer-events-none">
			<canvas ref={canvasRef} className="w-full h-full transition-opacity duration-300" aria-hidden="true" />
		</div>
	);
}
