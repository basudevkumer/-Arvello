"use client";

import { useEffect, useState } from "react";

export default function QuantitySelector({ value, defaultValue = 1, min = 1, max = 99, onChange, disabled = false, label = "Quantity", className = "" }) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const quantity = isControlled ? value : internalValue;
  useEffect(() => { if (!isControlled) setInternalValue(defaultValue); }, [defaultValue, isControlled]);
  const updateQuantity = (nextValue) => { const next = Math.min(max, Math.max(min, Number(nextValue) || min)); if (!isControlled) setInternalValue(next); onChange?.(next); };
  return <div className={`grid gap-2 ${className}`}><span className="text-label-md">{label}</span><div className="inline-flex w-fit items-center rounded-md border border-border-strong"><button type="button" onClick={() => updateQuantity(quantity - 1)} disabled={disabled || quantity <= min} className="flex size-11 items-center justify-center text-20 text-text-secondary hover:bg-surface-soft disabled:opacity-50" aria-label="Decrease quantity">−</button><output className="flex min-w-12 justify-center text-label-md" aria-live="polite">{quantity}</output><button type="button" onClick={() => updateQuantity(quantity + 1)} disabled={disabled || quantity >= max} className="flex size-11 items-center justify-center text-20 text-text-secondary hover:bg-surface-soft disabled:opacity-50" aria-label="Increase quantity">+</button></div></div>;
}
