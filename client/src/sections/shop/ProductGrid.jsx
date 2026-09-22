"use client";

import ProductCard from "@/components/shared/product/ProductCard";
import useProducts from "@/hooks/useProducts";
import { useShopStore } from "@/store/useShopStore";

function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="aspect-[4/3] animate-pulse bg-background-muted" />
      <div className="grid gap-3 p-4">
        <div className="h-4 w-2/3 animate-pulse rounded bg-background-muted" />
        <div className="h-5 w-5/6 animate-pulse rounded bg-background-muted" />
        <div className="h-5 w-1/3 animate-pulse rounded bg-background-muted" />
      </div>
    </div>
  );
}

export default function ShopProductGrid() {
  const { data, isLoading, isError } = useProducts();
  const viewMode = useShopStore((state) => state.viewMode);
  const resetFilters = useShopStore((state) => state.resetFilters);
  if (isLoading)
    return (
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  if (isError)
    return (
      <div className="rounded-lg border border-error/30 bg-surface p-8 text-center">
        <p className="text-body-md text-error">
          We couldn’t load the furniture catalog.
        </p>
        <button
          type="button"
          onClick={resetFilters}
          className="mt-4 text-label-md text-primary"
        >
          Reset filters and try again
        </button>
      </div>
    );
  if (!data.length)
    return (
      <div className="rounded-lg border border-border bg-surface p-10 text-center">
        <h2 className="text-h4">No products match your filters</h2>
        <p className="mt-2 text-body-sm text-text-secondary">
          Try a different search or broaden your categories and price range.
        </p>
        <button
          type="button"
          onClick={resetFilters}
          className="btn btn-primary mt-6"
        >
          Reset Filters
        </button>
      </div>
    );
  return (
    <div
      className={
        viewMode === "list"
          ? "grid gap-5"
          : "grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
      }
    >
      {data.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          className={
            viewMode === "list"
              ? "sm:grid sm:grid-cols-[220px_minmax(0,1fr)]"
              : ""
          }
        />
      ))}
    </div>
  );
}
