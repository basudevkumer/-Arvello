export default function Container({ children, as: Tag = "div", maxWidth = "1320px", noPadding = false, className = "" }) {
  return <Tag className={`mx-auto w-full ${noPadding ? "" : "px-6 sm:px-8 lg:px-10"} ${className}`} style={{ maxWidth }}>{children}</Tag>;
}
