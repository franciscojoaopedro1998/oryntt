import type { ReactNode } from "react";
import { cn } from "#/lib/utils";

interface EyebrowProps {
	children: ReactNode;
	dot?: boolean;
	className?: string;
}

export function Eyebrow({ children, dot = false, className }: EyebrowProps) {
	return (
		<div className={cn("eyebrow", className)}>
			{dot ? <span className="eyebrow-dot" /> : null}
			{children}
		</div>
	);
}
