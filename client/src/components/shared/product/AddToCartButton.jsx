"use client";

import Button from "@/components/ui/Button";

export default function AddToCartButton({ onAddToCart, disabled = false, loading = false, outOfStock = false, children, className = "" }) {
  return <Button type="button" variant="primary" size="lg" disabled={disabled || outOfStock} loading={loading} onClick={onAddToCart} className={`w-full ${className}`}>{children || (outOfStock ? "Out of stock" : "Add to cart")}</Button>;
}
