import { AboutVisual } from "#/components/decor/AboutVisual";
import { Eyebrow } from "#/components/ui/Eyebrow";
import { site } from "#/data/site";
import { m } from "#/paraglide/messages";

export function AboutSection() {
	return (
		<section className="about section-pad" id="sobre">
			<div className="container about-layout">
				<AboutVisual />

				<div className="about-copy">
					<Eyebrow>{m.about_eyebrow()}</Eyebrow>
					<h2>
						{m.about_title_1()}
						<br />
						<span>{m.about_title_2()}</span>
					</h2>

					<p className="about-lead">{m.about_lead()}</p>
					<p>{m.about_p_1()}</p>
					<p>{m.about_p_2()}</p>

					<div className="about-signature">
						<span className="signature-line" />
						<span>{site.tagline}</span>
					</div>
				</div>
			</div>
		</section>
	);
}
