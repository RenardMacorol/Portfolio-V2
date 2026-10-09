import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import SkillsSection from './components/Skills';
import CertificationsSection from './components/Certifications';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Footer from '@/app/components/Footer';
import SceneCanvasWrapper from '@/app/components/SceneCanvasWrapper';

export default function Home() {
	return (
		<div className="relative min-h-screen text-cornsilk selection:bg-mutedTeal selection:text-charcoalBrown">
			<SceneCanvasWrapper />
			<Navbar />
			<main className="relative z-10 pb-12">
				<Hero />
				<Experience />
				<Projects />
				<SkillsSection />
				<CertificationsSection />
			</main>
			<Footer />
		</div>
	);
}
