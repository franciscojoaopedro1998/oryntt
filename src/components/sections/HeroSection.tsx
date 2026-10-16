import { useId } from "react";
import { site } from "#/data/site";
import { m } from "#/paraglide/messages";

/** The blade from the logo, stretched into a rising path: wide tail, sharp tip. */
const TRAJECTORY = "M0 132 C110 96 250 52 400 4 C285 58 150 116 34 160 Z";

/**
 * The page's one load moment: the blade rises from "Ideas into" and points
 * at "Impact.", the same cut that runs through the O of the logo.
 */
function HeroBlade() {
	const gradient = `${useId()}-trajectory`;

	return (
		<svg
			className="hero-blade"
			viewBox="0 0 400 160"
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<defs>
				<linearGradient id={gradient} x1="0" y1="1" x2="1" y2="0">
					<stop offset="0" stopColor="var(--cyan)" />
					<stop offset="1" stopColor="var(--green)" />
				</linearGradient>
			</defs>
			<path d={TRAJECTORY} fill={`url(#${gradient})`} />
		</svg>
	);
}

export function HeroSection() {
	return (
		<section className="hero" id="inicio">
			<div className="container hero-inner">
				<p className="hero-kicker">{m.hero_eyebrow()}</p>

				<h1 className="hero-title">
					<span className="sr-only">{site.fullName}: </span>
					<span className="hero-line">{m.hero_title_1()}</span>{" "}
					<span className="hero-line hero-line-impact">
						<HeroBlade />
						{m.hero_title_2()}
					</span>
				</h1>

				<div className="hero-base">
					<p className="hero-lead">{m.hero_lead()}</p>

					<div className="hero-actions">
						<a className="button button-primary" href="#produtos">
							{m.hero_cta_primary()}
						</a>
						<a className="button button-ghost" href="#sobre">
							{m.hero_cta_secondary()}
						</a>
					</div>
				</div>
			</div>

			<div className="container hero-foot">
				<p>{m.hero_note()}</p>
			</div>
		</section>
	);
}
