import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { categories } from "@/lib/data/categories";

const guideItems = [
  { name: "Living Room", query: "Living Room", image: categories.find((item) => item.name === "Sofas")?.image },
  { name: "Bedroom", query: "Bedroom", image: categories.find((item) => item.name === "Bedroom")?.image },
  { name: "Dining Room", query: "Dining Room", image: categories.find((item) => item.name === "Dining")?.image },
  { name: "Home Office", query: "Home Office", image: categories.find((item) => item.name === "Home Office")?.image },
];

export default function ShopBuyingGuide() {
  return (
    <section className="bg-background-soft py-16 lg:py-20">
      <Container>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-overline text-accent">Make browsing easier</p>
            <h2 className="mt-2 text-h3">Find the Right Furniture for Your Space</h2>
          </div>
          <Link href="/categories" className="inline-flex items-center gap-2 text-label-md text-primary hover:text-accent">Browse all categories <FiArrowRight /></Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {guideItems.map((item) => (
            <Link key={item.name} href={`/categories?room=${encodeURIComponent(item.query)}`} className="group relative min-h-36 overflow-hidden rounded-xl bg-neutral-900">
              <Image src={item.image} alt={item.name} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover opacity-75 transition-transform duration-350 group-hover:scale-105" />
              <span className="absolute inset-x-4 bottom-4 text-label-lg text-text-inverse">{item.name}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
