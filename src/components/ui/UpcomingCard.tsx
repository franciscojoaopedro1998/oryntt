import { upcomingContent } from "#/data/products";
import { getLocale } from "#/paraglide/runtime";

export function UpcomingCard() {
	const upcoming = upcomingContent[getLocale()];

	return (
		<div className="upcoming">
			<div>
				<h3>
					{upcoming.title} <span>{upcoming.badge}</span>
				</h3>
				<p>{upcoming.description}</p>
			</div>
			<a className="button button-ghost" href="#contacto">
				{upcoming.cta}
			</a>
		</div>
	);
}
