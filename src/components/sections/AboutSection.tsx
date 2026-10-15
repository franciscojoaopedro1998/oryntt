import { Eyebrow } from "#/components/ui/Eyebrow";
import { m } from "#/paraglide/messages";

export function AboutSection() {
	return (
		<section className="about section-pad" id="sobre">
			<div className="container about-layout">
				<div>
					<Eyebrow>{m.about_eyebrow()}</Eyebrow>
					<h2>
						{m.about_title_1()}
						<br />
						{m.about_title_2()}
					</h2>
				</div>

				<div className="about-copy">
					<p className="about-lead">{m.about_lead()}</p>
					<p>{m.about_p_1()}</p>
					<p>{m.about_p_2()}</p>
				</div>
			</div>
		</section>
	);
}
