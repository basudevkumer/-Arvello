"use client";

import { FiX } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { useShopStore } from "@/store/useShopStore";

const categories = ["Sofa", "Dining", "Bedroom", "Storage", "Lighting", "Decor"];
export default function FilterPanel({ mobile = false }) {
  const selectedCategories = useShopStore((state) => state.selectedCategories);
  const priceRange = useShopStore((state) => state.priceRange);
  const inStockOnly = useShopStore((state) => state.inStockOnly);
  const toggleCategory = useShopStore((state) => state.toggleCategory);
  const setPriceRange = useShopStore((state) => state.setPriceRange);
  const setInStockOnly = useShopStore((state) => state.setInStockOnly);
  const resetFilters = useShopStore((state) => state.resetFilters);
  const setFiltersOpen = useShopStore((state) => state.setFiltersOpen);
  return <aside className="grid content-start gap-7" aria-label="Product filters"><div className="flex items-center justify-between"><h2 className="text-h4">Filters</h2>{mobile ? <button type="button" aria-label="Close filters" onClick={() => setFiltersOpen(false)} className="rounded-full p-2 text-text-secondary hover:bg-background-muted"><FiX /></button> : null}</div><fieldset className="grid gap-3"><legend className="text-label-md">Categories</legend>{categories.map((category) => <label key={category} className="flex min-h-8 cursor-pointer items-center gap-3 text-body-sm text-text-secondary"><input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => toggleCategory(category)} className="size-4 accent-primary" />{category}</label>)}</fieldset><fieldset className="grid gap-3 border-t border-border pt-6"><legend className="text-label-md">Price range</legend><div className="flex items-center justify-between text-caption text-text-secondary"><span>৳{priceRange[0]}</span><span>৳{priceRange[1]}</span></div><input type="range" min="0" max="2000" step="50" value={priceRange[1]} onChange={(event) => setPriceRange([priceRange[0], Number(event.target.value)])} className="w-full accent-primary" aria-label="Maximum price" /></fieldset><label className="flex min-h-8 cursor-pointer items-center gap-3 border-t border-border pt-6 text-body-sm text-text-secondary"><input type="checkbox" checked={inStockOnly} onChange={(event) => setInStockOnly(event.target.checked)} className="size-4 accent-primary" />In stock only</label><button type="button" onClick={() => { resetFilters(); if (mobile) setFiltersOpen(false); }} className="text-left text-label-sm text-primary hover:text-primary-hover">Reset all filters</button>{mobile ? <Button type="button" onClick={() => setFiltersOpen(false)} className="w-full">Show results</Button> : null}</aside>;
}
