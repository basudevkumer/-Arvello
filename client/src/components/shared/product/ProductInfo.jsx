import { useId } from "react";
import Badge from "@/components/ui/Badge";
import PriceTag from "@/components/ui/PriceTag";
import RatingStars from "@/components/ui/RatingStars";
import StockStatus from "./StockStatus";

export default function ProductInfo({ product, children, className = "" }) {
  const titleId = useId();
  const { name, category, description, price, previousPrice, rating, reviewCount, badge, stockStatus = "in-stock" } = product;
  return <section className={`grid content-start gap-5 ${className}`} aria-labelledby={titleId}>{category ? <p className="product-category">{category}</p> : null}<div className="flex flex-wrap items-start justify-between gap-3"><h1 id={titleId} className="text-h2">{name}</h1>{badge ? <Badge variant="sale">{badge}</Badge> : null}</div>{rating !== undefined ? <RatingStars rating={rating} reviewCount={reviewCount} /> : null}<PriceTag price={price} previousPrice={previousPrice} /><StockStatus status={stockStatus} />{description ? <p className="text-body-md text-text-secondary">{description}</p> : null}{children}</section>;
}
