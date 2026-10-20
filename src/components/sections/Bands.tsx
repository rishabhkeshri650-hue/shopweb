import * as React from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Marquee } from "../ui/Marquee"
import { Reveal } from "../ui/Reveal"
import { shop } from "@/lib/site"

export function Ticker() {
  return (
    <div className="relative border-y border-ink bg-ink py-4 text-paper">
      <Marquee
        items={[
          "Sarees",
          "Saree readymades",
          "Suits",
          "Kurtis",
          "Shirts",
          "T-shirts",
          "Jeans",
          "Dupattas",
          "Blouse pieces",
          "Fabric by the metre",
        ]}
        speed={46}
      />
      <span className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
      <span className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent" />
    </div>
  )
}

export function QuoteBand() {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", reduce ? "-8%" : "8%"])

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-maroon-deep text-paper">
      <motion.img
        src="./images/shop-depth.jpg"
        alt=""
        aria-hidden="true"
        style={{ y }}
        className="absolute inset-0 -z-10 h-[116%] w-full object-cover opacity-[0.22]"
        loading="lazy"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-maroon-deep via-maroon-deep/85 to-maroon-deep/40" />

      <div className="container-x py-24 lg:py-32">
        <div className="max-w-[860px]">
          <Reveal y={12}>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-gold-light/80">
              02 — A note from the counter
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-8 max-w-[19ch] font-display text-[clamp(2rem,4.8vw,4rem)] leading-[1.05] tracking-[-0.03em] text-paper">
              The shop is small.
              <br />
              The <span className="italic text-gold-light">choice</span> is not.
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-[46ch] text-[14px] leading-[1.85] text-paper/65">
              Floor to ceiling, wall to wall — the stock is deep because the occasions are endless.
              A wedding in the family, a first day at college, a Tuesday that needs a new shirt.
              Everything is here, and nothing leaves the counter unchecked.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-gold/60" />
              <p className="font-mono text-[9.5px] uppercase tracking-[0.26em] text-paper/70">
                {shop.owner} · Owner
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
