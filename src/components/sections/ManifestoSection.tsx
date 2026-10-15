import { Eyebrow } from "#/components/ui/Eyebrow";
import { m } from "#/paraglide/messages";

export function ManifestoSection() {
	return (
		<section className="manifesto">
			<div className="container manifesto-inner">
				<Eyebrow>{m.manifesto_eyebrow()}</Eyebrow>
				<p className="manifesto-text">
					{m.manifesto_p_1()}
					<br />
					{m.manifesto_p_2()}
				</p>
				<p className="manifesto-bottom">{m.manifesto_bottom()}</p>
			</div>
		</section>
	);
}
