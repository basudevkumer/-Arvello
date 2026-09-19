import { forwardRef, useId } from "react";

const Radio = forwardRef(function Radio({ id, label, description, error, className = "", "aria-label": ariaLabel, ...props }, ref) {
  const generatedId = useId();
  const radioId = id || props.name || generatedId;
  const messageId = `${radioId}-message`;
  return <label htmlFor={radioId} className={`flex cursor-pointer items-start gap-3 ${props.disabled ? "cursor-not-allowed opacity-60" : ""} ${className}`}><input ref={ref} id={radioId} type="radio" className="mt-1 size-4 accent-primary" aria-label={label ? undefined : ariaLabel} aria-invalid={Boolean(error)} aria-describedby={error ? messageId : undefined} {...props} /><span className="grid gap-1"><span className="text-label-md text-text-primary">{label}</span>{description ? <span className="text-body-sm text-text-secondary">{description}</span> : null}{error ? <span id={messageId} className="text-body-sm text-error">{error}</span> : null}</span></label>;
});

export default Radio;
