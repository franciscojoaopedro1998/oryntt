import { m } from "#/paraglide/messages";

export function HeroOrbit() {
	return (
		<div className="hero-orbit" aria-hidden="true">
			<div className="orbit-ring" />
			<div className="orbit-core" />
			<span className="orbit-label label-one">{m.ticker_ideas()}</span>
			<span className="orbit-label label-two">{m.ticker_technology()}</span>
			<span className="orbit-label label-three">{m.ticker_impact()}</span>
		</div>
	);
}
