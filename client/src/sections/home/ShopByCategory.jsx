import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { categories } from "./data";
export default function ShopByCategory() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-overline text-accent">Explore the collection</p>
            <h2 className="mt-2 text-h3">Shop By Category</h2>
          </div>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-label-md text-primary hover:text-accent"
          >
            View All <FiArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              href={`/categories?category=${category.name}`}
              key={category.name}
              className="card group p-3 text-center transition-theme hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden rounded-md bg-background-muted">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1024px) 16vw, 50vw"
                  className="object-cover transition-transform duration-350 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-label-md">{category.name}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
