"use client";

import { FiHeart } from "react-icons/fi";

export default function WishlistButton({ active = false, onToggle, disabled = false, label, className = "" }) {
  return <button type="button" onClick={onToggle} disabled={disabled} aria-pressed={active} aria-label={label || (active ? "Remove from wishlist" : "Add to wishlist")} className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-primary transition-theme hover:border-primary hover:bg-primary hover:text-text-inverse disabled:opacity-50 motion-reduce:transition-none ${className}`}><FiHeart size={18} className={active ? "fill-current" : ""} aria-hidden="true" /></button>;
}
