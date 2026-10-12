import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "#/components/ui/Eyebrow";
import { Ticker } from "#/components/ui/Ticker";
import { m } from "#/paraglide/messages";

export function IntroSection() {
	return (
		<section className="intro section-pad">
			<div className="container intro-layout">
				<div>
					<Eyebrow>{m.intro_eyebrow()}</Eyebrow>
					<h2>
						{m.intro_title_1()}
						<br />
						{m.intro_title_2()}
						<br />
						<span>{m.intro_title_3()}</span>
					</h2>
				</div>

				<div className="intro-copy">
					<p>{m.intro_p_1()}</p>
					<p>{m.intro_p_2()}</p>
					<a href="#sobre" className="under-link">
						{m.intro_link()} <ArrowUpRight size={16} />
					</a>
				</div>
			</div>

			<Ticker />
		</section>
	);
}
