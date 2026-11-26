import * as React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/app/globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "QUIET LEDGER CAPITAL · Independent Wealth Management",
  description: "A boutique independent wealth-management / RIA firm. Old money, new instruments.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} bg-[#F4F1EA] text-[#141B2D] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
