"use client";

import { FiGrid, FiList, FiSliders } from "react-icons/fi";
import Container from "@/components/layout/Container";
import SearchBar from "@/components/shared/search/SearchBar";
import SortDropdown from "@/components/shared/filter/SortDropdown";
import useDebounce from "@/hooks/useDebounce";
import useProducts from "@/hooks/useProducts";
import { useShopStore } from "@/store/useShopStore";
import { useEffect, useState } from "react";

const sortOptions = [{ value: "featured", label: "Featured" }, { value: "price-asc", label: "Price: Low to High" }, { value: "price-desc", label: "Price: High to Low" }, { value: "rating", label: "Top Rated" }, { value: "newest", label: "Newest" }];

export default function ShopToolbar() {
  const { total } = useProducts();
  const storeQuery = useShopStore((state) => state.searchQuery);
  const sortBy = useShopStore((state) => state.sortBy);
  const viewMode = useShopStore((state) => state.viewMode);
  const setSearchQuery = useShopStore((state) => state.setSearchQuery);
  const setSortBy = useShopStore((state) => state.setSortBy);
  const setViewMode = useShopStore((state) => state.setViewMode);
  const setFiltersOpen = useShopStore((state) => state.setFiltersOpen);
  const [query, setQuery] = useState(storeQuery);
  const debouncedQuery = useDebounce(query);
  useEffect(() => { setSearchQuery(debouncedQuery); }, [debouncedQuery, setSearchQuery]);
  return <div className="sticky top-0 z-20 border-y border-border bg-background/95 py-4 backdrop-blur"><Container><div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"><div className="flex items-center justify-between gap-3"><p className="text-body-sm text-text-secondary"><strong className="text-text-primary">{total}</strong> products found</p><button type="button" onClick={() => setFiltersOpen(true)} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border-strong px-3 text-label-sm text-primary lg:hidden"><FiSliders /> Filters</button></div><div className="flex flex-col gap-3 sm:flex-row sm:items-center"><SearchBar value={query} onChange={setQuery} placeholder="Search furniture..." className="w-full sm:w-64" /><SortDropdown value={sortBy} onChange={setSortBy} options={sortOptions} label="" className="min-w-48" /><div className="flex gap-1 rounded-md border border-border-strong p-1" aria-label="View mode"><button type="button" onClick={() => setViewMode("grid")} aria-label="Grid view" aria-pressed={viewMode === "grid"} className={`flex h-9 w-9 items-center justify-center rounded ${viewMode === "grid" ? "bg-primary text-text-inverse" : "text-text-secondary"}`}><FiGrid /></button><button type="button" onClick={() => setViewMode("list")} aria-label="List view" aria-pressed={viewMode === "list"} className={`flex h-9 w-9 items-center justify-center rounded ${viewMode === "list" ? "bg-primary text-text-inverse" : "text-text-secondary"}`}><FiList /></button></div></div></div></Container></div>;
}
