import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CategoryTile({ category, className = "" }) {
  return <Link href={`/shop?category=${category.slug}`} className={`group relative isolate flex min-h-64 overflow-hidden rounded-2xl bg-primary ${className}`}><Image src={category.image} alt={`${category.name} furniture`} fill sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw" className="-z-20 object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" /><div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent" /><div className="mt-auto flex w-full items-end justify-between gap-4 p-5 text-text-inverse sm:p-6"><div><h3 className="text-h4 text-text-inverse">{category.name}</h3><p className="mt-1 text-body-sm text-white/75">{category.productCount} Products</p></div><span className="inline-flex translate-y-2 items-center gap-2 text-label-md opacity-0 transition-all duration-250 group-hover:translate-y-0 group-hover:opacity-100">Shop Now <FiArrowRight /></span></div></Link>;
}
