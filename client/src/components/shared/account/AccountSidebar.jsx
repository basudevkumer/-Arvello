import Link from "next/link";

export default function AccountSidebar({
  links = [],
  activeHref,
  className = "",
}) {
  return (
    <nav
      aria-label="Account navigation"
      className={`grid content-start gap-2 ${className}`}
    >
      <h2 className="mb-2 text-h4">My account</h2>
      {links.map((link) => {
        const active = link.href === activeHref;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`rounded-md px-4 py-3 text-14 font-semibold transition-theme motion-reduce:transition-none ${active ? "bg-surface-selected text-primary" : "text-text-secondary hover:bg-surface-soft hover:text-primary"}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
