export default function Badge({
  children,
  variant = "default",
  className = "",
}) {
  const variantClass = {
    default: "bg-background-muted text-text-secondary",
    sale: "badge-sale",
    success: "badge-success",
    warning: "bg-accent-light text-text-primary",
    error: "bg-background-muted text-error",
  }[variant];
  return (
    <span className={`badge ${variantClass} ${className}`}>{children}</span>
  );
}
