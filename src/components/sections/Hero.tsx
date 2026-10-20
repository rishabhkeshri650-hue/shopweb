import * as React from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowDownRight, MapPin } from "lucide-react"
import { CircularSeal } from "../ui/Logo"
import { MaskLine, Reveal, EASE } from "../ui/Reveal"
import { shop, stats } from "@/lib/site"

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08])

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pb-10 pt-[124px] sm:pt-[136px] lg:pb-16 lg:pt-[152px]">
      {/* background architecture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_75%_-10%,#F2E7D4_0%,#FAF7F1_55%,#FAF7F1_100%)]" />
        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-ink/[0.045] lg:block" />
        <div className="absolute inset-x-0 top-[62%] hidden h-px bg-ink/[0.045] lg:block" />
      </div>

      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* ---------------- type ---------------- */}
        <div className="lg:col-span-7 lg:pr-6">
          <Reveal y={14} delay={0.05}>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-maroon" />
              <p className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-ink-soft">
                Simri Bakhtiyarpur · Saharsa
              </p>
              <span className="hidden h-px w-10 bg-gold/50 sm:block" />
              <span className="hidden font-mono text-[9.5px] uppercase tracking-[0.3em] text-ink-mute sm:block">
                {shop.tagline}
              </span>
            </div>
          </Reveal>

          <h1 className="mt-7 font-display text-[clamp(2.9rem,7.6vw,6.4rem)] font-medium leading-[0.94] tracking-[-0.035em] text-ink">
            <MaskLine delay={1.05}>Cloth for the</MaskLine>
            <MaskLine delay={1.15}>days you&apos;ll</MaskLine>
            <MaskLine delay={1.25}>
              <span className="italic text-maroon">remember.</span>
            </MaskLine>
          </h1>

          <Reveal delay={1.35} y={18}>
            <p className="mt-7 max-w-[47ch] text-[15.5px] leading-[1.75] text-ink-soft">
              Sarees, suitings, kids’ cloth and menswear on High School Road — a family shop where
              the shelves run floor to ceiling, the colours are sorted by hand, and someone still
              stands with you until the fit is right.
            </p>
          </Reveal>

          <Reveal delay={1.45} y={18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#collections" className="btn btn-dark group w-full justify-center sm:w-auto">
                Explore collections
                <ArrowDownRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  strokeWidth={1.8}
                />
              </a>
              <a href="#visit" className="btn btn-ghost group w-full justify-center sm:w-auto">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.6} />
                Find the shop
              </a>
            </div>
          </Reveal>

          <Reveal delay={1.55} y={16}>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-[26px] leading-none text-ink">{s.value}</p>
                  <p className="mt-2 font-mono text-[8.5px] uppercase leading-relaxed tracking-[0.2em] text-ink-mute">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ---------------- image ---------------- */}
        <div className="lg:col-span-5">
          <motion.div
            className="relative mx-auto max-w-[460px] lg:mr-0"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.05, ease: EASE }}
          >
            {/* gold offset frame */}
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 hidden h-full w-full border border-gold/45 sm:block"
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
              <motion.img
                src="./images/col-sarees.jpg"
                alt="Folded sarees stacked in colour order on the shelves at Shree Keshri Synthetics"
                className="h-full w-full object-cover"
                style={{ y: imgY, scale: imgScale }}
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <p className="max-w-[62%] font-mono text-[9px] uppercase leading-[1.9] tracking-[0.2em] text-paper/85">
                  The saree wall · sorted by hand, restocked weekly
                </p>
                <span className="font-display text-[13px] italic text-paper/90">01 / 03</span>
              </div>
            </div>

            {/* rotating seal */}
            <div className="absolute -left-8 -top-8 hidden text-ink sm:block lg:-left-14 lg:-top-10">
              <CircularSeal size={128} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
