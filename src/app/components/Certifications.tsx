'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ArrowUpRight } from 'lucide-react';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

export const CERTIFICATIONS = [
	'Introduction to Scrum Master Training',
	'SQL and Relational Databases 101',
	'Deep Learning Fundamentals',
	'Python 101 for Data Science',
	'Supervised Machine Learning: Regression and Classification',
	'Next.js App Router Fundamentals',
	'React Foundations',
	'Docker Essentials: A Developer Introduction',
	'Postman API Fundamentals Student Expert',
];

export default function CertificationsSection() {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			gsap.from('[data-cert-row]', {
				opacity: 0,
				x: -12,
				duration: 0.4,
				stagger: 0.05,
				ease: 'power2.out',
				scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
			});
			return () => ScrollTrigger.getAll().forEach((t) => t.kill());
		});
		return () => mm.revert();
	}, []);

	return (
		<section
			id="certifications"
			ref={sectionRef}
			className="relative py-20 bg-coffeeBean/70 backdrop-blur-[2px] text-cornsilk/80 border-t-4 border-royalGold bg-[repeating-linear-gradient(45deg,rgba(243,233,214,0.02)_0px,rgba(243,233,214,0.02)_1px,transparent_1px,transparent_14px)]"
		>
			<div className="max-w-4xl mx-auto px-6">
				{/* Header — ledger stamp style, matches the other sections */}
				<div className="flex items-end justify-between gap-4 mb-16 border-b-4 border-royalGold pb-4">
					<div className="flex items-center gap-4">
						<div className="p-3 border-2 border-cornsilk/30 bg-charcoalBrown rotate-2">
							<Award className="w-6 h-6 text-royalGold" />
						</div>
						<div>
							<h2 className="font-mono text-2xl md:text-4xl font-black uppercase tracking-tight text-cornsilk">
								Runes<span className="text-royalGold">.</span>of Qualification
							</h2>
							<p className="text-xs md:text-sm text-cornsilk/50 font-mono uppercase tracking-[0.2em] mt-1">
								§ Sealed credentials &amp; completed rites
							</p>
						</div>
					</div>
					<span className="hidden sm:inline-block font-mono text-xs uppercase tracking-widest text-charcoalBrown bg-royalGold px-3 py-1 -rotate-2 shrink-0">
						Final Ledger
					</span>
				</div>

				{/* Ledger index — bordered rows, hard-offset shadow like the other stamped blocks */}
				<div className="relative bg-charcoalBrown border-2 border-cornsilk/20 shadow-[8px_8px_0_0_rgba(0,0,0,0.85)] overflow-hidden">
					{CERTIFICATIONS.map((cert, idx) => (
						<div
							key={cert}
							data-cert-row
							className={`flex items-center justify-between gap-4 px-5 md:px-6 py-4 hover:bg-royalGold/10 transition-colors duration-200 cursor-default group ${idx !== CERTIFICATIONS.length - 1 ? 'border-b-2 border-dashed border-cornsilk/15' : ''
								}`}
						>
							<div className="flex items-baseline gap-4 min-w-0">
								<span className="font-mono text-xs text-mutedTeal shrink-0 w-8 border border-cornsilk/20 text-center py-0.5 bg-coffeeBean">
									{String(idx + 1).padStart(2, '0')}
								</span>
								<p className="font-mono text-sm font-medium uppercase tracking-wide text-cornsilk group-hover:text-royalGold transition-colors duration-200 truncate">
									{cert}
								</p>
							</div>
							<ArrowUpRight className="w-4 h-4 text-cornsilk/30 group-hover:text-royalGold shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
						</div>
					))}

					{/* Corner rivet accents */}
					<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cornsilk/20 rounded-full" />
					<span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-cornsilk/20 rounded-full" />
				</div>
			</div>
		</section>
	);
}
