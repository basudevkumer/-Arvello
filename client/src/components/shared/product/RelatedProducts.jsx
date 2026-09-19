import { useId } from "react";
import ProductGrid from "./ProductGrid";

export default function RelatedProducts({ products = [], onAddToCart, onWishlist, wishlistIds = [], title = "You may also like", className = "" }) {
  const titleId = useId();
  if (!products.length) return null;
  return <section className={`grid gap-6 ${className}`} aria-labelledby={titleId}><h2 id={titleId} className="text-h3">{title}</h2><ProductGrid products={products} onAddToCart={onAddToCart} onWishlist={onWishlist} wishlistIds={wishlistIds} columns="default" /></section>;
}
