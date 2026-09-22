"use client";
import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/common/SectionHeading";
import ProductCard from "@/components/shared/product/ProductCard";
import { homeProducts } from "./data";
const tabs = ["All", "Living Room", "Bedroom", "Dining", "Decor"];
export default function FeaturedProducts() {
  const [active, setActive] = useState("All");
  const products =
    active === "All"
      ? homeProducts
      : homeProducts.filter((product) => product.category === active);
  return (
    <section className="bg-background-soft py-16 lg:py-20">
      <Container>
        <SectionHeading
          align="center"
          title="Featured Products"
          description="Handpicked for a better living experience"
        />
        <div className="my-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`rounded-full border px-4 py-2 text-label-sm transition-theme ${active === tab ? "border-primary bg-primary text-text-inverse" : "border-border bg-surface text-text-secondary hover:border-primary hover:text-primary"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {!products.length ? (
          <p className="py-10 text-center text-text-secondary">
            More pieces are coming to this collection soon.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
