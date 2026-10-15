import { motion } from "motion/react";
import type { Product } from "#/data/products";
import { m } from "#/paraglide/messages";

interface ProductRowProps {
	product: Product;
	reverse?: boolean;
}

export function ProductRow({ product, reverse = false }: ProductRowProps) {
	return (
		<motion.article
			className={reverse ? "product-row is-reversed" : "product-row"}
			initial={{ opacity: 0, y: 32 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
		>
			<div className="product-media">
				{product.screen ? (
					<figure className="phone">
						<img
							src={product.screen}
							alt={product.name}
							width={390}
							height={844}
							loading="lazy"
						/>
					</figure>
				) : (
					<div className="product-plate" aria-hidden="true">
						<span>{product.name}</span>
					</div>
				)}
			</div>

			<div className="product-body">
				<p className="product-category">{product.category}</p>
				<h3>{product.name}</h3>
				<p className="product-desc">{product.description}</p>
				<p className="product-tag">{product.tag}</p>

				{product.href ? (
					<a
						className="text-link"
						href={product.href}
						target="_blank"
						rel="noreferrer"
						aria-label={m.product_aria_visit({ name: product.name })}
					>
						{m.product_cta_explore()}
					</a>
				) : (
					<span className="product-status">{m.product_status_soon()}</span>
				)}
			</div>
		</motion.article>
	);
}
