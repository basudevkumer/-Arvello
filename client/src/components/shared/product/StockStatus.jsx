export default function StockStatus({ status = "in-stock", quantity, labels = {}, className = "" }) {
  const config = { "in-stock": { label: "In stock", className: "text-success" }, "low-stock": { label: quantity ? `Only ${quantity} left` : "Low stock", className: "text-warning" }, "out-of-stock": { label: "Out of stock", className: "text-error" } }[status] || { label: status, className: "text-text-secondary" };
  return <p className={`text-label-md ${config.className} ${className}`} role="status">{labels[status] || config.label}</p>;
}
