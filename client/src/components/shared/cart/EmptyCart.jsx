import { useId } from "react";
import Link from "next/link";

export default function EmptyCart({ title = "Your cart is empty", description = "Browse our collection and add something you love.", href = "/shop", actionLabel = "Continue shopping", className = "" }) {
  const titleId = useId();
  return <section className={`grid place-items-center gap-4 rounded-lg border border-border bg-surface p-8 text-center sm:p-12 ${className}`} aria-labelledby={titleId}><h1 id={titleId} className="text-h3">{title}</h1><p className="max-w-md text-body-md text-text-secondary">{description}</p><Link href={href} className="btn btn-primary">{actionLabel}</Link></section>;
}
