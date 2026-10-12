import { m } from "#/paraglide/messages";
import { getLocale, locales, setLocale } from "#/paraglide/runtime";

export function LangSwitch() {
	const current = getLocale();

	const langLabel = {
		pt: m.lang_pt(),
		en: m.lang_en(),
	} as const;

	return (
		<>
			{/* biome-ignore lint/a11y/useSemanticElements: `role="group"` is the
			correct pattern for a set of mutually-exclusive locale buttons; an ARIA
			group with an `aria-label` is clearer than a <fieldset> here. */}
			<div className="lang-switch" role="group" aria-label={m.lang_aria()}>
				{locales.map((locale) => (
					<button
						key={locale}
						type="button"
						className={locale === current ? "active" : ""}
						aria-pressed={locale === current}
						aria-label={langLabel[locale]}
						onClick={() => setLocale(locale)}
					>
						{locale.toUpperCase()}
					</button>
				))}
			</div>
		</>
	);
}
