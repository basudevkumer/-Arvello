import { create } from "zustand";

const initialState = { searchQuery: "", selectedCategories: [], priceRange: [0, 2000], inStockOnly: false, sortBy: "featured", currentPage: 1, pageSize: 12, viewMode: "grid", filtersOpen: false };

export const useShopStore = create((set) => ({
  ...initialState,
  setSearchQuery: (searchQuery) => set({ searchQuery, currentPage: 1 }),
  toggleCategory: (category) => set((state) => ({ selectedCategories: state.selectedCategories.includes(category) ? state.selectedCategories.filter((item) => item !== category) : [...state.selectedCategories, category], currentPage: 1 })),
  setPriceRange: (priceRange) => set({ priceRange, currentPage: 1 }),
  setInStockOnly: (inStockOnly) => set({ inStockOnly, currentPage: 1 }),
  setSortBy: (sortBy) => set({ sortBy, currentPage: 1 }),
  setPage: (currentPage) => set({ currentPage }),
  setViewMode: (viewMode) => set({ viewMode }),
  setFiltersOpen: (filtersOpen) => set({ filtersOpen }),
  resetFilters: () => set(initialState),
}));
