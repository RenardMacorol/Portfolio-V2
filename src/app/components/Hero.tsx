import { Scroll, Compass } from 'lucide-react';

export default function Hero() {
	return (
		<section id="about" className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
			{/* Soft atmospheric gradient spheres based on your palette */}
			<div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-mutedTeal/10 rounded-full blur-[140px] pointer-events-none" />
			<div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cinnamonWood/5 rounded-full blur-[120px] pointer-events-none" />

			<div className="max-w-3xl text-center z-10 border border-brownBark/40 bg-charcoalBrown/50 p-8 md:p-12 rounded-xl backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
				{/* Ancient Explorer Badge */}
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-mutedTeal/40 bg-coffeeBean text-xs text-mutedTeal uppercase tracking-widest mb-6 font-mono">
					<Compass className="w-3.5 h-3.5 text-sandyClay" />
					<span>Systems Architect & Deep Learning Scholar</span>
				</div>

				{/* Rustic Header Typography */}
				<h1 className="text-4xl md:text-5xl font-normal text-cornsilk mb-6 tracking-tight">
					Welcome to the Archive. I am <br />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-royalGold via-sandyClay to-mutedTeal font-serif font-bold italic drop-shadow-sm">
						Renard Macorol
					</span>
				</h1>

				<p className="text-base md:text-lg text-cornsilk/80 max-w-xl mx-auto mb-10 leading-relaxed font-serif italic">
					"Bridging backend infrastructure foundations with sophisticated neural architectures. I organize raw data chaos into highly efficient, secure, and intelligent production lifecycles."
				</p>

				{/* Tailored Palette Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<a href="#projects" className="group px-6 py-3 rounded bg-cinnamonWood text-cornsilk font-medium flex items-center gap-2 hover:bg-cinnamonWood/80 transition-all border border-royalGold/20 shadow-md">
						<Scroll className="w-4 h-4 text-cornsilk" />
						Examine the Chronicles
					</a>
					<a href="mailto:macorolrenard023@gmail.com" className="px-6 py-3 rounded border border-brownBark bg-coffeeBean text-sandyClay hover:text-cornsilk hover:border-mutedTeal/60 transition-all font-medium">
						Send Dispatch
					</a>
				</div>
			</div>
		</section>
	);
}
