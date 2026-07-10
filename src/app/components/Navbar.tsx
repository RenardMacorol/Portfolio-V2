import Link from 'next/link';
import { Compass, BookOpen, Scroll, Shield, Feather } from 'lucide-react';

export default function Navbar() {
	return (
		<nav className="sticky top-0 z-50 backdrop-blur-md bg-coffeeBean/80 border-b border-brownBark/40 px-6 py-4">
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				{/* Logo / Branding */}
				<Link
					href="/"
					className="flex items-center gap-2 font-serif font-bold text-xl text-cornsilk hover:text-mutedTeal transition-colors group"
				>
					<Compass className="w-5 h-5 text-sandyClay group-hover:rotate-45 transition-transform duration-300" />
					<span className="tracking-tight italic font-black">Renard<span className="text-mutedTeal">.dev</span></span>
				</Link>

				{/* Navigation Links */}
				<div className="flex gap-6 text-sm text-cornsilk/80 font-serif font-medium">
					<Link
						href="#about"
						className="hover:text-mutedTeal flex items-center gap-1.5 transition-colors duration-200"
					>
						<Feather className="w-4 h-4 text-sandyClay/70" />
						<span>About</span>
					</Link>

					<Link
						href="#experience"
						className="hover:text-mutedTeal flex items-center gap-1.5 transition-colors duration-200"
					>
						<Shield className="w-4 h-4 text-sandyClay/70" />
						<span>Chronicles</span>
					</Link>

					<Link
						href="#projects"
						className="hover:text-mutedTeal flex items-center gap-1.5 transition-colors duration-200"
					>
						<Scroll className="w-4 h-4 text-sandyClay/70" />
						<span>Blueprints</span>
					</Link>
				</div>
			</div>
		</nav>
	);
}
