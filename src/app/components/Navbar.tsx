'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { Compass, Scroll, Shield, Feather, Menu } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

const links = [
	{ href: '#about', label: 'About', icon: Feather },
	{ href: '#experience', label: 'Chronicles', icon: Shield },
	{ href: '#projects', label: 'Blueprints', icon: Scroll },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const navRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const mm = gsap.matchMedia();
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			gsap.from(navRef.current, {
				y: -24,
				opacity: 0,
				duration: 0.7,
				ease: 'power2.out',
			});
		});
		return () => mm.revert();
	}, []);

	return (
		<nav
			ref={navRef}
			className="sticky top-0 z-50 backdrop-blur-md bg-coffeeBean/80 border-b border-brownBark/40 shadow-[0_1px_0_rgba(250,210,100,0.15)] px-6 py-4"
		>
			<div className="max-w-6xl mx-auto flex justify-between items-center">
				<Link
					href="/"
					className="flex items-center gap-2 font-serif font-bold text-xl text-cornsilk hover:text-mutedTeal transition-colors group"
					onClick={() => setOpen(false)}
				>
					<Compass className="w-5 h-5 text-sandyClay group-hover:rotate-45 transition-transform duration-300" />
					<span className="tracking-tight italic font-black">
						Renard<span className="text-mutedTeal">.dev</span>
					</span>
				</Link>
				<div className="hidden md:flex gap-2 font-serif font-medium">
					{links.map(({ href, label, icon: Icon }) => (
						<Button
							key={href}
							variant="ghost"
							nativeButton={false}
							render={
								<Link href={href} className="flex items-center gap-1.5">
									<Icon className="w-4 h-4 text-sandyClay/70" data-icon="inline-start" />
									<span>{label}</span>
								</Link>
							}
							className="text-cornsilk/80 hover:text-mutedTeal"
						/>
					))}
				</div>
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger
						className={buttonVariants({ variant: "ghost", size: "icon", className: "md:hidden text-cornsilk" })}
						aria-label="Open menu"
					>
						<Menu className="w-6 h-6" />
					</SheetTrigger>
					<SheetContent side="right" className="bg-charcoalBrown border-brownBark/40">
						<SheetHeader>
							<SheetTitle className="font-serif text-cornsilk">Navigate</SheetTitle>
						</SheetHeader>
						<div className="flex flex-col gap-2 px-4 font-serif font-medium">
							{links.map(({ href, label, icon: Icon }) => (
								<Button
									key={href}
									variant="ghost"
									render={
										<Link href={href} className="flex items-center gap-2">
											<Icon className="w-4 h-4 text-sandyClay/70" data-icon="inline-start" />
											<span>{label}</span>
										</Link>
									}
									className="justify-start text-cornsilk/80 hover:text-mutedTeal"
									onClick={() => setOpen(false)}
								/>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}
