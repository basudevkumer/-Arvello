import { useId } from "react";
import PriceTag from "@/components/ui/PriceTag";

export default function OrderSummaryCard({ items = [], subtotal = 0, shipping = 0, discount = 0, total, currency = "৳", className = "" }) {
  const titleId = useId();
  const orderTotal = total ?? subtotal + shipping - discount;
  return <section className={`grid gap-5 rounded-lg border border-border bg-surface p-5 ${className}`} aria-labelledby={titleId}><h2 id={titleId} className="text-h4">Order summary</h2><ul className="grid gap-4">{items.map((item) => <li key={item.id} className="flex items-start justify-between gap-4 text-body-sm"><span className="text-text-secondary">{item.name} × {item.quantity || 1}</span><PriceTag price={(item.price || 0) * (item.quantity || 1)} currency={currency} /></li>)}</ul><dl className="grid gap-3 border-t border-border pt-4 text-body-sm"><div className="flex justify-between"><dt className="text-text-secondary">Subtotal</dt><dd><PriceTag price={subtotal} currency={currency} /></dd></div>{shipping ? <div className="flex justify-between"><dt className="text-text-secondary">Shipping</dt><dd><PriceTag price={shipping} currency={currency} /></dd></div> : null}{discount > 0 ? <div className="flex justify-between"><dt className="text-text-secondary">Discount</dt><dd className="text-success">−{currency}{discount}</dd></div> : null}<div className="flex justify-between border-t border-border pt-3 text-label-lg"><dt>Total</dt><dd><PriceTag price={orderTotal} currency={currency} /></dd></div></dl></section>;
}
