export default function Skeleton({ as: Tag = "div", width, height, className = "", ...props }) {
  return <Tag aria-hidden="true" className={`animate-pulse rounded-md bg-background-muted motion-reduce:animate-none ${className}`} style={{ width, height }} {...props} />;
}
