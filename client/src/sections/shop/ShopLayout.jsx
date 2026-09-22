"use client";

import { FiX } from "react-icons/fi";
import Container from "@/components/layout/Container";
import FilterPanel from "./FilterPanel";
import ShopPagination from "./ShopPagination";
import ShopProductGrid from "./ProductGrid";
import { useShopStore } from "@/store/useShopStore";

export default function ShopLayout() {
  const filtersOpen = useShopStore((state) => state.filtersOpen);
  const setFiltersOpen = useShopStore((state) => state.setFiltersOpen);
  return (
    <section className="">
      <Container className="py-8 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div className="hidden lg:sticky lg:top-24 lg:block">
            <FilterPanel />
          </div>
          <div className="min-w-0 lg:pr-2">
            <ShopProductGrid />
            <ShopPagination />
          </div>
        </div>
        {filtersOpen ? (
          <div
            className="fixed inset-0 z-50 bg-neutral-950/40 lg:hidden"
            role="presentation"
            onClick={() => setFiltersOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Product filters"
              className="absolute inset-x-0 bottom-0 max-h-[90vh] overflow-y-auto rounded-t-2xl bg-surface p-6 shadow-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex justify-end">
                <button
                  type="button"
                  aria-label="Close filters"
                  onClick={() => setFiltersOpen(false)}
                  className="rounded-full p-2 text-text-secondary hover:bg-background-muted"
                >
                  <FiX />
                </button>
              </div>
              <FilterPanel mobile />
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
