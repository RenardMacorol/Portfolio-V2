'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { History, Shield, Library, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
	{
		role: 'Programmer Intern',
		org: 'Philippine Department of Labor and Employment (DOLE)',
		date: 'Jul 2026 — Present',
		current: true,
		entryNo: '01',
		points: [
			{ icon: Cpu, text: 'Assist in computer programming, system analysis, testing, debugging, and the ongoing enhancement of core information systems and digital services.' },
			{ icon: Library, text: 'Support applications, database development, and maintenance frameworks while formulating clean technical documentation and user manuscripts.' },
			{ icon: Shield, text: 'Provide frontline technical assistance and operational ICT infrastructure tier support for organizational concerns.' },
		],
		stack: ['Vue.js', 'SQLite', 'Azure', 'System Analysis', 'Tech Support'],
	},
	{
		role: 'C# Backend Developer (OJT)',
		org: 'Simplevia Technologies INC',
		date: '2025',
		current: false,
		entryNo: '02',
		points: [
			{ icon: Shield, text: 'Collaborated on the design and management of relational databases, ensuring deep data integrity and alignment with complex client requirements.' },
			{ icon: Library, text: 'Engineered robust backend API endpoints and implemented seamless database integrations to power mission-critical system infrastructure.' },
		],
		stack: ['C#', 'MySQL', 'Relational Databases', 'Backend APIs', 'Git'],
	},
];

export default function Experience() {
	const sectionRef = useRef<HTMLElement>(null);
	const spineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			gsap.from(spineRef.current, {
				scaleY: 0,
				transformOrigin: 'top',
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
			});

			const cards = gsap.utils.toArray<HTMLElement>('[data-exp-card]');
			cards.forEach((card, i) => {
				gsap.from(card, {
					opacity: 0,
					y: 40,
					rotate: i % 2 === 0 ? -1.5 : 1.5,
					duration: 0.6,
					ease: 'power2.out',
					scrollTrigger: { trigger: card, start: 'top 85%' },
					delay: i * 0.1,
				});
			});

			return () => ScrollTrigger.getAll().forEach((t) => t.kill());
		});
		return () => mm.revert();
	}, []);

	return (
		<section
			id="experience"
			ref={sectionRef}
			className="relative py-20 px-6 max-w-6xl mx-auto bg-[repeating-linear-gradient(45deg,rgba(243,233,214,0.02)_0px,rgba(243,233,214,0.02)_1px,transparent_1px,transparent_14px)]"
		>
			{/* Header — ledger stamp style */}
			<div className="flex items-end justify-between gap-4 mb-16 border-b-4 border-royalGold pb-4">
				<div className="flex items-center gap-4">
					<div className="p-3 border-2 border-cornsilk/30 bg-charcoalBrown rotate-[-2deg]">
						<History className="w-6 h-6 text-mutedTeal" />
					</div>
					<div>
						<h2 className="font-mono text-2xl md:text-4xl font-black uppercase tracking-tight text-cornsilk">
							Chronicles<span className="text-royalGold">.</span>of the Craft
						</h2>
						<p className="text-xs md:text-sm text-cornsilk/50 font-mono uppercase tracking-[0.2em] mt-1">
							§ Field log — verified deployments
						</p>
					</div>
				</div>
				<span className="hidden sm:inline-block font-mono text-xs uppercase tracking-widest text-charcoalBrown bg-royalGold px-3 py-1 rotate-2 shrink-0">
					Est. Record
				</span>
			</div>

			{/* Timeline */}
			<div className="relative pl-8 ml-4 space-y-16">
				<div
					ref={spineRef}
					className="absolute left-0 top-0 bottom-0 w-1.5 bg-brownBark"
					aria-hidden="true"
				/>

				{experiences.map(({ role, org, date, current, points, stack, entryNo }) => (
					<div key={role} data-exp-card className="relative group">
						{/* Wax-seal node */}
						<div
							className={`absolute -left-[41px] top-8 w-6 h-6 rotate-45 border-2 transition-colors ${current
									? 'bg-royalGold border-cornsilk shadow-[0_0_0_4px_rgba(199,154,63,0.25)]'
									: 'bg-charcoalBrown border-brownBark group-hover:bg-sandyClay'
								}`}
						/>

						{/* Entry stamp tag */}
						<span className="absolute -top-4 -left-1 md:left-2 font-mono text-[10px] md:text-xs uppercase tracking-widest bg-ink bg-coffeeBean border-2 border-cornsilk/30 text-royalGold px-2 py-0.5 rotate-[-2deg] z-10">
							Entry No. {entryNo}
						</span>

						<div
							className={`relative bg-charcoalBrown border-2 border-cornsilk/20 rounded-none transition-all duration-300 ease-out shadow-[8px_8px_0_0_rgba(0,0,0,0.85)] hover:shadow-[11px_11px_0_0_rgba(0,0,0,0.9)] hover:-translate-x-[2px] hover:-translate-y-[2px] ${current ? 'border-mutedTeal/50' : ''
								}`}
						>
							{/* Header */}
							<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-5 md:p-6 border-b-2 border-dashed border-cornsilk/15">
								<div>
									<h3 className="font-mono text-lg md:text-xl font-bold uppercase tracking-wide text-cornsilk group-hover:text-royalGold transition-colors duration-200">
										{role}
									</h3>
									<p className={`font-serif italic text-sm md:text-base mt-1 ${current ? 'text-mutedTeal' : 'text-sandyClay'}`}>
										{org}
									</p>
								</div>
								<Badge
									variant="outline"
									className="font-mono text-xs rounded-none bg-coffeeBean text-royalGold border-2 border-cornsilk/20 self-start sm:self-auto shrink-0"
								>
									{date}
								</Badge>
							</div>

							{/* Body */}
							<div className="p-5 md:p-6">
								<ul className="space-y-3 text-cornsilk/80 text-sm leading-relaxed">
									{points.map(({ icon: Icon, text }, i) => (
										<li key={i} className="flex items-start gap-3">
											<Icon className="w-4 h-4 text-mutedTeal shrink-0 mt-1" />
											<span>{text}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Footer — rubber-stamped stack tags */}
							<div className="flex flex-wrap gap-2 border-t-2 border-dashed border-cornsilk/15 p-5 md:p-6">
								{stack.map((tech) => (
									<span
										key={tech}
										className="font-mono text-[11px] uppercase tracking-wider rounded-none border-2 border-cornsilk/25 text-cornsilk/70 px-2.5 py-1 bg-transparent hover:bg-royalGold hover:text-charcoalBrown hover:border-royalGold transition-colors duration-150 cursor-default"
									>
										{tech}
									</span>
								))}
							</div>

							{/* Corner rivet accents */}
							<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cornsilk/20 rounded-full" />
							<span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-cornsilk/20 rounded-full" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
