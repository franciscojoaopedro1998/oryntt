import type { ReactNode } from "react";
import { Eyebrow } from "#/components/ui/Eyebrow";
import { cn } from "#/lib/utils";

interface SectionHeadingProps {
	eyebrow: ReactNode;
	title: ReactNode;
	description?: ReactNode;
	className?: string;
}

export function SectionHeading({
	eyebrow,
	title,
	description,
	className,
}: SectionHeadingProps) {
	return (
		<div className={cn("section-heading", className)}>
			<div>
				<Eyebrow>{eyebrow}</Eyebrow>
				<h2>{title}</h2>
			</div>
			{description ? <p>{description}</p> : null}
		</div>
	);
}
