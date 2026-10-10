'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FolderGit2, ArrowUpRight, Binary, Cpu, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

export const ledger = [
	{
		title: 'Logo Verification Forensic Framework',
		manifestType: 'Deep Learning Neural Core',
		description:
			'Constructed an end-to-end verification framework via a Siamese layout with a ResNet50 framework backbone and Multi-Head Cross-Attention modules. Combined a Flask backend with a responsive Flutter terminal.',
		runes: ['ResNet50', 'Cross-Attention', 'Flask API', 'Flutter', 'Python', 'Google Colab'],
		image:
			'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
		github: 'https://github.com/RenardMacorol',
		icon: Binary,
		entryNo: '01',
	},
	{
		title: 'TheCICS — Thesis Ledger Command',
		manifestType: 'Agile Infrastructure',
		description:
			'Directed feature engineering and development sprints as Scrum Master and Chief Architect. Created resilient manuscript ingestion handling and automated workflow tracking layers.',
		runes: ['Next.js', 'Tailwind CSS', 'Supabase', 'Project Management'],
		image:
			'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
		github: 'https://github.com/RenardMacorol',
		icon: Cpu,
		entryNo: '02',
	},
	{
		title: 'OJTLINK — OJT Management System',
		manifestType: 'Centralized Management Registry',
		description:
			'Led the end-to-end development of a centralized OJT management platform associated with New Era University, streamlining training workflows, compliance pipelines, and documentation paths for scholars and administrators alike. Forged using a scalable, real-time data persistence engine.',
		runes: ['React', 'Tailwind CSS', 'Supabase', 'SQL', 'Project Management', 'Project Planning'],
		image:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
		github: 'https://github.com/RenardMacorol',
		icon: ShieldCheck,
		entryNo: '03',
	},
	{
		title: 'Human Capital Management System',
		manifestType: 'Centralized Management Registry',
		description:
			'An application where Management tracks Timein and Timeout of employee, with dashboard analytics to see KPI performance',
		runes: ['React', 'Tailwind CSS', 'NOSQL', 'ExpressJs', 'JavaScript', 'GCP'],
		image:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
		github: 'https://github.com/RenardMacorol',
		icon: ShieldCheck,
		entryNo: '04',
	},
];

