import { forwardRef, useId } from "react";

const Select = forwardRef(function Select({ id, label, name, options = [], placeholder, error, helperText, className = "", required = false, children, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedby, ...props }, ref) {
  const generatedId = useId();
  const selectId = id || name || generatedId;
  const messageId = `${selectId}-message`;
  const describedBy = [ariaDescribedby, error || helperText ? messageId : null].filter(Boolean).join(" ") || undefined;
  return <div className="grid gap-2">{label ? <label htmlFor={selectId} className="text-label-md text-text-primary">{label}{required ? <span className="ml-1 text-error" aria-hidden="true">*</span> : null}</label> : null}<select ref={ref} id={selectId} name={name} required={required} aria-label={label ? undefined : ariaLabel} aria-labelledby={ariaLabelledby} aria-invalid={Boolean(error)} aria-describedby={describedBy} className={`min-h-11 w-full rounded-md border bg-surface px-4 text-14 text-text-primary transition-theme ${error ? "border-error" : "border-border-strong"} disabled:bg-surface-disabled disabled:text-text-disabled ${className}`} {...props}>{placeholder ? <option value="">{placeholder}</option> : null}{children || options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select>{error || helperText ? <p id={messageId} className={`text-body-sm ${error ? "text-error" : "text-text-secondary"}`}>{error || helperText}</p> : null}</div>;
});

export default Select;
