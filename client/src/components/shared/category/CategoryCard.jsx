import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
  category,
  name,
  image,
  imageAlt,
  href,
  productCount,
  className = "",
}) {
  const label = name || category;
  return (
    <Link href={href} className={`group block overflow-hidden rounded-lg border border-border bg-surface transition-theme hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none ${className}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-background-muted">
        <Image src={image} alt={imageAlt || label} fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 100vw" className="object-cover transition-transform duration-350 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" />
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <h3 className="text-label-lg text-text-primary">{label}</h3>
        {productCount !== undefined ? <span className="text-caption text-text-tertiary">{productCount} items</span> : null}
      </div>
    </Link>
  );
}
