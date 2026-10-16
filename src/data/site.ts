import {
	Github,
	Instagram,
	Linkedin,
	type LucideIcon,
	MessageCircle,
} from "lucide-react";

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
	/** Production origin, no trailing slash. Canonical URLs, the sitemap and
	 * social cards are built from it. */
	url: "https://oryntt.ao",
	fullName: "ORYNTT Technologies",
	tagline: "Ideas into Impact.",
	email: "hello@orynt.ao",
	location: "Angola",
} as const;

/** WhatsApp number in international format, digits only, for wa.me links. */
export const whatsappNumber = "244937489012";
export const whatsappLink = `https://wa.me/${whatsappNumber}`;

export const socials: SocialLink[] = [
	{ label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
	{ label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
	{ label: "GitHub", href: "https://github.com/", icon: Github },
	{ label: "WhatsApp", href: whatsappLink, icon: MessageCircle },
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
	{ label: "Mona", href: "https://www.mona.ao" },
	{ label: "Tuntuka", href: "https://tuntuka.vercel.app/sobre" },
	{ label: "Ondjango Pay", href: "https://ondjango-pay.vercel.app/" },
] as const;
