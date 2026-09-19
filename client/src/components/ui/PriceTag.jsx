export default function PriceTag({ price, previousPrice, currency = "৳", locale = "en-BD", className = "" }) {
  const formatPrice = (value) => typeof value === "number" ? new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(value) : value;
  return <div className={`flex flex-wrap items-baseline gap-2 ${className}`}><span className="product-price">{currency}{formatPrice(price)}</span>{previousPrice !== undefined && previousPrice !== null ? <span className="product-old-price">{currency}{formatPrice(previousPrice)}</span> : null}</div>;
}
