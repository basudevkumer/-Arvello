"use client";

import { useEffect, useId, useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function CouponInput({ value, defaultValue = "", onApply, loading = false, error, className = "" }) {
  const inputId = useId();
  const controlled = value !== undefined;
  const [internalCode, setInternalCode] = useState(value ?? defaultValue);
  const code = controlled ? value : internalCode;
  useEffect(() => { if (!controlled) setInternalCode(defaultValue); }, [controlled, defaultValue]);
  const updateCode = (nextCode) => { if (!controlled) setInternalCode(nextCode); };
  return <form className={`grid gap-3 ${className}`} onSubmit={(event) => { event.preventDefault(); onApply?.(code.trim()); }}><div className="flex items-end gap-2"><Input id={inputId} name="coupon" label="Coupon code" value={code} onChange={(event) => updateCode(event.target.value)} error={error} className="min-w-0" /><Button type="submit" size="sm" loading={loading} disabled={!code.trim()}>Apply</Button></div></form>;
}
