"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import PriceTag from "@/components/ui/PriceTag";
import CartItem from "./CartItem";

export default function CartDrawer({ open = false, onClose, items = [], subtotal, currency = "৳", onUpdateQuantity, onRemove, checkoutHref = "/checkout", className = "" }) {
  const titleId = useId();
  const drawerRef = useRef(null);
  const restoreFocusRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    restoreFocusRef.current = document.activeElement;
    const drawer = drawerRef.current;
    const selector = "button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") { onClose?.(); return; }
      if (event.key !== "Tab" || !drawer) return;
      const focusable = [...drawer.querySelectorAll(selector)];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    drawer?.querySelector(selector)?.focus();
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", handleKeyDown); restoreFocusRef.current?.focus?.(); };
  }, [open, onClose]);

  if (!open) return null;
  const total = subtotal ?? items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  return <div className="fixed inset-0 z-50" role="presentation"><button type="button" className="absolute inset-0 size-full cursor-default bg-overlay-dark" aria-label="Close cart" onClick={onClose} /><aside ref={drawerRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className={`absolute inset-y-0 right-0 z-10 flex w-full max-w-md flex-col bg-surface shadow-xl ${className}`}><div className="flex items-center justify-between border-b border-border p-5"><h2 id={titleId} className="text-h4">Your cart</h2><button type="button" onClick={onClose} aria-label="Close cart" className="rounded-sm p-2 text-text-secondary hover:bg-surface-soft"><FiX size={20} aria-hidden="true" /></button></div>{items.length ? <><div className="flex-1 overflow-y-auto p-5"><ul className="grid gap-5">{items.map((item) => <CartItem key={item.id} item={item} currency={currency} onUpdateQuantity={onUpdateQuantity} onRemove={onRemove} />)}</ul></div><div className="grid gap-4 border-t border-border p-5"><div className="flex items-center justify-between"><span className="text-label-md">Subtotal</span><PriceTag price={total} currency={currency} /></div><Link href={checkoutHref} onClick={onClose} className="btn btn-primary min-h-12 w-full">Checkout</Link></div></> : <div className="grid flex-1 place-content-center gap-3 p-5 text-center"><h3 className="text-h4">Your cart is empty</h3><p className="text-body-md text-text-secondary">Browse our collection and add something you love.</p><Link href="/shop" onClick={onClose} className="btn btn-primary mx-auto">Continue shopping</Link></div>}</aside></div>;
}
