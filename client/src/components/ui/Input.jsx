import { forwardRef, useId } from "react";

const Input = forwardRef(function Input({ id, label, name, error, helperText, className = "", required = false, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, ...props }, ref) {
  const generatedId = useId();
  const inputId = id || name || generatedId;
  const messageId = `${inputId}-message`;
  const describedBy = [ariaDescribedby, error || helperText ? messageId : null].filter(Boolean).join(" ") || undefined;
  return <div className="grid gap-2">{label ? <label htmlFor={inputId} className="text-label-md text-text-primary">{label}{required ? <span className="ml-1 text-error" aria-hidden="true">*</span> : null}</label> : null}<input ref={ref} id={inputId} name={name} required={required} aria-label={label ? undefined : ariaLabel} aria-labelledby={ariaLabelledby} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={`min-h-11 w-full rounded-md border bg-surface px-4 text-14 text-text-primary transition-theme placeholder:text-text-muted ${error ? "border-error" : "border-border-strong"} disabled:bg-surface-disabled disabled:text-text-disabled ${className}`} {...props} />{error || helperText ? <p id={messageId} className={`text-body-sm ${error ? "text-error" : "text-text-secondary"}`}>{error || helperText}</p> : null}</div>;
});

export default Input;
