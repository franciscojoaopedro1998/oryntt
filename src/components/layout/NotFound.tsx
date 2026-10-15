import { Eyebrow } from "#/components/ui/Eyebrow";
import { m } from "#/paraglide/messages";

export function NotFound() {
	return (
		<section className="not-found">
			<div className="container not-found-inner">
				<Eyebrow>{m.not_found_eyebrow()}</Eyebrow>
				<h1>{m.not_found_title()}</h1>
				<p>{m.not_found_text()}</p>
				<a className="button button-primary" href="/">
					{m.not_found_cta()}
				</a>
			</div>
		</section>
	);
}
