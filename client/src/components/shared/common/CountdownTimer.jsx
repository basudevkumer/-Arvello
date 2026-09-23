"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer({ endAt }) {
  const [remaining, setRemaining] = useState(() => endAt ? Math.max(0, Math.floor((new Date(endAt).getTime() - Date.now()) / 1000)) : 12 * 86400 + 5 * 3600 + 14 * 60 + 20);
  useEffect(() => {
    const timer = setInterval(
      () => setRemaining((value) => (value > 0 ? value - 1 : 0)),
      1000,
    );
    return () => clearInterval(timer);
  }, []);
  const parts = [
    Math.floor(remaining / 86400),
    Math.floor((remaining % 86400) / 3600),
    Math.floor((remaining % 3600) / 60),
    remaining % 60,
  ];
  return (
    <div className="flex items-center gap-2" aria-label="Offer countdown">
      <span className="hidden text-caption text-text-secondary sm:inline">
        Offer Ends In
      </span>
      {parts.map((part, index) => (
        <div
          className="min-w-11 rounded-md bg-background-muted px-2 py-1 text-center"
          key={index}
        >
          <strong className="block text-14 text-primary">
            {String(part).padStart(2, "0")}
          </strong>
          <span className="text-10 text-text-muted">
            {["Days", "Hours", "Mins", "Secs"][index]}
          </span>
        </div>
      ))}
    </div>
  );
}
