import { Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";

export interface SocialLink {
	label: string;
	href: string;
	icon: LucideIcon;
}

/**
 * Brand-level constants that never need translating.
 * All copy that varies by language lives in Paraglide messages
 * (`messages/{pt,en}.json`) or in the locale-aware content below.
 */
export const site = {
	name: "ORYNTT",
	fullName: "ORYNTT Technologies",
	tagline: "Ideas into Impact.",
	email: "hello@orynt.ao",
	location: "Angola",
} as const;

export const socials: SocialLink[] = [
	{ label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
	{ label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
	{ label: "GitHub", href: "https://github.com/", icon: Github },
];

export type ContactSubjectId =
	| "partnership"
	| "investment"
	| "career"
	| "press"
	| "other";

export interface ContactSubjectOption {
	id: ContactSubjectId;
	label: () => string;
}

/** Footer "Products" links — product-brand anchors (not translated). */
export const footerProductLinks = [
	{ label: "Yennda", href: "https://yennda.ao" },
	{ label: "Mona", href: "https://mona-orpin.vercel.app/" },
	{ label: "Tuntuka", href: "https://tuntuka.vercel.app/sobre" },
	{ label: "Ondjango Pay", href: "#contacto" },
] as const;
