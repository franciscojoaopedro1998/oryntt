import { ProductCard } from "#/components/ui/ProductCard";
import { SectionHeading } from "#/components/ui/SectionHeading";
import { UpcomingCard } from "#/components/ui/UpcomingCard";
import { productContent } from "#/data/products";
import { m } from "#/paraglide/messages";
import { getLocale } from "#/paraglide/runtime";

export function ProductsSection() {
	const products = productContent[getLocale()];

	return (
		<section className="products section-pad" id="produtos">
			<div className="container">
				<SectionHeading
					eyebrow={m.products_eyebrow()}
					title={
						<>
							{m.products_title_1()}
							<br />
							<span>{m.products_title_2()}</span>
						</>
					}
					description={m.products_description()}
				/>

				<div className="product-grid">
					{products.map((product) => (
						<ProductCard key={product.name} product={product} />
					))}
					<UpcomingCard />
				</div>

				<div className="products-foot">
					<span className="live-dot" /> {m.products_foot()}
				</div>
			</div>
		</section>
	);
}
