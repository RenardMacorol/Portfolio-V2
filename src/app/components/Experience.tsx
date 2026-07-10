import { History, Shield, Library, Cpu, Briefcase } from 'lucide-react';

export default function Experience() {
	return (
		<section id="experience" className="py-16 px-6 max-w-6xl mx-auto">
			{/* Component Title */}
			<div className="flex items-center gap-3 mb-12">
				<div className="p-2 rounded-lg bg-charcoalBrown border border-brownBark/40">
					<History className="w-6 h-6 text-mutedTeal" />
				</div>
				<div>
					<h2 className="text-2xl md:text-3xl font-bold text-cornsilk font-serif">Chronicles of the Craft</h2>
					<p className="text-sm text-cornsilk/60 mt-1">Professional timelines and structural deployments.</p>
				</div>
			</div>

			{/* Timeline Card Container */}
			<div className="relative border-l-2 border-brownBark/30 pl-6 ml-4 space-y-12">

				{/* 1. DOLE INTERNSHIP (Current) */}
				<div className="relative group">
					{/* Chrono-Node */}
					<div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-charcoalBrown border-2 border-mutedTeal shadow-sm shadow-mutedTeal/50 group-hover:bg-mutedTeal transition-colors" />

					{/* Card Frame */}
					<div className="bg-charcoalBrown border border-brownBark/30 rounded-xl p-6 hover:border-mutedTeal/50 transition-all duration-300">
						<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
							<div>
								<h3 className="text-xl font-bold text-cornsilk group-hover:text-royalGold transition-colors duration-200">
									Programmer Intern
								</h3>
								<p className="text-sm text-mutedTeal font-medium">Philippine Department of Labor and Employment (DOLE)</p>
							</div>
							<span className="text-xs font-semibold px-3 py-1 rounded-full bg-coffeeBean text-royalGold border border-brownBark/40 self-start sm:self-auto">
								Jul 2026 - Present
							</span>
						</div>

						{/* Description Points */}
						<ul className="space-y-3 text-cornsilk/80 text-sm leading-relaxed">
							<li className="flex items-start gap-2">
								<Cpu className="w-4 h-4 text-mutedTeal shrink-0 mt-1" />
								<span>Assist in computer programming, system analysis, testing, debugging, and the ongoing enhancement of core information systems and digital services.</span>
							</li>
							<li className="flex items-start gap-2">
								<Library className="w-4 h-4 text-mutedTeal shrink-0 mt-1" />
								<span>Support applications, database development, and maintenance frameworks while formulating clean technical documentation and user manuscripts.</span>
							</li>
							<li className="flex items-start gap-2">
								<Shield className="w-4 h-4 text-mutedTeal shrink-0 mt-1" />
								<span>Provide frontline technical assistance and operational ICT infrastructure tier support for organizational concerns.</span>
							</li>
						</ul>

						{/* Tech Stack Runes */}
						<div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-brownBark/30">
							{["Vue.js", "SQLite", "Azure", "System Analysis", "Tech Support"].map((tech, idx) => (
								<span key={idx} className="text-xs font-mono bg-coffeeBean border border-brownBark/40 text-cornsilk/70 px-2.5 py-1 rounded hover:text-royalGold hover:border-sandyClay transition-colors">
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* 2. SIMPLEVIA INTERNSHIP */}
				<div className="relative group">
					{/* Chrono-Node */}
					<div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-charcoalBrown border-2 border-brownBark shadow-sm group-hover:bg-sandyClay transition-colors" />

					{/* Card Frame */}
					<div className="bg-charcoalBrown border border-brownBark/30 rounded-xl p-6 hover:border-sandyClay/50 transition-all duration-300">
						<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
							<div>
								<h3 className="text-xl font-bold text-cornsilk group-hover:text-royalGold transition-colors duration-200">
									C# Backend Developer (OJT)
								</h3>
								<p className="text-sm text-sandyClay font-medium">Simplevia Technologies INC</p>
							</div>
							<span className="text-xs font-semibold px-3 py-1 rounded-full bg-coffeeBean text-royalGold border border-brownBark/40 self-start sm:self-auto">
								2025
							</span>
						</div>

						{/* Description Points */}
						<ul className="space-y-3 text-cornsilk/80 text-sm leading-relaxed">
							<li className="flex items-start gap-2">
								<Shield className="w-4 h-4 text-mutedTeal shrink-0 mt-1" />
								<span>Collaborated on the design and management of relational databases, ensuring deep data integrity and alignment with complex client requirements.</span>
							</li>
							<li className="flex items-start gap-2">
								<Library className="w-4 h-4 text-mutedTeal shrink-0 mt-1" />
								<span>Engineered robust backend API endpoints and implemented seamless database integrations to power mission-critical system infrastructure.</span>
							</li>
						</ul>

						{/* Tech Stack Runes */}
						<div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-brownBark/30">
							{["C#", "MySQL", "Relational Databases", "Backend APIs", "Git"].map((tech, idx) => (
								<span key={idx} className="text-xs font-mono bg-coffeeBean border border-brownBark/40 text-cornsilk/70 px-2.5 py-1 rounded hover:text-royalGold hover:border-sandyClay transition-colors">
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>

			</div>
		</section>
	);
}
