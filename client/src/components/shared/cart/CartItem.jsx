"use client";

import Image from "next/image";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import PriceTag from "@/components/ui/PriceTag";

export default function CartItem({ item, currency = "৳", onUpdateQuantity, onRemove, className = "" }) {
  const quantity = item.quantity || 1;
  return <li className={`flex gap-3 border-b border-border pb-5 ${className}`}><div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-background-muted">{item.image ? <Image src={item.image} alt={item.imageAlt || item.name} fill sizes="80px" className="object-cover" /> : null}</div><div className="min-w-0 flex-1"><p className="product-name line-clamp-2">{item.name}</p><PriceTag price={item.price} currency={currency} className="mt-1" /><div className="mt-3 flex items-center justify-between gap-2"><div className="inline-flex items-center rounded-md border border-border-strong"><button type="button" onClick={() => onUpdateQuantity?.(item, Math.max(1, quantity - 1))} aria-label={`Decrease ${item.name} quantity`} className="flex size-8 items-center justify-center text-text-secondary hover:bg-surface-soft"><FiMinus size={14} aria-hidden="true" /></button><span className="min-w-8 text-center text-caption" aria-live="polite">{quantity}</span><button type="button" onClick={() => onUpdateQuantity?.(item, quantity + 1)} aria-label={`Increase ${item.name} quantity`} className="flex size-8 items-center justify-center text-text-secondary hover:bg-surface-soft"><FiPlus size={14} aria-hidden="true" /></button></div><button type="button" onClick={() => onRemove?.(item)} aria-label={`Remove ${item.name} from cart`} className="p-2 text-text-secondary hover:text-error"><FiTrash2 size={16} aria-hidden="true" /></button></div></div></li>;
}
