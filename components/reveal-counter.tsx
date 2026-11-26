"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * A number that counts up from zero as the section scrolls into view.
 * `value` is the final number; `prefix` and `suffix` are optional (e.g. "$", "%").
 */
export function RevealCounter({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (reduced || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const el = ref.current;
          if (!el) return;
          let current = 0;
          const timer = setInterval(() => {
            current += 1;
            setDisplay(current);
            if (current >= value) {
              setDisplay(value);
              clearInterval(timer);
            }
          }, 20);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduced, value]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
