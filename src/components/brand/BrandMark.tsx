import { useId } from "react";
import { cn } from "#/lib/utils";

interface BrandMarkProps {
	className?: string;
}

/** The blade that cuts through the O, from its wide tail to its tip. */
const BLADE = "M4 74 C30 50 55 32 84 20 C62 36 40 58 16 88 Z";

/**
 * The ORYNTT "O": a ring cut by the cyan-to-green blade from the logo.
 * The ring follows the text colour; the blade keeps the brand gradient.
 */
export function BrandMark({ className }: BrandMarkProps) {
	const id = useId();
	const gradient = `${id}-blade`;
	const mask = `${id}-cut`;

	return (
		<svg
			className={cn("brand-mark", className)}
			viewBox="0 0 100 100"
			aria-hidden="true"
		>
			<defs>
				<linearGradient id={gradient} x1="0" y1="1" x2="1" y2="0">
					<stop offset="0" stopColor="var(--cyan)" />
					<stop offset="1" stopColor="var(--green)" />
				</linearGradient>
				<mask
					id={mask}
					maskUnits="userSpaceOnUse"
					x="0"
					y="0"
					width="100"
					height="100"
				>
					<rect width="100" height="100" fill="white" />
					<path d={BLADE} fill="black" stroke="black" strokeWidth="7" />
				</mask>
			</defs>
			<g mask={`url(#${mask})`}>
				<circle
					className="brand-mark-ring"
					cx="50"
					cy="50"
					r="37"
					pathLength="100"
				/>
			</g>
			<path className="brand-mark-blade" d={BLADE} fill={`url(#${gradient})`} />
		</svg>
	);
}
