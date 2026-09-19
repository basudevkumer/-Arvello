import { useId } from "react";
import Link from "next/link";

export default function CheckoutSuccess({ orderNumber, title = "Thank you for your order", description = "Your order has been placed successfully.", href = "/shop", actionLabel = "Continue shopping", className = "" }) {
  const titleId = useId();
  return <section className={`grid justify-items-center gap-4 rounded-lg border border-border bg-surface p-8 text-center sm:p-12 ${className}`} aria-labelledby={titleId}><div className="flex size-14 items-center justify-center rounded-full bg-primary-light text-24 font-bold text-primary" aria-hidden="true">✓</div><h1 id={titleId} className="text-h3">{title}</h1><p className="max-w-lg text-body-md text-text-secondary">{description}</p>{orderNumber ? <p className="text-label-md">Order number: <span className="text-primary">{orderNumber}</span></p> : null}<Link href={href} className="btn btn-primary mt-2">{actionLabel}</Link></section>;
}
