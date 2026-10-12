import { ManifestoArt } from "#/components/decor/ManifestoArt";
import { Eyebrow } from "#/components/ui/Eyebrow";
import { m } from "#/paraglide/messages";

export function ManifestoSection() {
	return (
		<section className="manifesto">
			<div className="container manifesto-inner">
				<Eyebrow>{m.manifesto_eyebrow()}</Eyebrow>
				<p>
					{m.manifesto_p_1()}
					<br />
					<span>{m.manifesto_p_2()}</span>
				</p>
				<div className="manifesto-bottom">
					<span /> {m.manifesto_bottom()}
				</div>
			</div>

			<ManifestoArt />
		</section>
	);
}
