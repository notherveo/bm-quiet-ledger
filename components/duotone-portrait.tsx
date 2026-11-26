"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * A team portrait in duotone (CSS filter). Hovering reveals the full color.
 * `seed` picks the photo; `role` is the card's title.
 */
export function DuotonePortrait({
  seed,
  role,
  className,
}: {
  seed: string;
  role: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) observer.disconnect();
        const el = ref.current;
        if (!el) return;
        const timer = setTimeout(() => {
          el.classList.add("duotone-revealed");
        }, 1200);
        return () => clearTimeout(timer);
      },
      { threshold: 0.4 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduced]);
  return (
    <div
      ref={ref}
      className={`duotone-portrait ${className ?? ""}`}
      style={{ backgroundImage: `url(https://picsum.photos/seed/${seed}/400/400)` }}
    >
      <div className="duotone-overlay" />
      <div className="duotone-caption">
        <span className="duotone-role">{role}</span>
      </div>
    </div>
  );
}
