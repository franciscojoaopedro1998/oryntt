import { m } from "#/paraglide/messages";

export function IntroSection() {
	return (
		<section className="intro section-pad">
			<div className="container split">
				<h2>
					{m.intro_title_1()} {m.intro_title_2()}
					<br />
					{m.intro_title_3()}
				</h2>

				<div className="split-copy">
					<p>{m.intro_p_1()}</p>
					<p>{m.intro_p_2()}</p>
					<a href="#sobre" className="text-link">
						{m.intro_link()}
					</a>
				</div>
			</div>
		</section>
	);
}
