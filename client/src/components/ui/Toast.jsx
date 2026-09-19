"use client";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function Toast({ open = true, message, title, variant = "default", duration = 4000, onClose, className = "" }) {
  useEffect(() => { if (!open || !duration || !onClose) return undefined; const timeout = window.setTimeout(onClose, duration); return () => window.clearTimeout(timeout); }, [duration, onClose, open]);
  if (!open) return null;
  const tone = { default: "border-border bg-surface", success: "border-success bg-primary-light", error: "border-error bg-background-muted", warning: "border-accent bg-accent-light" }[variant];
  return <div className={`flex items-start gap-4 rounded-md border p-4 shadow-md ${tone} ${className}`} role={variant === "error" ? "alert" : "status"}><div className="min-w-0 flex-1">{title ? <p className="text-label-md">{title}</p> : null}<p className="text-body-sm text-text-secondary">{message}</p></div>{onClose ? <button type="button" onClick={onClose} className="rounded-sm p-1 text-text-secondary transition-theme hover:bg-background-soft hover:text-text-primary motion-reduce:transition-none" onKeyDown={(event) => { if (event.key === "Escape") onClose(); }} aria-label="Dismiss notification"><FiX size={18} aria-hidden="true" /></button> : null}</div>;
}
