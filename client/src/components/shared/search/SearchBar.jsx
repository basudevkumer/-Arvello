"use client";

import { useEffect, useId, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ value, defaultValue = "", placeholder = "Search products", onSearch, onChange, className = "" }) {
  const controlled = value !== undefined;
  const inputId = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const query = controlled ? value : internalValue;
  useEffect(() => { if (!controlled) setInternalValue(defaultValue); }, [controlled, defaultValue]);
  const updateValue = (nextValue) => { if (!controlled) setInternalValue(nextValue); onChange?.(nextValue); };
  return <form role="search" onSubmit={(event) => { event.preventDefault(); onSearch?.(query.trim()); }} className={`flex min-h-11 items-center overflow-hidden rounded-full border border-border-strong bg-surface transition-theme focus-within:border-primary focus-within:shadow-sm ${className}`}><label htmlFor={inputId} className="sr-only">Search products</label><FiSearch className="ml-4 shrink-0 text-icon-muted" size={18} aria-hidden="true" /><input id={inputId} name="search" type="search" value={query} onChange={(event) => updateValue(event.target.value)} placeholder={placeholder} className="min-w-0 flex-1 bg-transparent px-3 py-2 text-14 text-text-primary outline-none placeholder:text-text-muted" /></form>;
}
