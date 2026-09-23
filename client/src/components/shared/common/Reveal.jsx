"use client";

import { useEffect, useRef, useState } from "react";

const REVEAL_ROOT_MARGIN = "0px 0px -80px 0px";
const ALREADY_ON_SCREEN_RATIO = 0.9;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Fades and lifts its children into view the first time they are scrolled
 * to, using IntersectionObserver.
 *
 * Accessibility/robustness contract:
 * - Server-rendered markup and the first client paint are fully visible, so
 *   the page is complete with JavaScript disabled or before hydration.
 * - Only content still below the fold is armed for animation, so nothing on
 *   screen can flash or start hidden.
 * - `prefers-reduced-motion` and missing IntersectionObserver leave the
 *   content permanently visible.
 * - Uses `threshold: 0`, so elements taller than the viewport still reveal.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}) {
  const [isWaiting, setIsWaiting] = useState(false);
  const containerRef = useRef(null);
  const hasRevealedRef = useRef(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    if (prefersReducedMotion()) return undefined;
    if (typeof IntersectionObserver === "undefined") return undefined;

    const { top } = node.getBoundingClientRect();
    if (top < window.innerHeight * ALREADY_ON_SCREEN_RATIO) return undefined;

    setIsWaiting(true);

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (!isVisible || hasRevealedRef.current) return;
        hasRevealedRef.current = true;
        setIsWaiting(false);
        observer.disconnect();
      },
      { threshold: 0, rootMargin: REVEAL_ROOT_MARGIN },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={containerRef}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-[opacity,transform] duration-700 ease-standard motion-reduce:transition-none ${
        isWaiting ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
