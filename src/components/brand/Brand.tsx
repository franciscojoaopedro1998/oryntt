import { BrandMark } from "#/components/brand/BrandMark";
import { useHomeHref } from "#/lib/home-href";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

interface BrandProps {
	footer?: boolean;
	className?: string;
}

export function Brand({ footer = false, className }: BrandProps) {
	const homeHref = useHomeHref();
	return (
		<a
			className={cn("brand", footer && "brand-footer", className)}
			href={homeHref("inicio")}
			aria-label={m.nav_aria_brand()}
		>
			<BrandMark />
			<span className="brand-word">RYNTT</span>
		</a>
	);
}
