import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import CountdownTimer from "@/components/shared/common/CountdownTimer";
import PriceTag from "@/components/ui/PriceTag";
import Badge from "@/components/ui/Badge";
import { dealOfTheDay } from "@/lib/data/deals";

export default function DealOfTheDay() {
  const item = dealOfTheDay;
  return (
    <section className="py-8 lg:py-12">
      <Container>
        <div className="grid overflow-hidden rounded-2xl bg-primary text-text-inverse shadow-lg lg:grid-cols-2">
          <div className="relative min-h-80 lg:min-h-[520px]">
            <Image
              src={item.image}
              alt={item.imageAlt || item.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-7 sm:p-10 lg:p-14">
            <Badge variant="warning" className="w-fit">
              Deal of the Day
            </Badge>
            <div>
              <h2 className="text-h2 text-text-inverse">{item.name}</h2>
              <p className="mt-3 max-w-md text-body-md text-white/70">
                A considered silhouette with lasting comfort, now at an
                exceptional Arvello price.
              </p>
            </div>
            <PriceTag
              price={item.price}
              previousPrice={item.previousPrice}
              currency="$"
              className="[&_.product-price]:text-32 [&_.product-price]:text-accent [&_.product-old-price]:text-white/50"
            />
            <div>
              <p className="mb-3 text-label-sm text-white/70">
                This offer ends soon
              </p>
              <CountdownTimer endAt={item.dealEndsAt} />
            </div>
            <Link
              href={`/products/${item.productId}`}
              className="btn btn-accent w-fit"
            >
              Grab This Deal <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
