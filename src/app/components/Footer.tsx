import { Mail, MapPin, Compass, GitMerge } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="border-t border-brownBark/40 bg-coffeeBean text-cornsilk/50 text-sm py-12 px-6 font-serif">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

				{/* Branding & Registry Metadata */}
				<div className="text-center md:text-left">
					<p className="text-cornsilk/80 font-medium tracking-wide">
						Renard Macorol <span className="text-mutedTeal">© {new Date().getFullYear()}</span>
					</p>
					<p className="text-xs text-sandyClay/60 mt-1.5 flex items-center gap-1 justify-center md:justify-start font-mono">
						<MapPin className="w-3 h-3 text-cinnamonWood" /> Caloocan City, Philippines
					</p>
				</div>

				{/* Channels of Transmission (Links) */}
				<div className="flex items-center gap-6 font-medium text-xs font-mono uppercase tracking-wider">
					<a
						href="mailto:macorolrenard023@gmail.com"
						className="text-sandyClay/80 hover:text-mutedTeal flex items-center gap-2 transition-colors duration-200"
					>
						<Mail className="w-4 h-4 text-cinnamonWood" />
						<span className="hidden sm:inline lowercase text-cornsilk/70 hover:text-mutedTeal">
							macorolrenard023@gmail.com
						</span>
						<span className="sm:hidden">Mail</span>
					</a>

					<a
						href="https://github.com/RenardMacorol"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sandyClay/80 hover:text-mutedTeal flex items-center gap-2 transition-colors duration-200"
					>
						<GitMerge className="w-4 h-4 text-cinnamonWood" />
						<span>Forge / GitHub</span>
					</a>
				</div>

			</div>
		</footer>
	);
}
