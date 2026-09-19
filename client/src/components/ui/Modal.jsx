"use client";
import { useEffect, useId, useRef } from "react";
import { FiX } from "react-icons/fi";

export default function Modal({ open = false, onClose, title = "Dialog", children, className = "" }) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const restoreFocusRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    restoreFocusRef.current = document.activeElement;
    const dialog = dialogRef.current;
    const focusableSelector = "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
    const focusInitialElement = () => { const firstFocusable = dialog?.querySelector(focusableSelector); (firstFocusable || dialog)?.focus(); };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") { onClose?.(); return; }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = [...dialog.querySelectorAll(focusableSelector)];
      if (!focusable.length) { event.preventDefault(); dialog.focus(); return; }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    focusInitialElement();
    return () => { document.removeEventListener("keydown", handleKeyDown); document.body.style.overflow = previousOverflow; restoreFocusRef.current?.focus?.(); };
  }, [open, onClose]);

  if (!open) return null;
  return <div className="fixed inset-0 z-50 grid place-items-center p-4" role="presentation"><button type="button" className="absolute inset-0 size-full cursor-default bg-overlay-dark" aria-label="Close dialog" onClick={onClose} /><section ref={dialogRef} role="dialog" tabIndex={-1} aria-modal="true" aria-labelledby={titleId} className={`relative z-10 max-h-[min(720px,calc(100vh-2rem))] w-full max-w-lg overflow-y-auto rounded-lg bg-surface p-6 shadow-xl sm:p-8 ${className}`}><div className="mb-6 flex items-start justify-between gap-4"><h2 id={titleId} className="text-h4">{title}</h2><button type="button" onClick={onClose} className="rounded-sm p-1 text-text-secondary transition-theme hover:bg-background-soft hover:text-text-primary motion-reduce:transition-none" aria-label="Close dialog"><FiX size={20} aria-hidden="true" /></button></div>{children}</section></div>;
}
