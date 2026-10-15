import type { Locale } from "#/paraglide/runtime";

export interface Product {
	name: string;
	category: string;
	description: string;
	href: string | null;
	/** Mobile screenshot of the product, served from /public. */
	screen: string | null;
	tag: string;
}

export interface UpcomingProduct {
	badge: string;
	title: string;
	description: string;
	tag: string;
	cta: string;
}

export const productContent: Record<Locale, Product[]> = {
	pt: [
		{
			name: "Yennda",
			category: "Turismo e experiências",
			description:
				"Ligamos pessoas a destinos, experiências e serviços turísticos em Angola.",
			href: "https://yennda.ao",
			screen: "/projects/yennda-mobile.jpg",
			tag: "Explore Angola",
		},
		{
			name: "Mona",
			category: "Comércio digital",
			description:
				"Ajudamos negócios a vender online com mais confiança, segurança e conveniência.",
			href: "https://www.mona.ao",
			screen: "/projects/mona-mobile.jpg",
			tag: "Comércio com confiança",
		},
		{
			name: "Tuntuka",
			category: "Trabalho e oportunidades",
			description:
				"Uma infraestrutura digital que liga tempo disponível a oportunidades de trabalho.",
			href: "https://tuntuka.vercel.app/sobre",
			screen: "/projects/tuntuka-mobile.jpg",
			tag: "O tempo tem valor",
		},
		{
			name: "Ondjango Pay",
			category: "Pagamentos digitais",
			description:
				"Uma plataforma de pagamentos digitais que torna as transações mais simples, rápidas e seguras.",
			href: "https://ondjango-pay.vercel.app/",
			screen: "/projects/ondjango-mobile.jpg",
			tag: "Pagar sem barreiras",
		},
		{
			name: "GAC",
			category: "Gestão de apartamentos e condomínios",
			description:
				"Gestão de apartamentos e condomínios: residentes, cobranças e manutenção num só lugar.",
			href: "https://gac-app-inky.vercel.app/",
			screen: null,
			tag: "Condomínios organizados",
		},
	],
	en: [
		{
			name: "Yennda",
			category: "Tourism and experiences",
			description:
				"We connect people with destinations, experiences and tourism services in Angola.",
			href: "https://yennda.ao",
			screen: "/projects/yennda-mobile.jpg",
			tag: "Explore Angola",
		},
		{
			name: "Mona",
			category: "Digital commerce",
			description:
				"We help businesses sell online with more confidence, security and convenience.",
			href: "https://www.mona.ao",
			screen: "/projects/mona-mobile.jpg",
			tag: "Commerce with confidence",
		},
		{
			name: "Tuntuka",
			category: "Work and opportunities",
			description:
				"A digital infrastructure connecting available time to work opportunities.",
			href: "https://tuntuka.vercel.app/sobre",
			screen: "/projects/tuntuka-mobile.jpg",
			tag: "Time has value",
		},
		{
			name: "Ondjango Pay",
			category: "Digital payments",
			description:
				"A digital payments platform that makes transactions simpler, faster and safer.",
			href: "https://ondjango-pay.vercel.app/",
			screen: "/projects/ondjango-mobile.jpg",
			tag: "Pay without barriers",
		},
		{
			name: "GAC",
			category: "Apartment and condominium management",
			description:
				"Apartment and condominium management: residents, billing and maintenance in one place.",
			href: "https://gac-app-inky.vercel.app/",
			screen: null,
			tag: "Organized condominiums",
		},
	],
};

export const upcomingContent: Record<Locale, UpcomingProduct> = {
	pt: {
		badge: "Em exploração",
		title: "O próximo capítulo",
		description:
			"Continuamos a explorar desafios e oportunidades onde a tecnologia pode fazer a diferença.",
		tag: "O futuro está em construção",
		cta: "Fale connosco",
	},
	en: {
		badge: "In exploration",
		title: "The next chapter",
		description:
			"We keep exploring challenges and opportunities where technology can make a difference.",
		tag: "The future is being built",
		cta: "Talk to us",
	},
};
