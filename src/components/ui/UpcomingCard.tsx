import { ArrowRight } from "lucide-react";
import { upcomingContent } from "#/data/products";
import { getLocale } from "#/paraglide/runtime";

export function UpcomingCard() {
	const upcoming = upcomingContent[getLocale()];
	const { icon: Icon } = upcoming;

	return (
		<article className="product-card upcoming">
			<div className="card-top">
				<span>
					{upcoming.number} — {upcoming.kind}
				</span>
				<span className="status-pill">{upcoming.badge}</span>
			</div>

			<div className="product-icon">
				<Icon size={27} strokeWidth={1.5} />
			</div>

			<div className="product-category">{upcoming.category}</div>

			<h3>
				{upcoming.title}
				<span className="product-period">.</span>
			</h3>

			<p>{upcoming.description}</p>

			<div className="card-bottom">
				<span>{upcoming.tag}</span>
				<a href="#contacto">
					{upcoming.cta} <ArrowRight size={15} />
				</a>
			</div>

			<div className="card-glow" />
		</article>
	);
}
