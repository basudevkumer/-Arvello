"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/common/SectionHeading";
import PriceTag from "@/components/ui/PriceTag";
import { products } from "@/lib/data/products";
import { shopTheLook } from "@/lib/data/inspiration";

export default function ShopTheLook() {
  const [activeHotspot, setActiveHotspot] = useState(null);
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="Curated room"
          title="Shop the Look"
          description="Loved the room? Explore the pieces that bring this warm, layered look together."
        />
        <div className="relative mt-8 overflow-visible rounded-2xl bg-background-muted">
          <Image
            src={shopTheLook.image}
            alt={shopTheLook.imageAlt}
            width={1800}
            height={1200}
            sizes="(min-width: 1024px) 1240px, 100vw"
            className="aspect-[4/3] w-full rounded-2xl object-cover sm:aspect-[16/9]"
          />
          {shopTheLook.hotspots.map((hotspot) => {
            const product = products.find(
              (item) => item.id === hotspot.productId,
            );
            const isActive = activeHotspot === hotspot.id;
            return (
              <div
                key={hotspot.id}
                className="absolute"
                style={{ top: hotspot.top, left: hotspot.left }}
              >
                <button
                  type="button"
                  aria-label={`Show ${product?.name || hotspot.label}`}
                  aria-expanded={isActive}
                  onClick={() => setActiveHotspot(isActive ? null : hotspot.id)}
                  className="flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-text-inverse bg-accent text-text-primary shadow-md transition-theme hover:bg-accent-hover"
                >
                  <FiPlus
                    size={20}
                    className={
                      isActive
                        ? "rotate-45 transition-transform"
                        : "transition-transform"
                    }
                    aria-hidden="true"
                  />
                </button>
                {isActive && product ? (
                  <div className="absolute bottom-5 left-1/2 z-10 w-64 -translate-x-1/2 rounded-lg border border-border bg-surface p-3 shadow-lg sm:bottom-7">
                    <Link
                      href={`/shop?product=${product.id}`}
                      className="flex items-center gap-3"
                      onClick={() => setActiveHotspot(null)}
                    >
                      <Image
                        src={product.image}
                        alt=""
                        width={64}
                        height={64}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                      <span className="min-w-0">
                        <span className="block line-clamp-2 text-label-md">
                          {product.name}
                        </span>
                        <PriceTag price={product.price} className="mt-1" />
                      </span>
                      <FiArrowRight
                        className="ml-auto shrink-0 text-primary"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-caption text-text-muted">
          Tap a gold pin to discover each piece.
        </p>
      </Container>
    </section>
  );
}
