import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "#/components/layout/Footer";
import { Header } from "#/components/layout/Header";
import { AboutSection } from "#/components/sections/AboutSection";
import { ContactSection } from "#/components/sections/ContactSection";
import { HeroSection } from "#/components/sections/HeroSection";
import { IntroSection } from "#/components/sections/IntroSection";
import { ManifestoSection } from "#/components/sections/ManifestoSection";
import { PrinciplesSection } from "#/components/sections/PrinciplesSection";
import { ProductsSection } from "#/components/sections/ProductsSection";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<IntroSection />
				<ProductsSection />
				<AboutSection />
				<PrinciplesSection />
				<ManifestoSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
