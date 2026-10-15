import type { Locale } from "#/paraglide/runtime";

export interface WhyReason {
	title: string;
	text: string;
}

export interface WhyStep {
	title: string;
	text: string;
}

export interface WhyContent {
	meta: { title: string; description: string };
	eyebrow: string;
	title: string;
	lead: string;
	reasonsTitle: string;
	reasons: WhyReason[];
	builtTitle: string;
	builtText: string;
	processTitle: string;
	steps: WhyStep[];
	closeTitle: string;
	closeText: string;
	closeCta: string;
	whatsapp: string;
}

export const whyContent: Record<Locale, WhyContent> = {
	pt: {
		meta: {
			title: "Porquê a ORYNTT — ORYNTT Technologies",
			description:
				"Porque escolher a ORYNTT para dar vida ao seu projeto digital: começamos pelo problema, construímos e acompanhamos o produto em Angola.",
		},
		eyebrow: "Porquê a ORYNTT",
		title:
			"Escolha a ORYNTT para transformar a sua ideia num produto que funciona.",
		lead: "Não somos uma agência que entrega código e desaparece. Construímos produtos próprios em Angola e sabemos o que acontece depois do lançamento: utilizadores reais, pagamentos reais e prazos reais.",
		reasonsTitle: "O que muda quando trabalha connosco",
		reasons: [
			{
				title: "Começamos pelo problema",
				text: "Antes de desenhar um ecrã, perguntamos quem vai usar o produto, para quê e o que muda se resultar. A tecnologia escolhe-se depois disso.",
			},
			{
				title: "Já operamos produtos",
				text: "Construímos e mantemos os nossos próprios produtos. Sabemos o que pesa no dia a dia: integrações, suporte, pagamentos e crescimento.",
			},
			{
				title: "Pensado para o contexto angolano",
				text: "Desenhamos para a forma como as pessoas usam o telemóvel em Angola, com ligações irregulares, pagamentos locais e linguagem que faz sentido para o público.",
			},
			{
				title: "Uma equipa, uma conversa",
				text: "Acompanhamos o projeto do primeiro esboço à evolução depois do lançamento, sem passar o trabalho de uma empresa para outra.",
			},
			{
				title: "Fases curtas e custos claros",
				text: "Dividimos o trabalho em entregas que pode testar. Sabe sempre o que está feito, o que falta e para onde vai o investimento.",
			},
		],
		builtTitle: "Já construímos e operamos",
		builtText:
			"Estes são produtos da ORYNTT em uso, não exemplos de portefólio.",
		processTitle: "Como trabalhamos",
		steps: [
			{
				title: "Conversa",
				text: "Partilha a ideia, o problema e o público. Dizemos-lhe com franqueza se faz sentido e por onde começar.",
			},
			{
				title: "Descoberta",
				text: "Definimos o âmbito, o primeiro produto mínimo e as prioridades, para que cada semana tenha um objetivo claro.",
			},
			{
				title: "Construção",
				text: "Desenvolvemos em ciclos curtos, com versões que pode testar no telemóvel e no computador.",
			},
			{
				title: "Lançamento e evolução",
				text: "Publicamos, medimos o que acontece com os utilizadores e continuamos a melhorar o produto.",
			},
		],
		closeTitle: "Tem um projeto em mente?",
		closeText:
			"Conte-nos a ideia. Respondemos com os próximos passos, sem compromisso.",
		closeCta: "Fale connosco",
		whatsapp: "Escrever no WhatsApp",
	},
	en: {
		meta: {
			title: "Why ORYNTT — ORYNTT Technologies",
			description:
				"Why choose ORYNTT to bring your digital project to life: we start from the problem, then build and support the product from Angola.",
		},
		eyebrow: "Why ORYNTT",
		title: "Choose ORYNTT to turn your idea into a product that works.",
		lead: "We are not an agency that hands over code and disappears. We build our own products in Angola, and we know what happens after launch: real users, real payments and real deadlines.",
		reasonsTitle: "What changes when you work with us",
		reasons: [
			{
				title: "We start with the problem",
				text: "Before we design a screen, we ask who will use the product, why, and what changes if it works. The technology choice comes after that.",
			},
			{
				title: "We already run products",
				text: "We build and maintain our own products. We know what weighs on day-to-day work: integrations, support, payments and growth.",
			},
			{
				title: "Built for the Angolan context",
				text: "We design for how people use their phones in Angola, with unreliable connections, local payments and language that fits the audience.",
			},
			{
				title: "One team, one conversation",
				text: "We follow the project from the first sketch to the work after launch, without handing it over to another company.",
			},
			{
				title: "Short phases and clear costs",
				text: "We split the work into deliveries you can test. You always know what is done, what is left and where the investment goes.",
			},
		],
		builtTitle: "Products we have built and run",
		builtText: "These are ORYNTT products in use, not portfolio examples.",
		processTitle: "How we work",
		steps: [
			{
				title: "Conversation",
				text: "Share the idea, the problem and the audience. We will tell you honestly whether it makes sense and where to start.",
			},
			{
				title: "Discovery",
				text: "We define the scope, the first minimum product and the priorities, so every week has a clear goal.",
			},
			{
				title: "Build",
				text: "We develop in short cycles, with versions you can test on your phone and computer.",
			},
			{
				title: "Launch and growth",
				text: "We publish, measure what users do and keep improving the product.",
			},
		],
		closeTitle: "Have a project in mind?",
		closeText:
			"Tell us the idea. We will reply with the next steps, with no commitment.",
		closeCta: "Get in touch",
		whatsapp: "Message us on WhatsApp",
	},
};
