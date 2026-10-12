import type { Locale } from "#/paraglide/runtime";

export interface Principle {
	letter: string;
	word: string;
	pt: string;
	text: string;
}

export const principleContent: Record<Locale, Principle[]> = {
	pt: [
		{
			letter: "O",
			word: "Opportunity",
			pt: "Oportunidade",
			text: "Identificamos problemas reais e oportunidades para criar valor.",
		},
		{
			letter: "R",
			word: "Research",
			pt: "Investigação",
			text: "Investigamos, aprendemos e validamos antes de construir.",
		},
		{
			letter: "Y",
			word: "Yield",
			pt: "Resultados",
			text: "Transformamos trabalho e ideias em resultados concretos.",
		},
		{
			letter: "N",
			word: "Navigation",
			pt: "Direcção",
			text: "Definimos um rumo claro e tomamos decisões com propósito.",
		},
		{
			letter: "T",
			word: "Technology",
			pt: "Tecnologia",
			text: "Construímos tecnologia útil, acessível e preparada para crescer.",
		},
		{
			letter: "T",
			word: "Trust",
			pt: "Confiança",
			text: "Construímos relações seguras, transparentes e duradouras com os nossos clientes e parceiros.",
		},
	],
	en: [
		{
			letter: "O",
			word: "Opportunity",
			pt: "",
			text: "We identify real problems and opportunities to create value.",
		},
		{
			letter: "R",
			word: "Research",
			pt: "",
			text: "We research, learn and validate before building.",
		},
		{
			letter: "Y",
			word: "Yield",
			pt: "",
			text: "We turn work and ideas into concrete results.",
		},
		{
			letter: "N",
			word: "Navigation",
			pt: "",
			text: "We set a clear course and make purposeful decisions.",
		},
		{
			letter: "T",
			word: "Technology",
			pt: "",
			text: "We build useful, accessible technology that is ready to grow.",
		},
		{
			letter: "T",
			word: "Trust",
			pt: "",
			text: "We build safe, transparent and lasting relationships with our clients and partners.",
		},
	],
};
