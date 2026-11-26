"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * A single character that types in as the page scrolls into view.
 * `delay` is in seconds.
 */
export function Typewriter({
  char,
  delay = 0,
  className,
}: {
  char: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const el = ref.current;
          if (!el) return;
          const timer = setTimeout(() => {
            el.textContent = char;
          }, delay * 1000);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reduced, delay, char]);
  return <span ref={ref} className={className} />;
}

/**
 * A whole word that types in, letter by letter, as the page scrolls into view.
 */
export function TypewriterWord({
  word,
  delay = 0,
  className,
}: {
  word: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={className}>
      {word.split("").map((char, i) => (
        <Typewriter
          key={char}
          char={char}
          delay={delay + i * 0.06}
        />
      ))}
    </span>
  );
}

/**
 * A phrase typed in letter by letter, as the page scrolls into view.
 */
export function TypewriterPhrase({
  phrase,
  delay = 0,
  className,
}: {
  phrase: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={className}>
      {phrase.split("").map((char, i) => (
        <Typewriter
          key={char}
          char={char}
          delay={delay + i * 0.05}
        />
      ))}
    </span>
  );
}
