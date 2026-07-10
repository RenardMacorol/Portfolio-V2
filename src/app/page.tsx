import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import SkillsSection from './components/Skills';
import CertificationsSection from './components/Certifications';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Footer from '@/app/components/Footer';

export default function Home() {

	return (
		<div className="min-h-screen bg-skyDark text-gray-100 selection:bg-witchPurple selection:text-white">
			<Navbar />
			<main className="pb-12">
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
