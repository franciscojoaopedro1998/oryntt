import { ArrowUpRight, Globe2 } from "lucide-react";
import { Brand } from "#/components/brand/Brand";
import { footerProductLinks, site, socials } from "#/data/site";
import { m } from "#/paraglide/messages";

export function Footer() {
	const year = new Date().getFullYear();

	const exploreLinks = [
		{ href: "#inicio", label: m.nav_home() },
		{ href: "#produtos", label: m.nav_products() },
		{ href: "#sobre", label: m.footer_about_link() },
		{ href: "#principios", label: m.footer_philosophy_link() },
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
							{link.label} <ArrowUpRight size={13} />
						</a>
					))}
				</div>

				<div className="footer-social">
					<span className="footer-label">{m.footer_label_contact()}</span>
					<a href={`mailto:${site.email}`}>
						{site.email} <ArrowUpRight size={14} />
					</a>
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
					<Globe2 size={14} /> {site.location} <i /> {site.tagline}
				</span>
			</div>
		</footer>
	);
}
