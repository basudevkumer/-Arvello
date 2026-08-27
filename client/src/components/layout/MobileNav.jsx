"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { NAV_LINKS } from "@/components/helper/navbar/navArrObj";
import Container from "@/components/shared/commons/Container";

export default function MobileNav({ cartCount = 0 }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Auto-close the drawer whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open + close on Escape
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* ---------------- Top bar (visible below lg, DesktopNav takes over at lg+) ---------------- */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-surface/90 backdrop-blur-md lg:hidden">
        <Container className="flex items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-1 sm:gap-3">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-icon-primary transition-theme hover:bg-surface-muted active:scale-95"
            >
              <FiMenu size={22} />
            </button>

            {/* Logo — placeholder, swap for real logo/SVG later */}
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-hover text-14 font-extrabold text-text-inverse shadow-sm">
                A
              </span>
              <span className="text-18 font-extrabold tracking-tight text-text-primary sm:text-20">
                Antix
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full text-icon-secondary transition-theme hover:bg-surface-muted active:scale-95"
            >
              <FiSearch size={19} />
            </button>

            <button
              type="button"
              aria-label={`Cart, ${cartCount} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-icon-secondary transition-theme hover:bg-surface-muted active:scale-95"
            >
              <FiShoppingCart size={19} />
              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[8px] font-bold text-text-primary shadow-sm">
                {cartCount}
              </span>
            </button>
          </div>
        </Container>
      </nav>

      {/* ---------------- Backdrop overlay ---------------- */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-overlay-dark transition-opacity duration-300 ease-standard lg:hidden ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* ---------------- Slide-in drawer ---------------- */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-[82%] max-w-xs flex-col bg-surface shadow-xl transition-transform duration-300 ease-standard sm:max-w-sm lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-hover text-14 font-extrabold text-text-inverse shadow-sm">
              A
            </span>
            <span className="text-18 font-extrabold tracking-tight text-text-primary">
              Antix
            </span>
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-icon-secondary transition-theme hover:bg-surface-muted active:scale-95"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="border-b border-border px-5 py-4">
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="relative"
          >
            <FiSearch
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-icon-muted"
              size={16}
            />
            <input
              type="text"
              name="search"
              placeholder="Search for item, etc..."
              className="w-full rounded-full border border-border bg-surface-soft py-2.5 pl-10 pr-4 text-13 text-text-primary placeholder:text-text-muted transition-theme focus:border-primary focus:bg-surface focus:outline-none"
            />
          </form>
        </div>

        {/* Nav links */}
        <ul className="flex-1 overflow-y-auto px-3 py-3">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center rounded-md px-3 py-3 text-14 font-medium transition-theme ${isActive ? "bg-surface-selected text-primary" : "text-text-secondary hover:bg-surface-muted hover:text-primary"}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Drawer footer — account */}
        <div className="border-t border-border px-3 py-3">
          <Link
            href="/account"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 rounded-md px-3 py-3 text-14 font-medium text-text-secondary transition-theme hover:bg-surface-muted hover:text-primary"
          >
            <FiUser size={18} />
            My Account
          </Link>
        </div>
      </aside>
    </>
  );
}
