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
					className="principles-heading"
					eyebrow={m.principles_eyebrow()}
					title={
						<>
							{m.principles_title_1()}
							<br />
							<span>{m.principles_title_2()}</span>
						</>
					}
					description={m.principles_description()}
				/>

				<div className="principle-grid">
					{principles.map((principle, index) => (
						<PrincipleCard
							key={`${principle.letter}-${principle.word}`}
							principle={principle}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
