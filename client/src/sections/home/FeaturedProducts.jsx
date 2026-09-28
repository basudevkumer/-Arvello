"use client";
import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/common/SectionHeading";
import ProductCard from "@/components/shared/product/ProductCard";
import { products } from "@/lib/data/products";
import { homeProducts } from "./data";
const tabs = ["Featured", "Best Sellers", "New Arrivals", "Living Room", "Bedroom", "Dining", "Storage"];
const featuredProducts = [
  ...homeProducts,
  ...products.filter((product) => !homeProducts.some((homeProduct) => homeProduct.name === product.name)),
].slice(0, 12);

export default function FeaturedProducts() {
  const [active, setActive] = useState("Featured");
  const visibleProducts = active === "Featured"
    ? featuredProducts
    : active === "Best Sellers"
      ? [...featuredProducts].sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0)).slice(0, 12)
      : active === "New Arrivals"
        ? featuredProducts.filter((product) => product.badge === "New" || product.tags?.includes("new")).slice(0, 12)
        : featuredProducts.filter((product) => product.category === active || (active === "Living Room" && product.category === "Sofa")).slice(0, 12);
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
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
          {!visibleProducts.length ? (
          <p className="py-10 text-center text-text-secondary">
            More pieces are coming to this collection soon.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
