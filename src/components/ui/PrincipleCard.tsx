import type { Principle } from "#/data/principles";

interface PrincipleCardProps {
	principle: Principle;
	index: number;
}

export function PrincipleCard({ principle, index }: PrincipleCardProps) {
	return (
		<article className="principle">
			<div className="principle-letter">{principle.letter}</div>
			<div className="principle-index">
				{String(index + 1).padStart(2, "0")}
			</div>
			<h3>{principle.word}</h3>
			{principle.pt ? <div className="principle-pt">{principle.pt}</div> : null}
			<p>{principle.text}</p>
		</article>
	);
}
