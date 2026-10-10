'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Compass, GitMerge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
	const footerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			gsap.from(footerRef.current, {
				opacity: 0,
				y: 16,
				duration: 0.6,
				ease: 'power2.out',
				scrollTrigger: { trigger: footerRef.current, start: 'top 95%' },
			});
		});
		return () => mm.revert();
	}, []);

	return (
		<footer
			ref={footerRef}
			className="border-t border-brownBark/40 bg-coffeeBean text-cornsilk/50 text-sm py-12 px-6 font-serif"
		>
			<div className="max-w-6xl mx-auto">
				{/* Colophon mark */}
				<div className="flex items-center justify-center gap-3 mb-8 text-brownBark">
					<span className="h-px w-16 bg-brownBark/50" />
					<Compass className="w-4 h-4 text-sandyClay/70" />
					<span className="h-px w-16 bg-brownBark/50" />
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					{/* Branding & Registry Metadata */}
					<div className="text-center md:text-left">
						<p className="text-cornsilk/80 font-medium tracking-wide">
							Renard Macorol <span className="text-mutedTeal">© {new Date().getFullYear()}</span>
						</p>
						<p className="text-xs text-sandyClay/60 mt-1.5 flex items-center gap-1 justify-center md:justify-start font-mono">
							<MapPin className="w-3 h-3 text-cinnamonWood" /> Caloocan City, Philippines
						</p>
					</div>

					<Separator orientation="vertical" className="hidden md:block h-10 bg-brownBark/40" />

					{/* Channels of transmission */}
					<div className="flex items-center gap-2 font-mono uppercase tracking-wider text-xs">
						<Button
							variant="ghost"
							className="text-sandyClay/80 hover:text-mutedTeal gap-2"
						>
							<a href="mailto:macorolrenard023@gmail.com">
								<Mail className="w-4 h-4 text-cinnamonWood" data-icon="inline-start" />
								<span className="hidden sm:inline lowercase text-cornsilk/70">
									macorolrenard023@gmail.com
								</span>
								<span className="sm:hidden">Mail</span>
							</a>
						</Button>
						<Button
							variant="ghost"
							className="text-sandyClay/80 hover:text-mutedTeal gap-2"
						>
							<a href="https://github.com/RenardMacorol" target="_blank" rel="noopener noreferrer">
								<GitMerge className="w-4 h-4 text-cinnamonWood" data-icon="inline-start" />
								<span>Forge / GitHub</span>
							</a>
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}
