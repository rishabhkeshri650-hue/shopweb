# Project — Shree Keshri Synthetics website

Owner: Ramesh Keshri. Shop: High School Road, Simri Bakhtiyarpur, Saharsa district, Bihar.
Exact location: 25.720689, 86.595200 (25°43'14.48"N 86°35'42.72"E).
Phone 7562886262 · shreekeshrisynthetics@gmail.com · IG/FB `rameshkeshrisbv19` · X `@rameshkeshri3`.

## Conventions
- Design language: warm ivory paper (#FAF7F1), near-black text (#0B0A08), maroon (#5C1220),
  gold (#9A7B3F). Serif display = Playfair Display; body = Inter; micro-labels = JetBrains Mono.
- Everything is editorial: mono eyebrows with section numbers (01–05), hairline rules,
  generous whitespace, no gradients-for-the-sake-of-it, no emoji icons (lucide only).
- Motion: framer-motion, 0.9s reveals with ease [0.22,0.61,0.36,1]; every animation must
  respect `prefers-reduced-motion`.
- Images live in `public/images`; derived crops are pre-graded (warm, slight contrast) and
  must never show the phone watermark.
- Business copy is written to be editable — no invented years, founding dates or statistics.

## Stack
Vite + React 18 + TS + Tailwind 3.4 + framer-motion + lucide-react. Alias `@` → `src`.
`src/lib/site.ts` is the single source of truth for contact details and collections.
