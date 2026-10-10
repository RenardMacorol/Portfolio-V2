'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Scroll, Compass, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
	const [revealed, setRevealed] = useState(false);
	const badgeRef = useRef<HTMLDivElement>(null);
	const headlineRef = useRef<HTMLHeadingElement>(null);
	const hintRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
			tl.from(badgeRef.current, { opacity: 0, y: 12, duration: 0.6 })
				.from(
					headlineRef.current?.querySelectorAll('[data-line]') ?? [],
					{ opacity: 0, y: 20, duration: 0.6, stagger: 0.12 },
					'-=0.3',
				)
				.from(hintRef.current, { opacity: 0, y: 8, duration: 0.5 }, '-=0.2');
			return () => tl.kill();
		});
		return () => mm.revert();
	}, []);

	const toggleReveal = () => setRevealed((r) => !r);
	const stopAndDo = (fn: () => void) => (e: React.MouseEvent) => {
		e.stopPropagation();
		fn();
	};

	return (
		<section id="about" className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
			<div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-mutedTeal/10 rounded-full blur-[140px] pointer-events-none" />

			<div
				role="button"
				tabIndex={0}
				aria-expanded={revealed}
				aria-label={revealed ? 'Collapse the archive description' : 'Reveal the archive description'}
				onClick={toggleReveal}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						toggleReveal();
					}
				}}
				className={`ornate-frame max-w-3xl w-full text-center z-10 mx-auto cursor-pointer transition-all duration-500 ease-out ${revealed
					? 'bg-charcoalBrown/50 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.6)] p-8 md:p-12'
					: 'bg-transparent p-4 md:p-6 hover:bg-charcoalBrown/10'
					}`}
			>
				<div ref={badgeRef}>
					<Badge variant="outline" className="font-mono text-xs uppercase tracking-widest text-primary border-primary/40 bg-coffeeBean gap-2 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
						<Compass className="w-3.5 h-3.5 text-sandyClay" data-icon="inline-start" />
						Systems Architect &amp; Deep Learning Scholar
					</Badge>
				</div>

				<h1 ref={headlineRef} className="font-serif text-4xl md:text-5xl font-semibold text-cornsilk mb-6 tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
					<span data-line className="block">Welcome to the Archive. I am</span>
					<span data-line className="block text-royalGold italic">Renard Macorol</span>
				</h1>

				<div ref={hintRef} className={`flex items-center justify-center gap-2 text-xs md:text-sm font-serif italic text-cornsilk/60 mb-2 transition-opacity duration-300 ${revealed ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-pulse'}`}>
					<Sparkles className="w-3.5 h-3.5 text-royalGold" />
					<span>Click to unveil the archive</span>
					<Sparkles className="w-3.5 h-3.5 text-royalGold" />
				</div>

				<div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${revealed ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
					<div className="overflow-hidden">
						<p className="font-serif text-xs md:text-sm uppercase tracking-[0.2em] text-royalGold/80 mt-2 mb-4">
							— Proven by curiosity, sealed by craft —
						</p>
						<p className="font-serif italic text-base md:text-lg text-cornsilk/80 max-w-xl mx-auto mb-10 leading-relaxed">
							&ldquo;Bridging backend infrastructure foundations with sophisticated neural architectures. I organize raw data chaos into highly efficient, secure, and intelligent production lifecycles.&rdquo;
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-2">
							<Button
								size="lg"
								nativeButton={false}
								className="gap-2"
								render={
									<a href="#projects">
										<Scroll className="w-4 h-4" data-icon="inline-start" />
										Examine the Chronicles
									</a>
								}
								onClick={stopAndDo(() => { })}
							/>
							<Button
								size="lg"
								variant="outline"
								nativeButton={false}
								className="border-royalGold text-royalGold hover:bg-royalGold hover:text-charcoalBrown"
								render={<a href="mailto:macorolrenard023@gmail.com">Send Dispatch</a>}
								onClick={stopAndDo(() => { })}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
