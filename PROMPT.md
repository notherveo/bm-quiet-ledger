Build a complete, production-quality multi-page Next.js (App Router) website — a boutique **independent wealth-management / RIA firm**. The feeling: "old money, new instruments" — restrained editorial luxury, close to a private-bank annual report.

## Routes (all implemented + linked from nav)
`/`, `/philosophy`, `/who-we-serve`, `/process`, `/team`, `/insights`, `/contact`

## Design language
- Palette: bone white `#F4F1EA`, ink navy `#141B2D`, oxidized brass accent `#9C7A3C`, one muted sage for data.
- Type: high-contrast serif display + a precise grotesk for body/numbers. Tabular numerals for figures.
- Layout: asymmetric 12-column grid, generous whitespace, hairline rules, numbered sections in the margin like a prospectus.

## Motion language (signature)
- **"Ledger reveal"**: figures and philosophy statements type in like a fountain-pen entry (your own typewriter/split component).
- **Interactive "Your Next 20 Years"** planning visual: the visitor enters an age range + a goal; a long-horizon allocation chart animates (SVG). Clearly mark it ILLUSTRATIVE and include a disclosure note — not advice.
- **Duotone team portraits** (CSS filter) that turn full color on hover.

Write: `components/reveal.tsx`, `components/typewriter.tsx`, `components/allocation-chart.tsx`, `components/duotone-portrait.tsx`, `components/reveal-counter.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`.

## Content — fictional firm "QUIET LEDGER CAPITAL"
- `/` — restrained hero; philosophy statement; "who we serve" teaser; process overview; the "Your Next 20 Years" visual; insights teaser; contact CTA.
- `/philosophy` — investment philosophy, principles (numbered), disclosure block.
- `/who-we-serve` — client archetypes (founders, retirees, families, institutions) as cards.
- `/process` — how onboarding works, step by step.
- `/team` — advisors with duotone portraits, roles, credentials (clearly fictional).
- `/insights` — a filterable list of market-commentary articles (cards; article stub pages are optional).
- `/contact` — schedule-a-conversation form (name / email / phone / approximate assets band / message) with validation.

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`
- NO 3D/WebGL/map libraries. Do NOT import `three`, `@react-three/*`, `mapbox-gl`, `maplibre-gl`, `d3`, etc. (not installed). Build any "3D"/interactive visuals with CSS 3D transforms, inline SVG, gradients, and motion.

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` -> `{ Button }`
- `@/components/ui/card` -> `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` -> `{ Badge }`
- `@/components/ui/input` -> `{ Input }`
- `@/components/ui/label` -> `{ Label }`
Everything else you MUST write yourself under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1. (A dynamic route page with `generateStaticParams`/`generateMetadata` stays a SERVER component; put interactive UI in `"use client"` children.)
2. Icons are components: `<ArrowUpRight className="size-4" />`. Never `{icon.size}`. JSX component names MUST be Capitalized (never `<icon />`).
3. Shared chrome (header/nav, footer) lives in `app/layout.tsx`, rendered EXACTLY once; pages must NOT render it.
4. Import every symbol you use; no unused imports; no `any`; type props explicitly.
5. Photos: plain `<img loading="lazy" alt="..." className="... object-cover">`; use `https://picsum.photos/seed/<unique-slug>/<w>/<h>`; graphics via CSS gradients / inline SVG. No empty src.
6. Respect reduced motion (`useReducedMotion()`); skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy (fictional business). No lorem ipsum / TODO / sample text.
8. Responsive mobile-first; never overflow horizontally.
9. Clearly label testimonials, results, figures, and imagery as illustrative demo content. Use a FICTIONAL business name + sample contact details; never present invented credentials, results, certifications, or reviews as verified facts.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="...">...</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route, every component, and any `lib/*` data module you reference.
