import { useId } from "react";
import Link from "next/link";
import PriceTag from "@/components/ui/PriceTag";

export default function CartSummary({ subtotal = 0, shipping = 0, discount = 0, total, currency = "৳", checkoutHref = "/checkout", checkoutLabel = "Proceed to checkout", children, className = "" }) {
  const titleId = useId();
  const orderTotal = total ?? subtotal + shipping - discount;
  return <section className={`grid gap-4 rounded-lg border border-border bg-surface p-5 ${className}`} aria-labelledby={titleId}><h2 id={titleId} className="text-h4">Order summary</h2><dl className="grid gap-3 text-body-sm"><div className="flex justify-between gap-4"><dt className="text-text-secondary">Subtotal</dt><dd><PriceTag price={subtotal} currency={currency} /></dd></div>{shipping !== undefined ? <div className="flex justify-between gap-4"><dt className="text-text-secondary">Shipping</dt><dd><PriceTag price={shipping} currency={currency} /></dd></div> : null}{discount > 0 ? <div className="flex justify-between gap-4"><dt className="text-text-secondary">Discount</dt><dd className="text-success">−{currency}{discount}</dd></div> : null}<div className="flex justify-between gap-4 border-t border-border pt-4 text-label-lg"><dt>Total</dt><dd><PriceTag price={orderTotal} currency={currency} /></dd></div></dl>{children}{checkoutHref ? <Link href={checkoutHref} className="btn btn-primary w-full">{checkoutLabel}</Link> : null}</section>;
}
