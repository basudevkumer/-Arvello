"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMinus, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import PriceTag from "@/components/ui/PriceTag";

export default function CartDrawer({ open = false, onClose, items = [], subtotal, currency = "৳", onUpdateQuantity, onRemove, checkoutHref = "/checkout", className = "" }) {
  const titleId = useId();
  const drawerRef = useRef(null);
  const restoreFocusRef = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    restoreFocusRef.current = document.activeElement;
    const drawer = drawerRef.current;
    const selector = "button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
    const handleKeyDown = (event) => { if (event.key === "Escape") { onClose?.(); return; } if (event.key !== "Tab" || !drawer) return; const focusable = [...drawer.querySelectorAll(selector)]; if (!focusable.length) return; const first = focusable[0]; const last = focusable[focusable.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    drawer?.querySelector(selector)?.focus();
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", handleKeyDown); restoreFocusRef.current?.focus?.(); };
  }, [open, onClose]);
  if (!open) return null;
  const total = subtotal ?? items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  return <div className="fixed inset-0 z-50" role="presentation"><button type="button" className="absolute inset-0 size-full cursor-default bg-overlay-dark" aria-label="Close cart" onClick={onClose} /><aside ref={drawerRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className={`absolute inset-y-0 right-0 z-10 flex w-full max-w-md flex-col bg-surface shadow-xl ${className}`}><div className="flex items-center justify-between border-b border-border p-5"><h2 id={titleId} className="text-h4">Your cart</h2><button type="button" onClick={onClose} aria-label="Close cart" className="rounded-sm p-2 text-text-secondary hover:bg-surface-soft"><FiX size={20} aria-hidden="true" /></button></div>{items.length ? <><div className="flex-1 overflow-y-auto p-5"><ul className="grid gap-5">{items.map((item) => <li key={item.id} className="flex gap-3 border-b border-border pb-5"><div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-background-muted">{item.image ? <Image src={item.image} alt={item.imageAlt || item.name} fill sizes="80px" className="object-cover" /> : null}</div><div className="min-w-0 flex-1"><p className="product-name line-clamp-2">{item.name}</p><PriceTag price={item.price} currency={currency} className="mt-1" /><div className="mt-3 flex items-center justify-between gap-2"><div className="inline-flex items-center rounded-md border border-border-strong"><button type="button" onClick={() => onUpdateQuantity?.(item, Math.max(1, (item.quantity || 1) - 1))} aria-label={`Decrease ${item.name} quantity`} className="flex size-8 items-center justify-center text-text-secondary hover:bg-surface-soft"><FiMinus size={14} aria-hidden="true" /></button><span className="min-w-8 text-center text-caption">{item.quantity || 1}</span><button type="button" onClick={() => onUpdateQuantity?.(item, (item.quantity || 1) + 1)} aria-label={`Increase ${item.name} quantity`} className="flex size-8 items-center justify-center text-text-secondary hover:bg-surface-soft"><FiPlus size={14} aria-hidden="true" /></button></div><button type="button" onClick={() => onRemove?.(item)} aria-label={`Remove ${item.name} from cart`} className="p-2 text-text-secondary hover:text-error"><FiTrash2 size={16} aria-hidden="true" /></button></div></div></li>)}</ul></div><div className="grid gap-4 border-t border-border p-5"><div className="flex items-center justify-between"><span className="text-label-md">Subtotal</span><PriceTag price={total} currency={currency} /></div><Link href={checkoutHref} onClick={onClose} className="btn btn-primary min-h-12 w-full">Checkout</Link></div></> : <div className="grid flex-1 place-content-center gap-3 p-5 text-center"><h3 className="text-h4">Your cart is empty</h3><p className="text-body-md text-text-secondary">Browse our collection and add something you love.</p><Link href="/shop" onClick={onClose} className="btn btn-primary mx-auto">Continue shopping</Link></div>}</aside></div>;
}
