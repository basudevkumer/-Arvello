import Container from "@/components/layout/Container";
import ProductCard from "@/components/shared/product/ProductCard";
import CountdownTimer from "@/components/shared/common/CountdownTimer";
import { flashDeals } from "@/lib/data/deals";

export default function FlashSaleSection() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="mb-8 flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-overline text-accent">Limited time only</p>
            <h2 className="mt-2 text-h3">Flash Sale</h2>
            <p className="mt-3 text-body-md text-text-secondary">
              Prices this good won&apos;t last — grab them before the clock runs
              out.
            </p>
          </div>
          <CountdownTimer endAt="2026-12-31T23:59:59.000Z" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {flashDeals.map((item) => (
            <div key={item.id} className="relative">
              <ProductCard
                product={item}
                href={`/products/${item.productId}`}
              />
              <p className="mt-2 text-center text-label-sm text-accent">
                Only {item.stockLeft} left
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
