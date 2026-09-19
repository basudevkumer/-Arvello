export default function Spinner({ size = "md", label = "Loading", className = "" }) {
  const sizeClass = { sm: "size-4 border-2", md: "size-6 border-2", lg: "size-8 border-2" }[size];
  return <span className={`inline-block animate-spin rounded-full border-primary border-r-transparent motion-reduce:animate-none ${sizeClass} ${className}`} role="status" aria-label={label || undefined} />;
}
