import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "#/components/brand/Brand";
import { LangSwitch } from "#/components/ui/LangSwitch";
import { ThemeToggle } from "#/components/ui/ThemeToggle";
import { m } from "#/paraglide/messages";

export function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => setMenuOpen(false);

	const navLinks = [
		{ href: "#inicio", label: m.nav_home() },
		{ href: "#produtos", label: m.nav_products() },
		{ href: "#sobre", label: m.nav_about() },
		{ href: "#principios", label: m.nav_principles() },
	];

	return (
		<header className="header">
			<div className="container nav-wrap">
				<Brand />

				<button
					className="menu-toggle"
					type="button"
					onClick={() => setMenuOpen((open) => !open)}
					aria-label={
						menuOpen ? m.nav_aria_menu_close() : m.nav_aria_menu_open()
					}
					aria-expanded={menuOpen}
					aria-controls="primary-navigation"
				>
					{menuOpen ? <X size={22} /> : <Menu size={22} />}
				</button>

				<nav
					id="primary-navigation"
					className={menuOpen ? "nav nav-open" : "nav"}
					aria-label={m.nav_aria_primary()}
				>
					{navLinks.map((link) => (
						<a key={link.href} href={link.href} onClick={closeMenu}>
							{link.label}
						</a>
					))}

					<div className="header-tools">
						<LangSwitch />
						<ThemeToggle />
					</div>

					{/* The click handler only closes the mobile menu; navigation is a plain hash link */}
					{/* biome-ignore lint/a11y/useValidAnchor: hash-section navigation link with menu close handler */}
					<a className="nav-cta" href="#contacto" onClick={closeMenu}>
						{m.nav_cta()} <ArrowUpRight size={15} />
					</a>
				</nav>
			</div>
		</header>
	);
}
