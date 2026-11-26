"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/who-we-serve", label: "Who we serve" },
  { href: "/process", label: "Process" },
  { href: "/team", label: "Team" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="/" className="logo">
        <span>Quiet</span>
        <span>Ledger</span>
        <span>
          <sup>®</sup>
        </span>
      </a>
      <nav className="desktop-nav">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
      <motion.div
        className="mobile-menu"
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
