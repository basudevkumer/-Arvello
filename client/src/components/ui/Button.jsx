import Spinner from "./Spinner";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  ...props
}) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
  }[variant] || "btn-primary";
  const sizeClass = {
    sm: "min-h-9 px-4 text-13",
    md: "",
    lg: "min-h-12 px-6 text-16",
  }[size];
  return (
    <button
      type={type}
      className={`btn ${variantClass} ${sizeClass} disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none ${className}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <Spinner size="sm" label="" className="mr-2" /> : null}
      {children}
    </button>
  );
}
