import { FolderGit2, ArrowUpRight, Binary, Cpu, ShieldCheck } from 'lucide-react';


export const ledger = [
	{
		title: "Logo Verification Forensic Framework",
		manifestType: "Deep Learning Neural Core",
		description: "Constructed an end-to-end verification framework via a Siamese layout with a ResNet50 framework backbone and Multi-Head Cross-Attention modules. Combined a Flask backend with a responsive Flutter terminal.",
		runes: ["ResNet50", "Cross-Attention", "Flask API", "Flutter"],
		image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
		github: "https://github.com/RenardMacorol",
		icon: Binary
	},
	{
		title: "TheCICS — Thesis Ledger Command",
		manifestType: "Agile Infrastructure",
		description: "Directed feature engineering and development sprints as Scrum Master and Chief Architect. Created resilient manuscript ingestion handling and automated workflow tracking layers.",
		runes: ["Next.js", "Tailwind CSS", "Supabase", "Project Management"],
		image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
		github: "https://github.com/RenardMacorol",
		icon: Cpu
	},
	{
		title: "OJTLINK — OJT Management System",
		manifestType: "Centralized Management Registry",
		description: "Led the end-to-end development of a centralized OJT management platform associated with New Era University, streamlining training workflows, compliance pipelines, and documentation paths for scholars and administrators alike. Forged using a scalable, real-time data persistence engine.",
		runes: ["React", "Tailwind CSS", "Supabase", "SQL", "Project Management", "Project Planning"],
		image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", // Tailored image for management/tracking workspace
		github: "https://github.com/RenardMacorol",
		icon: ShieldCheck // Represents verification, management, and compliance checks
	}
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
			{/* Title Header Section */}
			<div className="flex items-center gap-4 mb-14 border-b border-brownBark/60 pb-5">
				<div className="p-2.5 bg-charcoalBrown border border-sandyClay/40 rounded-lg">
					<FolderGit2 className="w-6 h-6 text-mutedTeal" />
				</div>
				<div>
					<h2 className="text-2xl md:text-3xl font-bold text-cornsilk tracking-wide">The Vault of Blueprints</h2>
					<p className="text-xs text-sandyClay/70 font-mono tracking-widest uppercase mt-0.5">Proven deployments & systems research</p>
				</div>
			</div>

			{/* Grid Container */}
			<div className="grid md:grid-cols-2 gap-8">
				{ledger.map((project, idx) => {
					const TechIcon = project.icon;
					return (
						<div
							key={idx}
							className="bg-charcoalBrown border-2 border-brownBark/40 hover:border-mutedTealSecondary/60 rounded-xl transition-all duration-300 flex flex-col justify-between group shadow-xl overflow-hidden"
						>
							{/* Project Visual Matrix */}
							<div className="relative aspect-video w-full bg-coffeeBean overflow-hidden border-b border-brownBark/30">
								<div className="absolute inset-0 bg-gradient-to-t from-charcoalBrown via-transparent to-transparent z-10 opacity-80" />
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover filter grayscale contrast-125 mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
								/>
								<div className="absolute top-3 right-3 z-20 p-1.5 bg-coffeeBean/80 rounded-md backdrop-blur border border-brownBark/40">
									<TechIcon className="w-4 h-4 text-sandyClay group-hover:text-royalGold transition-colors" />
								</div>
							</div>

							{/* Project Metrics Content */}
							<div className="p-6 flex flex-col justify-between flex-grow">
								<div>
									<div className="flex justify-between items-center mb-3">
										<span className="text-[10px] font-mono tracking-wider text-sandyClay bg-coffeeBean/60 border border-brownBark/60 px-2 py-0.5 rounded uppercase">
											{project.manifestType}
										</span>
									</div>

									<h3 className="text-xl font-bold text-cornsilk mb-3 group-hover:text-mutedTeal transition-colors duration-200">
										{project.title}
									</h3>

									<p className="text-cornsilk/70 text-sm leading-relaxed mb-6 font-serif italic">
										"{project.description}"
									</p>
								</div>

								<div>
									{/* Tech Badges / Runes */}
									<div className="flex flex-wrap gap-2 mb-6">
										{project.runes.map((rune, rIdx) => (
											<span key={rIdx} className="text-xs bg-coffeeBean text-drySage border border-brownBark/40 px-2.5 py-1 rounded font-mono">
												{rune}
											</span>
										))}
									</div>

									{/* Footer Interactive Actions */}
									<div className="flex justify-between items-center text-xs text-sandyClay/50 font-mono border-t border-brownBark/30 pt-4">
										<span className="text-sandyClay/60">Production Ready</span>

										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-coffeeBean border border-brownBark/50 text-cornsilk/80 hover:text-mutedTeal hover:border-mutedTeal/60 transition-all duration-200 z-20"
										>
											<span>Repository</span>
											<ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
