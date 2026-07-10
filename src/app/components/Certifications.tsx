import React from 'react';
import { Award, ArrowUpRight } from 'lucide-react';

export const CERTIFICATIONS = [
	"Introduction to Scrum Master Training",
	"SQL and Relational Databases 101",
	"Deep Learning Fundamentals",
	"Python 101 for Data Science",
	"Supervised Machine Learning: Regression and Classification",
	"Next.js App Router Fundamentals",
	"React Foundations",
	"Docker Essentials: A Developer Introduction",
	"Postman API Fundamentals Student Expert"
];

export default function CertificationsSection() {
	return (
		<section id="certifications" className="py-20 bg-coffeeBean text-cornsilk/80 border-t border-brownBark/30">
			<div className="max-w-6xl mx-auto px-6">

				{/* Section Heading */}
				<div className="flex items-center space-x-3 mb-12">
					<Award className="w-6 h-6 text-royalGold" />
					<h2 className="text-3xl font-bold tracking-tight text-cornsilk font-serif">
						Runes of <span className="text-sandyClay">Qualification</span>
					</h2>
				</div>

				{/* Certifications Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{CERTIFICATIONS.map((cert, idx) => (
						<div
							key={idx}
							className="bg-charcoalBrown p-5 rounded-lg border border-brownBark/30 flex items-start justify-between group hover:bg-charcoalBrown/80 hover:border-sandyClay/50 transition-all duration-200 cursor-default"
						>
							<div className="space-y-1 pr-2">
								<span className="text-[10px] font-mono uppercase tracking-widest text-mutedTeal">
									Verified Archive [{idx + 1}]
								</span>
								<p className="text-sm font-medium text-cornsilk group-hover:text-royalGold transition-colors duration-200 leading-snug">
									{cert}
								</p>
							</div>

							{/* Clean Theme Action Indicator */}
							<ArrowUpRight className="w-4 h-4 text-brownBark group-hover:text-royalGold shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
						</div>
					))}
				</div>

			</div>
		</section>
	);
}
