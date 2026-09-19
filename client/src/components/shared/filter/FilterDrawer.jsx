"use client";

import { useEffect, useId, useRef } from "react";
import { FiX } from "react-icons/fi";

export default function FilterDrawer({ open = false, onClose, title = "Filters", children, className = "" }) {
  const titleId = useId();
  const drawerRef = useRef(null);
  const restoreFocusRef = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    restoreFocusRef.current = document.activeElement;
    const drawer = drawerRef.current;
    const selector = "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
    const handleKeyDown = (event) => { if (event.key === "Escape") { onClose?.(); return; } if (event.key !== "Tab" || !drawer) return; const focusable = [...drawer.querySelectorAll(selector)]; if (!focusable.length) return; const first = focusable[0]; const last = focusable[focusable.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    drawer?.querySelector(selector)?.focus();
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", handleKeyDown); restoreFocusRef.current?.focus?.(); };
  }, [open, onClose]);
  if (!open) return null;
  return <div className="fixed inset-0 z-50" role="presentation"><button type="button" className="absolute inset-0 size-full cursor-default bg-overlay-dark" aria-label="Close filters" onClick={onClose} /><aside ref={drawerRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className={`absolute inset-y-0 right-0 z-10 flex w-full max-w-sm flex-col bg-surface shadow-xl ${className}`}><div className="flex items-center justify-between border-b border-border p-5"><h2 id={titleId} className="text-h4">{title}</h2><button type="button" onClick={onClose} aria-label="Close filters" className="rounded-sm p-2 text-text-secondary hover:bg-surface-soft"><FiX size={20} aria-hidden="true" /></button></div><div className="flex-1 overflow-y-auto p-5">{children}</div></aside></div>;
}
