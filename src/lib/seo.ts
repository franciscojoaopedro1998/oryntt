import { productContent } from "#/data/products";
import { site } from "#/data/site";
import { m } from "#/paraglide/messages";
import {
	getLocale,
	type Locale,
	locales,
	localizeHref,
} from "#/paraglide/runtime";

const ogLocale: Record<Locale, string> = { pt: "pt_AO", en: "en_US" };

/** Absolute URL of a path in a given locale (pt has no prefix, en uses /en). */
export function absoluteUrl(path: string, locale: Locale = getLocale()) {
	return `${site.url}${localizeHref(path, { locale })}`;
}

/** Shared social card, the logo on night blue. */
export const ogImage = {
	url: `${site.url}/oryntt-logo.png`,
	width: "1536",
	height: "1024",
};

interface PageSeo {
	path: string;
	title: string;
	description: string;
}

/**
 * Per-page head: title, description, canonical, language alternates and the
 * Open Graph / Twitter tags that change from page to page.
 */
export function pageHead({ path, title, description }: PageSeo) {
	const locale = getLocale();
	const url = absoluteUrl(path, locale);

	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			{ property: "og:url", content: url },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:locale", content: ogLocale[locale] },
			...locales
				.filter((other) => other !== locale)
				.map((other) => ({
					property: "og:locale:alternate",
					content: ogLocale[other],
				})),
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
		],
		links: [
			{ rel: "canonical", href: url },
			...locales.map((other) => ({
				rel: "alternate",
				hrefLang: other,
				href: absoluteUrl(path, other),
			})),
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: absoluteUrl(path, "pt"),
			},
		],
	};
}

/** Structured data for the home page: the company, the site and its products. */
export function homeJsonLd() {
	const locale = getLocale();
	const organizationId = `${site.url}/#organization`;

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": organizationId,
				name: site.fullName,
				alternateName: site.name,
				url: site.url,
				logo: `${site.url}/icon-512.png`,
				slogan: site.tagline,
				description: m.meta_description(),
				email: site.email,
				foundingLocation: { "@type": "Country", name: "Angola" },
				address: { "@type": "PostalAddress", addressCountry: "AO" },
				areaServed: "AO",
			},
			{
				"@type": "WebSite",
				"@id": `${site.url}/#website`,
				name: site.fullName,
				url: site.url,
				inLanguage: locales,
				publisher: { "@id": organizationId },
			},
			{
				"@type": "ItemList",
				name: m.nav_products(),
				itemListElement: productContent[locale].map((product, index) => ({
					"@type": "ListItem",
					position: index + 1,
					item: {
						"@type": "WebApplication",
						name: product.name,
						description: product.description,
						applicationCategory: product.category,
						operatingSystem: "Web",
						...(product.href ? { url: product.href } : {}),
						publisher: { "@id": organizationId },
					},
				})),
			},
		],
	};
}

/** Paths listed in the sitemap, each served in every locale. */
export const sitemapPaths = ["/", "/porque-oryntt"];
