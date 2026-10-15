import { Brand } from "#/components/brand/Brand";
import { footerProductLinks, site, socials } from "#/data/site";
import { useHomeHref } from "#/lib/home-href";
import { m } from "#/paraglide/messages";

export function Footer() {
	const year = new Date().getFullYear();
	const homeHref = useHomeHref();

	const exploreLinks = [
		{ href: homeHref("inicio"), label: m.nav_home() },
		{ href: homeHref("produtos"), label: m.nav_products() },
		{ href: homeHref("sobre"), label: m.footer_about_link() },
		{ href: homeHref("principios"), label: m.footer_philosophy_link() },
		{ href: "/porque-oryntt", label: m.footer_why_link() },
	];

	return (
		<footer className="footer">
			<div className="container footer-main">
				<div className="footer-brand-col">
					<Brand footer />
					<p>{site.tagline}</p>
					<span>{m.hero_note()}</span>
				</div>

				<div className="footer-links">
					<span className="footer-label">{m.footer_label_explore()}</span>
					{exploreLinks.map((link) => (
						<a key={link.href} href={link.href}>
							{link.label}
						</a>
					))}
				</div>

				<div className="footer-links">
					<span className="footer-label">{m.footer_label_products()}</span>
					{footerProductLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							target={link.href.startsWith("http") ? "_blank" : undefined}
							rel={link.href.startsWith("http") ? "noreferrer" : undefined}
						>
							{link.label}
						</a>
					))}
				</div>

				<div className="footer-social">
					<span className="footer-label">{m.footer_label_contact()}</span>
					<a href={`mailto:${site.email}`}>{site.email}</a>
					<div className="social-icons">
						{socials.map(({ label, href, icon: Icon }) => (
							<a key={label} href={href} aria-label={label}>
								<Icon size={17} />
							</a>
						))}
					</div>
				</div>
			</div>

			<div className="container footer-bottom">
				<span>
					© {year} {site.fullName}. {m.footer_rights()}
				</span>
				<span>
					{site.location} · {site.tagline}
				</span>
			</div>
		</footer>
	);
}
