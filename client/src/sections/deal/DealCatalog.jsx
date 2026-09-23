"use client";

import { useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/shared/product/ProductCard";
import { catalogDeals } from "@/lib/data/deals";

const categories = [
  "All Deals",
  "Sofa",
  "Dining",
  "Bedroom",
  "Lighting",
  "Storage",
];
const sortOptions = [
  { value: "discount", label: "Biggest Discount" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "ending", label: "Ending Soon" },
];

export function DealCategories({ value, onChange }) {
  return (
    <section className="py-8">
      <Container>
        <div className="mb-4">
          <p className="text-overline text-accent">
            Find your next favorite piece
          </p>
          <h2 className="mt-2 text-h3">Shop Deals By Category</h2>
        </div>
        <div
          className="flex gap-3 overflow-x-auto pb-2"
          aria-label="Deal categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                onChange(category === "All Deals" ? "All" : category)
              }
              aria-pressed={
                value === (category === "All Deals" ? "All" : category)
              }
              className={`whitespace-nowrap rounded-full border px-5 py-3 text-label-sm transition-theme focus-visible:outline-2 focus-visible:outline-focus ${value === (category === "All Deals" ? "All" : category) ? "border-primary bg-primary text-text-inverse" : "border-border-strong text-text-secondary hover:border-primary hover:text-primary"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function DealsToolbar({ count, sort, setSort, category, setCategory }) {
  return (
    <div className="border-y border-border bg-background-soft py-4">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-sm text-text-secondary">
            <strong className="text-text-primary">{count}</strong> active deals
          </p>
          <label className="flex items-center gap-3 text-label-sm text-text-secondary">
            Sort by
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="min-h-10 rounded-md border-border-strong bg-background px-3 text-text-primary focus:outline-2 focus:outline-focus"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto sm:hidden">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`whitespace-nowrap rounded-full px-3 py-2 text-caption ${category === (item === "All Deals" ? "All" : item) ? "bg-primary text-text-inverse" : "bg-background-muted text-text-secondary"}`}
              onClick={() => setCategory(item === "All Deals" ? "All" : item)}
            >
              {item}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}

export function TopDealsGrid({ items }) {
  return (
    <section id="top-deals" className="py-12 lg:py-16">
      <Container>
        <div className="mb-8">
          <p className="text-overline text-accent">More to discover</p>
          <h2 className="mt-2 text-h3">More Deals For Your Home</h2>
        </div>
        {items.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                href={`/products/${item.productId}`}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border-border bg-background-soft p-10 text-center">
            <h3 className="text-h4">No deals match this filter</h3>
            <p className="mt-2 text-body-sm text-text-secondary">
              Try another category to keep browsing our current offers.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default function DealCatalog() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("discount");
  const items = useMemo(() => {
    const filtered = catalogDeals.filter(
      (item) => category === "All" || item.category === category,
    );
    return [...filtered].sort((a, b) =>
      sort === "price-asc"
        ? a.price - b.price
        : sort === "price-desc"
          ? b.price - a.price
          : sort === "ending"
            ? new Date(a.dealEndsAt) - new Date(b.dealEndsAt)
            : b.discountPercent - a.discountPercent,
    );
  }, [category, sort]);
  return (
    <>
      <DealCategories value={category} onChange={setCategory} />
      <DealsToolbar
        count={items.length}
        sort={sort}
        setSort={setSort}
        category={category}
        setCategory={setCategory}
      />
      <TopDealsGrid items={items} />
    </>
  );
}
