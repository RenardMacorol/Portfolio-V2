import React from 'react';
import { Sparkles } from 'lucide-react';

export const SKILLS_CATEGORIES = [
	{
		category: "Core Spells (Languages)",
		skills: ["Java", "Python", "C#", "SQL"]
	},
	{
		category: "Alchemist Frameworks (Web & Backend)",
		skills: ["Next.js", "React", "Flask", "Tailwind CSS", "Supabase", "Firebase", "MySQL"]
	},
	{
		category: "Enchanted Interfaces (Mobile)",
		skills: ["Flutter"]
	},
	{
		category: "Forge Tools (DevOps & Management)",
		skills: ["Docker", "Git", "GitHub", "Postman", "Project Management", "Agile / Scrum"]
	}
];

export default function SkillsSection() {
	return (
		<section id="skills" className="py-20 bg-coffeeBean text-cornsilk/80 border-t border-brownBark/30">
			<div className="max-w-6xl mx-auto px-6">

				{/* Section Heading */}
				<div className="flex items-center space-x-3 mb-12">
					<Sparkles className="w-6 h-6 text-mutedTeal animate-pulse" />
					<h2 className="text-3xl font-bold tracking-tight text-cornsilk font-serif">
						Arcane <span className="text-sandyClay">Masteries</span>
					</h2>
				</div>

				{/* Categories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{SKILLS_CATEGORIES.map((cat, idx) => (
						<div
							key={idx}
							className="bg-charcoalBrown p-6 rounded-xl border border-brownBark/40 relative overflow-hidden group hover:border-mutedTeal/50 transition-all duration-300"
						>
							{/* Mystical Background Accent */}
							<div className="absolute top-0 right-0 w-24 h-24 bg-mutedTealSecondary/5 rounded-full blur-2xl group-hover:bg-mutedTeal/10 transition-all duration-500" />

							<h3 className="text-lg font-semibold text-royalGold mb-4 tracking-wide font-sans">
								{cat.category}
							</h3>

							{/* Skill Badges */}
							<div className="flex flex-wrap gap-2.5">
								{cat.skills.map((skill, sIdx) => (
									<span
										key={sIdx}
										className="px-3 py-1.5 bg-coffeeBean text-xs font-mono rounded-md border border-brownBark/40 text-cornsilk/70 hover:text-royalGold hover:border-sandyClay transition-colors duration-200"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
}
