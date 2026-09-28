"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/layout/Container";
import { categories as catalogCategories, rooms } from "@/lib/data/categories";

const tabs = ["Categories", "Rooms", "Popular", "Living", "Bedroom", "Dining"];

export default function ShopByCategory() {
  const [activeTab, setActiveTab] = useState("Categories");
  const categoryItems = [
    ...catalogCategories,
    {
      id: "tables",
      name: "Tables",
      slug: "tables",
      image: catalogCategories.find((category) => category.name === "Dining")?.image,
      rooms: ["Dining Room", "Living Room", "Home Office"],
    },
    {
      id: "chairs",
      name: "Chairs",
      slug: "chairs",
      image: catalogCategories.find((category) => category.name === "Sofas")?.image,
      rooms: ["Living Room", "Dining Room", "Home Office"],
    },
  ].slice(0, 10);
  const roomItems = rooms.slice(0, 12).map((name, index) => ({
    name,
    image: categoryItems[index % categoryItems.length].image,
  }));
  const items = (activeTab === "Rooms"
    ? roomItems
    : activeTab === "Popular"
      ? [...categoryItems].sort((a, b) => (b.productCount || 0) - (a.productCount || 0))
      : activeTab === "Living"
        ? categoryItems.filter((category) => category.rooms?.includes("Living Room"))
        : activeTab === "Bedroom"
          ? categoryItems.filter((category) => category.rooms?.includes("Bedroom"))
          : activeTab === "Dining"
            ? categoryItems.filter((category) => category.rooms?.includes("Dining Room"))
            : categoryItems
  ).slice(0, 12);
  return (
    <section id="shop-categories" className="py-16 lg:py-20">
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
        <div className="mb-7 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Browse furniture by">
          {tabs.map((tab) => (
            <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)} className={`rounded-full border px-5 py-2 text-label-md transition-theme ${activeTab === tab ? "border-primary bg-primary text-text-inverse" : "border-border bg-surface text-text-secondary hover:border-primary hover:text-primary"}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((category) => (
            <Link
              href={`/categories?${activeTab === "Rooms" || ["Living", "Bedroom", "Dining"].includes(activeTab) ? "room" : "category"}=${encodeURIComponent(category.slug || category.name)}`}
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
