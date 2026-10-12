import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Product } from "#/data/products";
import { cn } from "#/lib/utils";
import { m } from "#/paraglide/messages";

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	const { icon: Icon, href } = product;

	return (
		<article className={cn("product-card", product.accent)}>
			<div className="card-top">
				<span>
					{product.number} — {product.kind}
				</span>
				{href ? (
					<a
						href={href}
						target="_blank"
						rel="noreferrer"
						aria-label={m.product_aria_visit({ name: product.name })}
					>
						<ArrowUpRight size={19} />
					</a>
				) : (
					<span className="status-pill">{m.product_status_soon()}</span>
				)}
			</div>

			<div className="product-icon">
				<Icon size={27} strokeWidth={1.5} />
			</div>

			<div className="product-category">{product.category}</div>

			<h3>
				{product.name}
				<span className="product-period">.</span>
			</h3>

			<p>{product.description}</p>

			<div className="card-bottom">
				<span>{product.tag}</span>
				{href ? (
					<a href={href} target="_blank" rel="noreferrer">
						{m.product_cta_explore()} <ArrowRight size={15} />
					</a>
				) : (
					<a href="#contacto">
						{m.product_cta_more()} <ArrowRight size={15} />
					</a>
				)}
			</div>

			<div className="card-glow" />
		</article>
	);
}
