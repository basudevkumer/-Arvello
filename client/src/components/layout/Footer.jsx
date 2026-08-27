import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
  FaHeart,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Container from "@/components/shared/commons/Container";

/**
 * Edit these to change footer content — no JSX touching required.
 */
const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

const CUSTOMER_CARE_LINKS = [
  { label: "Track Order", href: "/track-order" },
  { label: "Returns & Refunds", href: "/returns-refunds" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "FAQ", href: "/faq" },
  { label: "Support", href: "/support" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "Pinterest", href: "https://pinterest.com", icon: FaPinterestP },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
];

const CONTACT_INFO = {
  address: "House 12, Road 8, Dhanmondi, Dhaka, Bangladesh",
  phone: "+880 1234 567890",
  email: "hello@antix.com",
};

// Plain server component — no hooks/interactivity needed, so no "use client".
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-primary text-green-100">
      <Container maxWidth="1280px" className="py-12 sm:py-14">
        <div
          className="grid grid-cols-1 gap-10 sm:grid-cols-2
            lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8"
        >
          {/* ---------------- Brand ---------------- */}
          <div>
            <Link href="/" className="group flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg
                  bg-gradient-to-br from-accent to-accent-hover text-16 font-extrabold
                  text-text-inverse shadow-sm transition-theme group-hover:scale-105"
              >
                A
              </span>
              <span className="text-20 font-extrabold tracking-tight text-text-inverse">
                Antix
              </span>
            </Link>

            <p className="mt-4 max-w-[24ch] text-14 leading-relaxed text-green-100/75">
              Better Furniture, Better Living.
            </p>

            <ul className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full
                      bg-green-800 text-text-inverse transition-theme
                      hover:-translate-y-0.5 hover:bg-accent hover:text-primary hover:shadow-md"
                  >
                    <Icon size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- Quick Links ---------------- */}
          <div>
            <h3 className="text-16 font-bold text-text-inverse">Quick Links</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-14 text-green-100/75 transition-theme hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- Customer Care ---------------- */}
          <div>
            <h3 className="text-16 font-bold text-text-inverse">
              Customer Care
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {CUSTOMER_CARE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-14 text-green-100/75 transition-theme hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------------- Contact Us ---------------- */}
          <div>
            <h3 className="text-16 font-bold text-text-inverse">Contact Us</h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-accent" size={16} />
                <span className="text-14 text-green-100/75">
                  {CONTACT_INFO.address}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-accent" size={16} />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-14 text-green-100/75 transition-theme hover:text-accent"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-accent" size={16} />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-14 text-green-100/75 transition-theme hover:text-accent"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------------- Bottom bar ---------------- */}
        <div
          className="mt-10 flex flex-col items-center gap-3 border-t border-divider-inverse
            pt-6 text-center sm:mt-12 sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="text-13 text-green-100/70">
            © {year} Antix. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5 text-13 text-green-100/70">
            Crafted with <FaHeart className="text-accent" size={12} /> for
            Better Living
          </p>
        </div>
      </Container>
    </footer>
  );
}
