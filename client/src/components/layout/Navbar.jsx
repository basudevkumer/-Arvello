import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

/**
 * Both DesktopNav and MobileNav already carry their own responsive
 * visibility classes (`hidden lg:flex` / `flex lg:hidden`), so we mount
 * both here and let CSS media queries decide which one is visible.
 *
 * Why not conditional JS rendering (e.g. a useState + resize listener)?
 * - No hydration mismatch: server and client render the same markup.
 * - No flash of the wrong nav on load, no JS needed to pick the right one.
 * - This is the standard Next.js / Tailwind pattern for breakpoint-based UI.
 */
export default function Navbar({ cartCount = 0 }) {
  return (
    <>
      <DesktopNav cartCount={cartCount} />
      <MobileNav cartCount={cartCount} />
    </>
  );
}