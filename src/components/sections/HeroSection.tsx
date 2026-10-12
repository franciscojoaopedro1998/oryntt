import { ArrowDownRight, ArrowRight } from "lucide-react";
import { HeroOrbit } from "#/components/decor/HeroOrbit";
import { Eyebrow } from "#/components/ui/Eyebrow";
import { m } from "#/paraglide/messages";

export function HeroSection() {
	return (
		<section className="hero" id="inicio">
			<div className="hero-image" />
			<div className="hero-grid" />

			<div className="container hero-content">
				<Eyebrow dot>{m.hero_eyebrow()}</Eyebrow>

				<h1>
					<span className="hero-title-line">{m.hero_title_1()}</span>
					<br />
					<span>{m.hero_title_2()}</span>
				</h1>

				<p className="hero-lead">{m.hero_lead()}</p>

				<div className="hero-actions">
					<a className="button button-primary" href="#produtos">
						{m.hero_cta_primary()} <ArrowRight size={17} />
					</a>
					<a className="text-link" href="#sobre">
						{m.hero_cta_secondary()} <ArrowDownRight size={17} />
					</a>
				</div>

				<div className="hero-note">
					<span className="note-line" /> {m.hero_note()}
				</div>
			</div>

			<HeroOrbit />

			<a href="#produtos" className="scroll-cue">
				<span /> {m.hero_scroll()}
			</a>
		</section>
	);
}
