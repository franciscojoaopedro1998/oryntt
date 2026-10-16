import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { NotFound } from "#/components/layout/NotFound";
import { site } from "#/data/site";
import { ogImage } from "#/lib/seo";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";
import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	beforeLoad: async () => {
		// Keep the document lang attribute in sync with the active locale.
		if (typeof document !== "undefined") {
			document.documentElement.setAttribute("lang", getLocale());
		}
	},

	// Site-wide defaults. Each page adds its own title, description,
	// canonical and language alternates through `pageHead()`.
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: m.meta_title() },
			{ name: "description", content: m.meta_description() },
			{ name: "robots", content: "index, follow, max-image-preview:large" },
			{ name: "theme-color", content: "#07121c" },
			{ property: "og:type", content: "website" },
			{ property: "og:site_name", content: site.fullName },
			{ property: "og:title", content: m.meta_title() },
			{ property: "og:description", content: m.meta_description() },
			{ property: "og:image", content: ogImage.url },
			{ property: "og:image:width", content: ogImage.width },
			{ property: "og:image:height", content: ogImage.height },
			{
				property: "og:image:alt",
				content: `${site.fullName}. ${site.tagline}`,
			},
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:image", content: ogImage.url },
		],
		links: [
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..800&display=swap",
			},
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", type: "image/png", href: "/favicon.png" },
			{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
			{ rel: "manifest", href: "/site.webmanifest" },
		],
	}),
	notFoundComponent: NotFound,
	shellComponent: RootDocument,
});

// Applies the persisted (or system) theme before the first paint to avoid a
// flash of the wrong theme.
const THEME_BOOTSTRAP = `(function () {
  try {
    var saved = localStorage.getItem("oryntt-theme");
    var theme = saved === "light" || saved === "dark"
      ? saved
      : window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = "dark";
  }
})();`;

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		// The theme bootstrap script sets `data-theme` before hydration — a
		// deliberate pre-paint mutation, so suppress React's mismatch warning
		// for this attribute on <html> (standard practice for theme scripts).
		<html lang={getLocale()} suppressHydrationWarning>
			<head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: static, no user
				    input — pre-paint theme bootstrap must run before React hydrates */}
				<script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
						TanStackQueryDevtools,
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
