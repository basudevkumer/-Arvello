"use client";

import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [], onAddToCart, onWishlist, wishlistIds = [], columns = "default", className = "", emptyMessage = "No products found." }) {
  if (!products.length) return <p className="text-body-md text-text-secondary">{emptyMessage}</p>;
  const columnClass = { default: "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", compact: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", wide: "grid-cols-1 sm:grid-cols-2" }[columns] || "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  return <div className={`grid gap-6 ${columnClass} ${className}`}>{products.map((product) => <ProductCard key={product.id} product={product} href={product.href} onAddToCart={onAddToCart} onWishlist={onWishlist} isWishlisted={wishlistIds.includes(product.id)} />)}</div>;
}
