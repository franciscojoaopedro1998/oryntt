import { m } from "#/paraglide/messages";

export function ManifestoSection() {
	return (
		<section className="manifesto">
			<div className="container">
				<p className="manifesto-text">
					{m.manifesto_p_1()}
					<br />
					<span>{m.manifesto_p_2()}</span>
				</p>
				<span className="brand-bar" aria-hidden="true" />
				<p className="manifesto-bottom">{m.manifesto_bottom()}</p>
			</div>
		</section>
	);
}
