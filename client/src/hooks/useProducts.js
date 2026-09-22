"use client";

import { useEffect, useState } from "react";
import { useShopStore } from "@/store/useShopStore";
import { getProducts } from "@/services/productService";

export default function useProducts() {
  const searchQuery = useShopStore((state) => state.searchQuery);
  const selectedCategories = useShopStore((state) => state.selectedCategories);
  const priceRange = useShopStore((state) => state.priceRange);
  const inStockOnly = useShopStore((state) => state.inStockOnly);
  const sortBy = useShopStore((state) => state.sortBy);
  const currentPage = useShopStore((state) => state.currentPage);
  const pageSize = useShopStore((state) => state.pageSize);
  const [result, setResult] = useState({ data: [], total: 0, page: currentPage, pageSize });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => { let active = true; setIsLoading(true); setIsError(false); getProducts({ searchQuery, selectedCategories, priceRange, inStockOnly, sortBy, currentPage, pageSize }).then((nextResult) => { if (active) setResult(nextResult); }).catch(() => { if (active) setIsError(true); }).finally(() => { if (active) setIsLoading(false); }); return () => { active = false; }; }, [searchQuery, selectedCategories, priceRange, inStockOnly, sortBy, currentPage, pageSize]);
  return { ...result, isLoading, isError, totalPages: Math.max(1, Math.ceil(result.total / result.pageSize)) };
}
