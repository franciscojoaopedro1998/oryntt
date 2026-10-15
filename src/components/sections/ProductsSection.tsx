import { ProductRow } from "#/components/ui/ProductRow";
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
							{m.products_title_2()}
						</>
					}
					description={m.products_description()}
				/>

				<div className="product-list">
					{products.map((product, index) => (
						<ProductRow
							key={product.name}
							product={product}
							reverse={index % 2 === 1}
						/>
					))}
				</div>

				<UpcomingCard />

				<p className="products-foot">{m.products_foot()}</p>
			</div>
		</section>
	);
}