export default function Projects() {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			const cards = gsap.utils.toArray<HTMLElement>('[data-project-card]');
			cards.forEach((card, i) => {
				gsap.from(card, {
					opacity: 0,
					y: 40,
					rotate: i % 2 === 0 ? -1.2 : 1.2,
					duration: 0.6,
					ease: 'power2.out',
					delay: (i % 2) * 0.1,
					scrollTrigger: { trigger: card, start: 'top 85%' },
				});
			});
			return () => ScrollTrigger.getAll().forEach((t) => t.kill());
		});
		return () => mm.revert();
	}, []);

	return (
		<section
			id="projects"
			ref={sectionRef}
			className="relative py-20 px-6 max-w-6xl mx-auto bg-[repeating-linear-gradient(45deg,rgba(243,233,214,0.02)_0px,rgba(243,233,214,0.02)_1px,transparent_1px,transparent_14px)]"
		>
			{/* Header — ledger stamp style, matches Experience */}
			<div className="flex items-end justify-between gap-4 mb-16 border-b-4 border-royalGold pb-4">
				<div className="flex items-center gap-4">
					<div className="p-3 border-2 border-cornsilk/30 bg-charcoalBrown rotate-2">
						<FolderGit2 className="w-6 h-6 text-mutedTeal" />
					</div>
					<div>
						<h2 className="font-mono text-2xl md:text-4xl font-black uppercase tracking-tight text-cornsilk">
							The Vault<span className="text-royalGold">.</span>of Blueprints
						</h2>
						<p className="text-xs md:text-sm text-cornsilk/50 font-mono uppercase tracking-[0.2em] mt-1">
							§ Proven deployments &amp; systems research
						</p>
					</div>
				</div>
				<span className="hidden sm:inline-block font-mono text-xs uppercase tracking-widest text-charcoalBrown bg-royalGold px-3 py-1 -rotate-2 shrink-0">
					Sealed Works
				</span>
			</div>

			{/* Grid */}
			<div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
				{ledger.map((project) => {
					const TechIcon = project.icon;
					return (
						<div key={project.title} data-project-card className="relative group">
							{/* Entry stamp tag */}
							<span className="absolute -top-4 -left-1 md:left-2 font-mono text-[10px] md:text-xs uppercase tracking-widest bg-coffeeBean border-2 border-cornsilk/30 text-royalGold px-2 py-0.5 rotate-[-2deg] z-20">
								Blueprint No. {project.entryNo}
							</span>

							<div
								className="relative bg-charcoalBrown border-2 border-cornsilk/20 flex flex-col justify-between shadow-[8px_8px_0_0_rgba(0,0,0,0.85)] hover:shadow-[11px_11px_0_0_rgba(0,0,0,0.9)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-300 ease-out overflow-hidden"
							>
								{/* Visual */}
								<div className="relative aspect-video w-full bg-coffeeBean overflow-hidden border-b-2 border-dashed border-cornsilk/15">
									<div className="absolute inset-0 bg-gradient-to-t from-charcoalBrown via-transparent to-transparent z-10 opacity-80" />
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover filter grayscale contrast-125 mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
									/>
									<div className="absolute top-3 right-3 z-20 p-1.5 bg-coffeeBean border-2 border-cornsilk/20">
										<TechIcon className="w-4 h-4 text-sandyClay group-hover:text-royalGold transition-colors" />
									</div>
								</div>

								{/* Header */}
								<div className="p-5 md:p-6 border-b-2 border-dashed border-cornsilk/15">
									<span className="inline-block font-mono text-[10px] tracking-wider text-charcoalBrown bg-sandyClay/80 px-2 py-0.5 uppercase mb-3">
										{project.manifestType}
									</span>
									<h3 className="font-mono text-lg md:text-xl font-bold uppercase tracking-wide text-cornsilk group-hover:text-royalGold transition-colors duration-200">
										{project.title}
									</h3>
								</div>

								{/* Body */}
								<div className="p-5 md:p-6 flex-grow">
									<p className="text-cornsilk/70 text-sm leading-relaxed font-serif italic mb-6">
										&ldquo;{project.description}&rdquo;
									</p>
									<div className="flex flex-wrap gap-2">
										{project.runes.map((rune) => (
											<span
												key={rune}
												className="font-mono text-[11px] uppercase tracking-wider border-2 border-cornsilk/25 text-cornsilk/70 px-2.5 py-1 hover:bg-royalGold hover:text-charcoalBrown hover:border-royalGold transition-colors duration-150 cursor-default"
											>
												{rune}
											</span>
										))}
									</div>
								</div>

								{/* Footer */}
								<div className="flex justify-between items-center text-xs font-mono border-t-2 border-dashed border-cornsilk/15 p-5 md:p-6">
									<span className="uppercase tracking-widest text-mutedTeal/80">
										● Production Ready
									</span>
									<Button
										variant="outline"
										size="sm"
										className="rounded-none bg-coffeeBean border-2 border-cornsilk/25 text-cornsilk/80 hover:text-charcoalBrown hover:bg-royalGold hover:border-royalGold gap-1 font-mono uppercase tracking-wide text-xs"
									>
										<a href={project.github} target="_blank" rel="noopener noreferrer">
											Repository
											<ArrowUpRight className="w-3.5 h-3.5" data-icon="inline-end" />
										</a>
									</Button>
								</div>

								{/* Corner rivet accents */}
								<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cornsilk/20 rounded-full" />
								<span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-cornsilk/20 rounded-full" />
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
