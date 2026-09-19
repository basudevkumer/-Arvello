import ProductGrid from "@/components/shared/product/ProductGrid";

export default function SearchResults({ query = "", results = [], loading = false, onAddToCart, onWishlist, wishlistIds = [], className = "" }) {
  if (loading) return <div className={`text-body-md text-text-secondary ${className}`} role="status">Searching products…</div>;
  if (!results.length) return <div className={`grid gap-2 ${className}`} role="status"><h2 className="text-h4">No results found</h2><p className="text-body-md text-text-secondary">{query ? `We couldn't find products matching “${query}”. Try a different search.` : "Try searching for a product or category."}</p></div>;
  return <section className={className} aria-label={query ? `Search results for ${query}` : "Search results"}><ProductGrid products={results} onAddToCart={onAddToCart} onWishlist={onWishlist} wishlistIds={wishlistIds} /></section>;
}
