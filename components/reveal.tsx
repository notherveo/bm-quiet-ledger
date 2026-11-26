"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * A single text reveal: the copy types in like a fountain-pen entry.
 * `delay` is in seconds; `speed` is characters per second.
 */
export function Reveal({
  text,
  delay = 0,
  speed = 12,
  className,
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const chars = el.textContent || "";
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      el.textContent = chars.slice(0, i);
      if (i >= chars.length) clearInterval(timer);
    }, 1000 / speed);
    return () => clearInterval(timer);
  }, [reduced, speed, chars]);
  return <span ref={ref} className={className} />;
}

/**
 * A section's opening line: the words type in, one by one, as the section
 * scrolls into view.
 */
export function SectionReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const el = ref.current;
          if (!el) return;
          const chars = el.textContent || "";
          let i = 0;
          const timer = setInterval(() => {
            i += 1;
            el.textContent = chars.slice(0, i);
            if (i >= chars.length) clearInterval(timer);
          }, 25);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduced]);
  return <p ref={ref} className={className} />;
}
