import { useState } from "react";
import { UpcomingCard } from "#/components/ui/UpcomingCard";
import { type Product, productContent } from "#/data/products";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";

export function ProductsSection() {
	const products = productContent[getLocale()];
	const [active, setActive] = useState(0);

	return (
		<section className="products section-pad" id="produtos">
			<div className="container">
				<div className="section-head">
					<h2>
						{m.products_title_1()}
						<br />
						{m.products_title_2()}
					</h2>
					<p>{m.products_description()}</p>
				</div>

				<div className="product-index">
					<ol className="product-list">
						{products.map((product, index) => (
							<ProductItem
								key={product.name}
								product={product}
								open={index === active}
								onSelect={() => setActive(index)}
							/>
						))}
					</ol>

					{/* Desktop only: one phone that shows the selected product. */}
					<div className="product-stage" aria-hidden="true">
						<div className="phone">
							{products.map((product, index) => (
								<ProductScreen
									key={product.name}
									product={product}
									visible={index === active}
								/>
							))}
						</div>
					</div>
				</div>

				<UpcomingCard />

				<p className="products-foot">{m.products_foot()}</p>
			</div>
		</section>
	);
}

interface ProductItemProps {
	product: Product;
	open: boolean;
	onSelect: () => void;
}

function ProductItem({ product, open, onSelect }: ProductItemProps) {
	const panelId = `produto-${product.name.toLowerCase().replace(/\s+/g, "-")}`;

	return (
		<li className={open ? "product-item is-open" : "product-item"}>
			<h3>
				<button
					type="button"
					className="product-toggle"
					aria-expanded={open}
					aria-controls={panelId}
					onClick={onSelect}
					onMouseEnter={onSelect}
				>
					<span className="product-name">{product.name}</span>
					<span className="product-category">{product.category}</span>
				</button>
			</h3>

			<div className="product-detail" id={panelId} hidden={!open}>
				<div className="product-detail-phone phone">
					<ProductScreen product={product} visible />
				</div>
				<div>
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
			</div>
		</li>
	);
}

function ProductScreen({
	product,
	visible,
}: {
	product: Product;
	visible: boolean;
}) {
	const className = visible ? "phone-screen is-visible" : "phone-screen";

	if (!product.screen) {
		return (
			<div className={`${className} phone-plate`}>
				<span>{product.name}</span>
			</div>
		);
	}

	return (
		<img
			className={className}
			src={product.screen}
			alt={`${product.name}: ${product.category}`}
			width={390}
			height={844}
			loading="lazy"
		/>
	);
}
