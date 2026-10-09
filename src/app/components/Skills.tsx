'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

export const SKILLS_CATEGORIES = [
	{
		category: 'Core Spells',
		subtitle: 'Languages',
		skills: ['Java', 'Python', 'C#', 'SQL'],
		entryNo: '01',
	},
	{
		category: 'Alchemist Frameworks',
		subtitle: 'Web & Backend',
		skills: ['Next.js', 'React', 'Flask', 'Tailwind CSS', 'Supabase', 'Firebase', 'MySQL'],
		entryNo: '02',
	},
	{
		category: 'Enchanted Interfaces',
		subtitle: 'Mobile',
		skills: ['Flutter'],
		entryNo: '03',
	},
	{
		category: 'Forge Tools',
		subtitle: 'DevOps & Management',
		skills: ['Docker', 'Git', 'GitHub', 'Postman', 'Project Management', 'Agile / Scrum'],
		entryNo: '04',
	},
];

export default function SkillsSection() {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			const cards = gsap.utils.toArray<HTMLElement>('[data-skill-card]');
			cards.forEach((card, i) => {
				const tl = gsap.timeline({
					scrollTrigger: { trigger: card, start: 'top 85%' },
					delay: i * 0.08,
				});
				tl.from(card, {
					opacity: 0,
					y: 24,
					rotate: i % 2 === 0 ? -1 : 1,
					duration: 0.5,
					ease: 'power2.out',
				}).from(
					card.querySelectorAll('[data-skill-badge]'),
					{ opacity: 0, y: 8, duration: 0.35, stagger: 0.04, ease: 'power2.out' },
					'-=0.2',
				);
			});
			return () => ScrollTrigger.getAll().forEach((t) => t.kill());
		});
		return () => mm.revert();
	}, []);

	return (
		<section
			id="skills"
			ref={sectionRef}
			className="relative py-20 bg-coffeeBean/70 backdrop-blur-[2px] text-cornsilk/80 border-t-4 border-royalGold bg-[repeating-linear-gradient(45deg,rgba(243,233,214,0.02)_0px,rgba(243,233,214,0.02)_1px,transparent_1px,transparent_14px)]"
		>
			<div className="max-w-6xl mx-auto px-6">
				{/* Header — ledger stamp style, matches Experience & Projects */}
				<div className="flex items-end justify-between gap-4 mb-16 border-b-4 border-royalGold pb-4">
					<div className="flex items-center gap-4">
						<div className="p-3 border-2 border-cornsilk/30 bg-charcoalBrown -rotate-2">
							<Sparkles className="w-6 h-6 text-mutedTeal" />
						</div>
						<div>
							<h2 className="font-mono text-2xl md:text-4xl font-black uppercase tracking-tight text-cornsilk">
								Arcane<span className="text-royalGold">.</span>Masteries
							</h2>
							<p className="text-xs md:text-sm text-cornsilk/50 font-mono uppercase tracking-[0.2em] mt-1">
								§ Catalogued disciplines &amp; tools
							</p>
						</div>
					</div>
					<span className="hidden sm:inline-block font-mono text-xs uppercase tracking-widest text-charcoalBrown bg-royalGold px-3 py-1 rotate-2 shrink-0">
						Grimoire Index
					</span>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
					{SKILLS_CATEGORIES.map(({ category, subtitle, skills, entryNo }) => (
						<div key={category} data-skill-card className="relative group">
							{/* Entry stamp tag */}
							<span className="absolute -top-4 -left-1 md:left-2 font-mono text-[10px] md:text-xs uppercase tracking-widest bg-coffeeBean border-2 border-cornsilk/30 text-royalGold px-2 py-0.5 rotate-[-2deg] z-10">
								Page No. {entryNo}
							</span>

							<div className="relative bg-charcoalBrown border-2 border-cornsilk/20 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,0.85)] hover:shadow-[11px_11px_0_0_rgba(0,0,0,0.9)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-300 ease-out overflow-hidden">
								<div className="absolute top-0 right-0 w-24 h-24 bg-mutedTeal/5 rounded-full blur-2xl group-hover:bg-mutedTeal/10 transition-all duration-500" />

								<div className="relative mb-5 pb-4 border-b-2 border-dashed border-cornsilk/15">
									<h3 className="font-mono text-lg font-bold uppercase tracking-wide text-royalGold">
										{category}
									</h3>
									<p className="font-serif italic text-xs text-cornsilk/50 mt-1">
										{subtitle}
									</p>
								</div>

								<div className="relative flex flex-wrap gap-2.5">
									{skills.map((skill) => (
										<span
											key={skill}
											data-skill-badge
											className="font-mono text-[11px] uppercase tracking-wider border-2 border-cornsilk/25 text-cornsilk/70 px-2.5 py-1 hover:bg-royalGold hover:text-charcoalBrown hover:border-royalGold transition-colors duration-150 cursor-default"
										>
											{skill}
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
			</div>
		</section>
	);
}
