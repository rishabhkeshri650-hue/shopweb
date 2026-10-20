import * as React from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Marquee } from "../ui/Marquee"
import { Reveal } from "../ui/Reveal"
import { shop } from "@/lib/site"

export function Ticker() {
  return (
    <div className="relative border-y border-line bg-paper-2 py-4 text-ink">
      <Marquee
        items={[
          "Sarees",
          "Suitings",
          "Kids cloth",
          "Readymades",
          "Shirts",
          "Trousers",
          "Jeans",
          "Dupattas",
          "Blouse pieces",
          "Fabric by the metre",
        ]}
        speed={46}
      />
      <span className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper-2 to-transparent" />
      <span className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper-2 to-transparent" />
    </div>
  )
}

export function QuoteBand() {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", reduce ? "-8%" : "8%"])

  return (
    <section
      ref={ref}
      id="the-shop"
      className="relative isolate scroll-mt-24 overflow-hidden bg-maroon-deep text-paper"
    >
      <motion.img
        src="./images/shop-depth.jpg"
        alt=""
        aria-hidden="true"
        style={{ y }}
        className="absolute inset-0 -z-10 h-[116%] w-full object-cover opacity-[0.2]"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-maroon-deep via-maroon-deep/90 to-maroon-deep/45"
      />

      <div className="container-x py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal y={12}>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
                <p className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-gold-light/85">
                  01 — The shop
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <blockquote className="mt-8 max-w-[760px] font-display text-[clamp(2rem,4.4vw,3.7rem)] leading-[1.08] tracking-[-0.03em] text-paper">
                The shop is small.
                <br />
                The family it <span className="italic text-gold-light">dresses</span>
                <br />
                is not.
              </blockquote>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-[50ch] text-[14px] leading-[1.85] text-paper/70">
                Shree Keshri Synthetics sits on High School Road in Simri Bakhtiyarpur — one counter
                that has dressed the district’s weddings, its school children and its Monday
                mornings. Sarees, suitings and kids’ cloth on the shelves, and an aisle behind them
                that runs deeper than the frontage suggests.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-10 bg-gold/60" />
                <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-paper/60">
                  High School Road · Simri Bakhtiyarpur
                </p>
              </div>
            </Reveal>
          </div>

          {/* the practical half — address, hours, a way there */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.2}>
              <div className="border-t border-paper/20 pt-6">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.26em] text-paper/45">
                  Find the counter
                </p>
                <p className="mt-4 font-display text-[21px] leading-[1.45] text-paper">
                  {shop.addressLine1},
                  <br />
                  {shop.addressLine2},
                  <br />
                  {shop.addressLine3}
                </p>
                <a
                  href={shop.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-gold-light transition-colors hover:text-paper"
                >
                  Get directions
                  <ArrowUpRight
                    className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.8}
                  />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-paper/20 pt-6">
                <div>
                  <p className="font-display text-[17px] leading-none text-paper">All seven days</p>
                  <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-paper/45">
                    Morning to night
                  </p>
                </div>
                <div>
                  <a
                    href={`tel:${shop.phoneRaw}`}
                    className="link-line font-display text-[17px] leading-none text-paper"
                  >
                    75628 86262
                  </a>
                  <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-paper/45">
                    Call or WhatsApp
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
