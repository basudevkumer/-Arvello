import Container from "@/components/layout/Container";
import ProductCard from "@/components/shared/product/ProductCard";
import CountdownTimer from "@/components/shared/common/CountdownTimer";
import { dealProducts } from "./data";
export default function BestDeals() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-overline text-accent">Curated for you</p>
            <h2 className="mt-2 text-h3">Best Furniture Deals</h2>
          </div>
          <CountdownTimer />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
