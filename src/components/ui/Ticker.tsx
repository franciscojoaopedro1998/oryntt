import { Fragment } from "react";
import { m } from "#/paraglide/messages";

export function Ticker() {
	const items = [
		m.ticker_ideas(),
		m.ticker_product(),
		m.ticker_technology(),
		m.ticker_impact(),
		m.ticker_angola(),
	];

	return (
		<div className="container ticker" aria-hidden="true">
			{items.map((item, index) => (
				<Fragment key={item}>
					<span>{item}</span>
					{index < items.length - 1 ? <i>✳</i> : null}
				</Fragment>
			))}
		</div>
	);
}
