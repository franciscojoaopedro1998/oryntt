import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

interface BrandProps {
	footer?: boolean;
	className?: string;
}

export function Brand({ footer = false, className }: BrandProps) {
	return (
		<a
			className={cn("brand", footer && "brand-footer", className)}
			href="#inicio"
			aria-label={m.nav_aria_brand()}
		>
			<span className="brand-mark" aria-hidden="true">
				<span />
			</span>
			<span className="brand-copy">
				<strong>ORYNTT</strong>
				<small>TECHNOLOGIES</small>
			</span>
		</a>
	);
}
