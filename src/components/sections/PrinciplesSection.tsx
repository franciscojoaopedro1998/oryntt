import { BrandMark } from "#/components/brand/BrandMark";
import { principleContent } from "#/data/principles";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";

/** The name is the philosophy: each letter of ORYNTT is one principle. */
export function PrinciplesSection() {
	const principles = principleContent[getLocale()];

	return (
		<section className="principles section-pad" id="principios">
			<div className="container">
				<div className="section-head">
					<h2>
						{m.principles_title_1()}
						<br />
						{m.principles_title_2()}
					</h2>
					<p>{m.principles_description()}</p>
				</div>

				<ol className="principle-word">
					{principles.map((principle) => (
						<li
							className="principle"
							key={`${principle.letter}-${principle.word}`}
						>
							<span className="principle-letter" aria-hidden="true">
								{principle.letter === "O" ? (
									<BrandMark className="principle-mark" />
								) : (
									principle.letter
								)}
							</span>
							<div className="principle-body">
								<h3>{principle.pt || principle.word}</h3>
								{principle.pt ? (
									<p className="principle-word-en" lang="en">
										{principle.word}
									</p>
								) : null}
								<p>{principle.text}</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
