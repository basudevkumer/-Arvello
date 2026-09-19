import Link from "next/link";

export default function Breadcrumb({ items = [], className = "" }) {
  return <nav aria-label="Breadcrumb" className={className}><ol className="flex flex-wrap items-center gap-2 text-13 text-text-secondary">{items.map((item, index) => { const isCurrent = index === items.length - 1; return <li key={`${item.label}-${index}`} className="flex items-center gap-2">{index > 0 ? <span aria-hidden="true">/</span> : null}{isCurrent || !item.href ? <span aria-current={isCurrent ? "page" : undefined} className={isCurrent ? "font-semibold text-text-primary" : undefined}>{item.label}</span> : <Link href={item.href} className="transition-theme hover:text-primary">{item.label}</Link>}</li>; })}</ol></nav>;
}
