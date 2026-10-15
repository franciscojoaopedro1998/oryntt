import { motion } from "motion/react";
import type { Principle } from "#/data/principles";

interface PrincipleCardProps {
	principle: Principle;
}

export function PrincipleCard({ principle }: PrincipleCardProps) {
	return (
		<motion.article
			className="principle"
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
		>
			<span className="principle-letter" aria-hidden="true">
				{principle.letter}
			</span>
			<h3>{principle.word}</h3>
			{principle.pt ? <p className="principle-pt">{principle.pt}</p> : null}
			<p>{principle.text}</p>
		</motion.article>
	);
}
