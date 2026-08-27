"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import Container from "@/components/shared/commons/Container";

/**
 * Add / remove / reorder nav items here — the UI updates automatically.
 * Update the `href` values once the real routes exist.
 */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Deal", href: "/deal" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export default function DesktopNav({ cartCount = 0 }) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 hidden w-full border-b border-border bg-surface/90 backdrop-blur-md lg:block">
      <Container className="flex items-center justify-between gap-8 py-4">
        {/* ---------------- Logo (placeholder — swap for real logo/SVG later) ---------------- */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-hover text-16 font-extrabold text-text-inverse shadow-sm transition-theme group-hover:scale-105 group-hover:shadow-md">
            A
          </span>
          <span className="text-20 font-extrabold tracking-tight text-text-primary">
            Antix
          </span>
        </Link>

        {/* ---------------- Primary nav links ---------------- */}
        <ul className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative inline-flex items-center px-3 py-2 text-14 font-medium transition-theme after:absolute after:inset-x-3 after:-bottom-[1px] after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-theme after:content-[''] ${isActive ? "text-primary after:scale-x-100" : "text-text-secondary hover:text-primary hover:after:scale-x-100"}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ---------------- Search + icons ---------------- */}
        <div className="flex shrink-0 items-center gap-3">
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="hidden xl:block"
          >
            <input
              type="text"
              name="search"
              placeholder="Search for item, etc..."
              className="w-56 rounded-full border border-border bg-surface-soft px-4 py-2 text-13 text-text-primary placeholder:text-text-muted transition-theme focus:w-72 focus:border-primary focus:bg-surface focus:shadow-sm focus:outline-none"
            />
          </form>

          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-icon-secondary transition-theme hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-text-inverse hover:shadow-md active:translate-y-0 active:scale-95"
          >
            <FiSearch size={17} />
          </button>

          <button
            type="button"
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-icon-secondary transition-theme hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-text-inverse hover:shadow-md active:translate-y-0 active:scale-95"
          >
            <FiUser size={17} />
          </button>

          <button
            type="button"
            aria-label={`Cart, ${cartCount} items`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border text-icon-secondary transition-theme hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-text-inverse hover:shadow-md active:translate-y-0 active:scale-95"
          >
            <FiShoppingCart size={17} />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-text-primary shadow-sm">
              {cartCount}
            </span>
          </button>
        </div>
      </Container>
    </nav>
  );
}
