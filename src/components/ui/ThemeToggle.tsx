import { Moon, Sun } from "lucide-react";
import { m } from "#/paraglide/messages";

const THEME_KEY = "oryntt-theme";

export function ThemeToggle() {
	const toggle = () => {
		const root = document.documentElement;
		const next =
			root.dataset.theme === "dark" || root.dataset.theme === undefined
				? "light"
				: "dark";
		root.dataset.theme = next;
		try {
			localStorage.setItem(THEME_KEY, next);
		} catch {
			// storage unavailable — the attribute still applies for this visit
		}
	};

	return (
		<button
			type="button"
			className="theme-toggle"
			onClick={toggle}
			aria-label={m.theme_toggle()}
		>
			<Sun className="theme-icon theme-icon-sun" aria-hidden="true" />
			<Moon className="theme-icon theme-icon-moon" aria-hidden="true" />
		</button>
	);
}
