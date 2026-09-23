import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import { bundleDeals, getProduct } from "@/lib/data/deals";

export default function BundleDeals() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="mb-8">
          <p className="text-overline text-accent">Better together</p>
          <h2 className="mt-2 text-h3">Bundle &amp; Save</h2>
          <p className="mt-3 text-body-md text-text-secondary">
            Complete the look and save more when you buy together.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {bundleDeals.map((bundle) => (
            <article
              key={bundle.id}
              className="grid overflow-hidden rounded-xl border-border bg-surface sm:grid-cols-[minmax(0,1fr)_1fr]"
            >
              <div className="grid grid-cols-2 gap-1 bg-background-muted p-1">
                {bundle.bundleItems.map((id) => {
                  const item = getProduct(id);
                  return item ? (
                    <Image
                      key={id}
                      src={item.image}
                      alt={item.imageAlt || item.name}
                      width={400}
                      height={300}
                      sizes="25vw"
                      className="aspect-square w-full object-cover"
                    />
                  ) : null;
                })}
              </div>
              <div className="flex flex-col justify-center gap-4 p-6">
                <Badge variant="sale" className="w-fit">
                  {bundle.badge}
                </Badge>
                <h3 className="text-h4">{bundle.name}</h3>
                <p className="text-body-sm text-text-secondary">
                  Save {bundle.discountPercent}% across a considered collection
                  of essentials.
                </p>
                <div className="flex items-baseline gap-2">
                  <strong className="product-price">${bundle.price}</strong>
                  <del className="product-old-price">
                    ${bundle.previousPrice}
                  </del>
                </div>
                <Link href="#top-deals" className="btn btn-primary w-fit">
                  View Bundle <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
