import { products } from "@/lib/data/products";

export async function getProducts({ searchQuery = "", selectedCategories = [], priceRange = [0, 2000], sortBy = "featured", currentPage = 1, pageSize = 12, inStockOnly = false } = {}) {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const query = searchQuery.trim().toLowerCase();
  let result = products.filter((product) => (!query || `${product.name} ${product.category}`.toLowerCase().includes(query)) && (!selectedCategories.length || selectedCategories.includes(product.category)) && product.price >= priceRange[0] && product.price <= priceRange[1] && (!inStockOnly || product.inStock));
  if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
  if (sortBy === "newest") result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const total = result.length;
  const start = (currentPage - 1) * pageSize;
  return { data: result.slice(start, start + pageSize), total, page: currentPage, pageSize };
}
