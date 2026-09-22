"use client";

import Pagination from "@/components/shared/common/Pagination";
import useProducts from "@/hooks/useProducts";
import { useShopStore } from "@/store/useShopStore";

export default function ShopPagination() {
  const { totalPages } = useProducts();
  const currentPage = useShopStore((state) => state.currentPage);
  const setPage = useShopStore((state) => state.setPage);
  return <Pagination page={currentPage} totalPages={totalPages} onPageChange={setPage} className="mt-10" />;
}
