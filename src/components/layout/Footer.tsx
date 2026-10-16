import { BrandMark } from "#/components/brand/BrandMark";
import { footerProductLinks, site, socials } from "#/data/site";
import { useHomeHref } from "#/lib/home-href";
import { m } from "#/paraglide/messages";
import { localizeHref } from "#/paraglide/runtime";

export function Footer() {
	const year = new Date().getFullYear();
	const homeHref = useHomeHref();

	const exploreLinks = [
		{ href: homeHref("inicio"), label: m.nav_home() },
		{ href: homeHref("produtos"), label: m.nav_products() },
		{ href: homeHref("sobre"), label: m.footer_about_link() },
		{ href: homeHref("principios"), label: m.footer_philosophy_link() },
		{ href: localizeHref("/porque-oryntt"), label: m.footer_why_link() },
	];

	return (
		<footer className="footer">
			{/* The logo, set at full width: the page closes on the brand. */}
			<div
				className="container footer-lockup"
				role="img"
				aria-label={`${site.fullName}. ${site.tagline}`}
			>
				<p className="footer-wordmark" aria-hidden="true">
					<BrandMark />
					<span>RYNTT</span>
				</p>
				<p className="footer-tech" aria-hidden="true">
					Technologies
				</p>
				<span className="brand-bar" aria-hidden="true" />
				<p className="footer-tagline" aria-hidden="true">
					{site.tagline}
				</p>
			</div>

			<div className="container footer-main">
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
							target="_blank"
							rel="noreferrer"
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
							<a
								key={label}
								href={href}
								aria-label={label}
								target="_blank"
								rel="noreferrer"
							>
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
				<span>{m.hero_note()}</span>
			</div>
		</footer>
	);
}
