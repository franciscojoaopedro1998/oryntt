import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "#/components/layout/Footer";
import { Header } from "#/components/layout/Header";
import { Eyebrow } from "#/components/ui/Eyebrow";
import { productContent } from "#/data/products";
import { whatsappLink } from "#/data/site";
import { whyContent } from "#/data/why";
import { useHomeHref } from "#/lib/home-href";
import { pageHead } from "#/lib/seo";
import { getLocale } from "#/paraglide/runtime";

export const Route = createFileRoute("/porque-oryntt")({
	head: () => {
		const { meta } = whyContent[getLocale()];
		return pageHead({
			path: "/porque-oryntt",
			title: meta.title,
			description: meta.description,
		});
	},
	component: WhyPage,
});

function WhyPage() {
	const locale = getLocale();
	const content = whyContent[locale];
	const homeHref = useHomeHref();
	const liveProducts = productContent[locale].filter((product) => product.href);

	return (
		<>
			<Header />
			<main className="why">
				<section className="why-hero section-pad">
					<div className="container">
						<Eyebrow>{content.eyebrow}</Eyebrow>
						<h1>{content.title}</h1>
						<p className="why-lead">{content.lead}</p>
					</div>
				</section>

				<section className="why-reasons section-pad">
					<div className="container">
						<h2>{content.reasonsTitle}</h2>
						<div className="why-reason-grid">
							{content.reasons.map((reason) => (
								<article className="why-reason" key={reason.title}>
									<h3>{reason.title}</h3>
									<p>{reason.text}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="why-built section-pad">
					<div className="container">
						<div className="why-built-head">
							<h2>{content.builtTitle}</h2>
							<p>{content.builtText}</p>
						</div>
						<ul className="why-built-list">
							{liveProducts.map((product) => (
								<li key={product.name}>
									<a
										href={product.href ?? undefined}
										target="_blank"
										rel="noreferrer"
									>
										<strong>{product.name}</strong>
										<span>{product.category}</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="why-process section-pad">
					<div className="container">
						<h2>{content.processTitle}</h2>
						<ol className="why-steps">
							{content.steps.map((step) => (
								<li key={step.title}>
									<h3>{step.title}</h3>
									<p>{step.text}</p>
								</li>
							))}
						</ol>
					</div>
				</section>

				<section className="why-close section-pad">
					<div className="container why-close-inner">
						<div>
							<h2>{content.closeTitle}</h2>
							<p>{content.closeText}</p>
						</div>
						<div className="why-close-actions">
							<a className="button button-primary" href={homeHref("contacto")}>
								{content.closeCta}
							</a>
							<a
								className="button button-ghost"
								href={whatsappLink}
								target="_blank"
								rel="noreferrer"
							>
								{content.whatsapp}
							</a>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
