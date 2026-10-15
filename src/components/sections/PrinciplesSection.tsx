import { PrincipleCard } from "#/components/ui/PrincipleCard";
import { SectionHeading } from "#/components/ui/SectionHeading";
import { principleContent } from "#/data/principles";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";

export function PrinciplesSection() {
	const principles = principleContent[getLocale()];

	return (
		<section className="principles section-pad" id="principios">
			<div className="container">
				<SectionHeading
					eyebrow={m.principles_eyebrow()}
					title={
						<>
							{m.principles_title_1()}
							<br />
							{m.principles_title_2()}
						</>
					}
					description={m.principles_description()}
				/>

				<div className="principle-grid">
					{principles.map((principle) => (
						<PrincipleCard
							key={`${principle.letter}-${principle.word}`}
							principle={principle}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
