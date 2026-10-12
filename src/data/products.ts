import {
	Braces,
	Building2,
	Clock3,
	Compass,
	Home,
	Layers3,
	type LucideIcon,
	ShieldCheck,
	ShoppingBag,
	Sparkles,
	Wallet,
} from "lucide-react";
import type { Locale } from "#/paraglide/runtime";

export type ProductAccent =
	| "cyan"
	| "blue"
	| "green"
	| "violet"
	| "amber"
	| "rose";

export interface Product {
	name: string;
	category: string;
	number: string;
	description: string;
	href: string | null;
	icon: LucideIcon;
	accent: ProductAccent;
	tag: string;
	kind: string;
}

export interface UpcomingProduct {
	number: string;
	kind: string;
	badge: string;
	category: string;
	title: string;
	description: string;
	tag: string;
	cta: string;
	icon: LucideIcon;
}

const productIcon = {
	yc: Compass,
	mona: ShoppingBag,
	tuntuka: Clock3,
	ondjango: Wallet,
	nuvex: Braces,
	gac: Building2,
	bigrisks: ShieldCheck,
	hekumbi: Sparkles,
	angostay: Home,
};

export const productContent: Record<Locale, Product[]> = {
	pt: [
		{
			name: "Yennda",
			category: "TURISMO & EXPERIÊNCIAS",
			number: "01",
			description:
				"Ligamos pessoas a destinos, experiências e serviços turísticos em Angola.",
			href: "https://yennda.ao",
			icon: productIcon.yc,
			accent: "cyan",
			tag: "Explore Angola",
			kind: "PRODUTO",
		},
		{
			name: "Mona",
			category: "COMÉRCIO DIGITAL",
			number: "02",
			description:
				"Ajudamos negócios a vender online com mais confiança, segurança e conveniência.",
			href: "https://mona-orpin.vercel.app/",
			icon: productIcon.mona,
			accent: "blue",
			tag: "Comércio com confiança",
			kind: "PRODUTO",
		},
		{
			name: "Tuntuka",
			category: "TRABALHO & OPORTUNIDADES",
			number: "03",
			description:
				"Uma infraestrutura digital que liga tempo disponível a oportunidades de trabalho.",
			href: "https://tuntuka.vercel.app/sobre",
			icon: productIcon.tuntuka,
			accent: "green",
			tag: "O tempo tem valor",
			kind: "PRODUTO",
		},
		{
			name: "Ondjango Pay",
			category: "PAGAMENTOS DIGITAIS",
			number: "04",
			description:
				"Uma plataforma de pagamentos digitais que torna as transações mais simples, rápidas e seguras.",
			href: null,
			icon: productIcon.ondjango,
			accent: "violet",
			tag: "Pagar sem barreiras",
			kind: "PRODUTO",
		},
		{
			name: "GPO Nuvex",
			category: "INFRAESTRUTURA & APIs",
			number: "05",
			description:
				"APIs e infraestrutura que ligam sistemas, dados e serviços com fiabilidade e escala.",
			href: "https://gpo-nuvex.vercel.app/",
			icon: productIcon.nuvex,
			accent: "amber",
			tag: "APIs que escalam",
			kind: "PROJECTO",
		},
		{
			name: "GAC",
			category: "GESTÃO DE APARTAMENTOS & CONDOMÍNIOS",
			number: "06",
			description:
				"Gestão de apartamentos e condomínios: residentes, cobranças e manutenção num só lugar.",
			href: "https://gac-app-inky.vercel.app/",
			icon: productIcon.gac,
			accent: "blue",
			tag: "Condomínios organizados",
			kind: "PROJECTO",
		},
		{
			name: "BIG RISKS",
			category: "SEGUROS & PROTEÇÃO",
			number: "07",
			description: "A corretora de seguros mais inovadora de Luanda.",
			href: "https://bigrisks.vercel.app/",
			icon: productIcon.bigrisks,
			accent: "rose",
			tag: "Seguros com confiança",
			kind: "PROJECTO",
		},
		{
			name: "Hekumbi",
			category: "LIMPEZA & HIGIENIZAÇÃO",
			number: "08",
			description:
				"Soluções profissionais de limpeza e higienização para empresas, espaços e instituições.",
			href: "https://hekumbi-website.vercel.app/",
			icon: productIcon.hekumbi,
			accent: "cyan",
			tag: "Higienização profissional",
			kind: "PROJECTO",
		},
		{
			name: "Angostay",
			category: "IMOBILIÁRIO",
			number: "09",
			description:
				"Encontre o imóvel ideal em Angola. Ligamos compradores, vendedores e advogados para transações seguras e transparentes.",
			href: "https://angostay.vercel.app/",
			icon: productIcon.angostay,
			accent: "green",
			tag: "O imóvel ideal em Angola",
			kind: "PROJECTO",
		},
	],
	en: [
		{
			name: "Yennda",
			category: "TOURISM & EXPERIENCES",
			number: "01",
			description:
				"We connect people with destinations, experiences and tourism services in Angola.",
			href: "https://yennda.ao",
			icon: productIcon.yc,
			accent: "cyan",
			tag: "Explore Angola",
			kind: "PRODUCT",
		},
		{
			name: "Mona",
			category: "DIGITAL COMMERCE",
			number: "02",
			description:
				"We help businesses sell online with more confidence, security and convenience.",
			href: "https://mona-orpin.vercel.app/",
			icon: productIcon.mona,
			accent: "blue",
			tag: "Commerce with confidence",
			kind: "PRODUCT",
		},
		{
			name: "Tuntuka",
			category: "WORK & OPPORTUNITIES",
			number: "03",
			description:
				"A digital infrastructure connecting available time to work opportunities.",
			href: "https://tuntuka.vercel.app/sobre",
			icon: productIcon.tuntuka,
			accent: "green",
			tag: "Time has value",
			kind: "PRODUCT",
		},
		{
			name: "Ondjango Pay",
			category: "DIGITAL PAYMENTS",
			number: "04",
			description:
				"A digital payments platform that makes transactions simpler, faster and safer.",
			href: null,
			icon: productIcon.ondjango,
			accent: "violet",
			tag: "Pay without barriers",
			kind: "PRODUCT",
		},
		{
			name: "GPO Nuvex",
			category: "INFRASTRUCTURE & APIs",
			number: "05",
			description:
				"APIs and infrastructure connecting systems, data and services with reliability and scale.",
			href: "https://gpo-nuvex.vercel.app/",
			icon: productIcon.nuvex,
			accent: "amber",
			tag: "APIs that scale",
			kind: "PROJECT",
		},
		{
			name: "GAC",
			category: "APARTMENT & CONDOMINIUM MANAGEMENT",
			number: "06",
			description:
				"Apartment and condominium management: residents, billing and maintenance in one place.",
			href: "https://gac-app-inky.vercel.app/",
			icon: productIcon.gac,
			accent: "blue",
			tag: "Organized condominiums",
			kind: "PROJECT",
		},
		{
			name: "BIG RISKS",
			category: "INSURANCE & PROTECTION",
			number: "07",
			description: "The most innovative insurance brokerage in Luanda.",
			href: "https://bigrisks.vercel.app/",
			icon: productIcon.bigrisks,
			accent: "rose",
			tag: "Insurance with confidence",
			kind: "PROJECT",
		},
		{
			name: "Hekumbi",
			category: "CLEANING & HYGIENE",
			number: "08",
			description:
				"Professional cleaning and hygiene solutions for companies, spaces and institutions.",
			href: "https://hekumbi-website.vercel.app/",
			icon: productIcon.hekumbi,
			accent: "cyan",
			tag: "Professional hygiene",
			kind: "PROJECT",
		},
		{
			name: "Angostay",
			category: "REAL ESTATE",
			number: "09",
			description:
				"Find the ideal property in Angola. We connect buyers, sellers and lawyers for safe, transparent transactions.",
			href: "https://angostay.vercel.app/",
			icon: productIcon.angostay,
			accent: "green",
			tag: "The ideal home in Angola",
			kind: "PROJECT",
		},
	],
};

export const upcomingContent: Record<Locale, UpcomingProduct> = {
	pt: {
		number: "10",
		kind: "FUTURO",
		badge: "EM EXPLORAÇÃO",
		category: "NOVAS POSSIBILIDADES",
		title: "O próximo capítulo",
		description:
			"Continuamos a explorar desafios e oportunidades onde a tecnologia pode fazer a diferença.",
		tag: "O futuro está em construção",
		cta: "Fale connosco",
		icon: Layers3,
	},
	en: {
		number: "10",
		kind: "FUTURE",
		badge: "IN EXPLORATION",
		category: "NEW POSSIBILITIES",
		title: "The next chapter",
		description:
			"We keep exploring challenges and opportunities where technology can make a difference.",
		tag: "The future is being built",
		cta: "Talk to us",
		icon: Layers3,
	},
};
