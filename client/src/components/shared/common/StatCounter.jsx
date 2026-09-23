"use client";

import { useEffect, useRef, useState } from "react";

const ANIMATION_DURATION_MS = 1800;
const VISIBILITY_THRESHOLD = 0.35;

const formatValue = (value) => value.toLocaleString("en-US");

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * A single animated statistic.
 *
 * The count-up runs exactly once, the first time the number scrolls into
 * view, then the observer disconnects so repeat scroll passes never restart
 * it. Users who prefer reduced motion see the final value immediately.
 */
export default function StatCounter({
  value,
  suffix = "",
  label,
  description,
  className = "",
}) {
  const containerRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof value !== "number") return undefined;

    if (prefersReducedMotion()) {
      const timeoutId = window.setTimeout(() => setDisplayValue(value), 0);
      return () => window.clearTimeout(timeoutId);
    }

    let frameId = null;
    let startedAt = null;

    const step = (timestamp) => {
      if (startedAt === null) startedAt = timestamp;
      const progress = Math.min(
        (timestamp - startedAt) / ANIMATION_DURATION_MS,
        1,
      );
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (!isVisible || hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;
        observer.disconnect();
        frameId = requestAnimationFrame(step);
      },
      { threshold: VISIBILITY_THRESHOLD },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <div ref={containerRef} className={`text-center ${className}`}>
      <p className="text-h2 tabular-nums text-text-inverse">
        <span aria-hidden="true">
          {formatValue(displayValue)}
          {suffix}
        </span>
        <span className="sr-only">
          {formatValue(value)}
          {suffix}
        </span>
      </p>
      <p className="mt-3 text-label-md text-accent-light">{label}</p>
      {description ? (
        <p className="mt-2 text-body-sm text-green-100/75">{description}</p>
      ) : null}
    </div>
  );
}
