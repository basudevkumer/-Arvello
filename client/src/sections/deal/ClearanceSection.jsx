import Container from "@/components/layout/Container";
import ProductCard from "@/components/shared/product/ProductCard";
import { clearanceDeals } from "@/lib/data/deals";

export default function ClearanceSection() {
  return (
    <section className="bg-background-soft py-12 lg:py-16">
      <Container>
        <div className="mb-8">
          <p className="text-overline text-accent">Last chance</p>
          <h2 className="mt-2 text-h3">Clearance — Last Chance</h2>
          <p className="mt-3 text-body-md text-text-secondary">
            Final stock. Once it&apos;s gone, it&apos;s gone.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clearanceDeals.map((item) => (
            <div key={item.id}>
              <ProductCard
                product={{ ...item, badge: "Final Sale" }}
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
