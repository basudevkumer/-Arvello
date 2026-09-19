"use client";

import Image from "next/image";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PriceTag from "@/components/ui/PriceTag";
import RatingStars from "@/components/ui/RatingStars";

export default function ProductCard({ product, href, onAddToCart, onWishlist, isWishlisted = false, className = "" }) {
  const { id, name, image, imageAlt, category, price, previousPrice, rating, reviewCount, badge, stockStatus = "in-stock" } = product;
  const productHref = href || `/products/${id}`;
  const canBuy = stockStatus !== "out-of-stock";

  return (
    <article className={`group overflow-hidden rounded-lg border border-border bg-surface transition-theme hover:shadow-md motion-reduce:transition-none ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-background-muted">
        <Link href={productHref} aria-label={`View ${name}`}>
          <Image src={image} alt={imageAlt || name} fill sizes="(min-width: 1280px) 280px, (min-width: 768px) 30vw, 50vw" className="object-cover transition-transform duration-350 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
        </Link>
        {badge ? <Badge variant="sale" className="absolute left-3 top-3">{badge}</Badge> : null}
        {onWishlist ? <button type="button" onClick={() => onWishlist(product)} aria-pressed={isWishlisted} aria-label={`${isWishlisted ? "Remove" : "Add"} ${name} ${isWishlisted ? "from" : "to"} wishlist`} className="absolute right-3 top-3 rounded-full bg-surface p-2 text-primary shadow-sm transition-theme hover:bg-primary hover:text-text-inverse motion-reduce:transition-none"><FiHeart size={18} className={isWishlisted ? "fill-current" : ""} aria-hidden="true" /></button> : null}
      </div>
      <div className="grid gap-3 p-4">
        {category ? <p className="product-category">{category}</p> : null}
        <Link href={productHref} className="product-name line-clamp-2 hover:text-primary">{name}</Link>
        {rating !== undefined ? <RatingStars rating={rating} reviewCount={reviewCount} /> : null}
        <PriceTag price={price} previousPrice={previousPrice} />
        {onAddToCart ? <Button type="button" size="sm" disabled={!canBuy} onClick={() => onAddToCart(product)}>{canBuy ? "Add to cart" : "Out of stock"}</Button> : null}
      </div>
    </article>
  );
}
