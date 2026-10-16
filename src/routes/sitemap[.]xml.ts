import { createFileRoute } from "@tanstack/react-router";
import { absoluteUrl, sitemapPaths } from "#/lib/seo";
import { locales } from "#/paraglide/runtime";

function sitemap() {
	const urls = sitemapPaths.flatMap((path) =>
		locales.map((locale) => {
			const alternates = locales
				.map(
					(other) =>
						`    <xhtml:link rel="alternate" hreflang="${other}" href="${absoluteUrl(path, other)}"/>`,
				)
				.join("\n");
			return `  <url>
    <loc>${absoluteUrl(path, locale)}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(path, "pt")}"/>
  </url>`;
		}),
	);

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
}

export const Route = createFileRoute("/sitemap.xml")({
	server: {
		handlers: {
			GET: () =>
				new Response(sitemap(), {
					headers: {
						"Content-Type": "application/xml; charset=utf-8",
						"Cache-Control": "public, max-age=3600",
					},
				}),
		},
	},
});
