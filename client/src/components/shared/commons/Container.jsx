/**
 * Reusable width-constrained wrapper.
 * Plain server component — no "use client" needed, no hooks used.
 *
 * Props:
 * - children   : content to render inside (required)
 * - as         : HTML tag / component to render as (default: "div")
 * - maxWidth   : CSS max-width value (default: "1320px")
 * - noPadding  : disable the built-in responsive horizontal padding (default: false)
 * - className  : extra Tailwind classes, merged in after the defaults
 */
export default function Container({
  children,
  as: Tag = "div",
  maxWidth = "1320px",
  noPadding = false,
  className = "",
}) {
  return (
    <Tag
      className={`mx-auto w-full ${
        noPadding ? "" : "px-6 sm:px-8 lg:px-10"
      } ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </Tag>
  );
}
