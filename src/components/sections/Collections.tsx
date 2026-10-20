import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { Reveal, MaskLine } from "../ui/Reveal"
import { alsoInStore, collections } from "@/lib/site"

export function Collections() {
  return (
    <section id="collections" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 border-t border-line pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal y={12}>
              <p className="eyebrow">01 — The collections</p>
            </Reveal>
            <h2 className="mt-5 max-w-[15ch] font-display text-[clamp(2.2rem,4.6vw,3.9rem)] leading-[1.02] tracking-[-0.03em]">
              <MaskLine>Six shelves,</MaskLine>
              <MaskLine delay={0.08}>
                <span className="italic text-maroon">one</span> shop.
              </MaskLine>
            </h2>
          </div>
          <Reveal delay={0.15} className="max-w-[38ch] lg:pb-2">
            <p className="text-[14.5px] leading-[1.8] text-ink-soft">
              The upper shelves hold what the shop is known for. Below them, everything else the
              family needs — from a blouse piece to a pair of jeans — is already in the aisle.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {collections.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} y={30} className={i === 1 ? "lg:mt-14" : ""}>
              <article className="group relative">
                <a href="#visit" className="block focus-visible:outline-none">
                  <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
                    <img
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1.1s] ease-silk group-hover:scale-[1.055]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                    <span className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.24em] text-paper/85">
                      {c.index}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-mono text-[8.5px] uppercase tracking-[0.24em] text-paper/70">
                        {c.meta}
                      </p>
                      <div className="mt-2 flex items-end justify-between gap-3">
                        <h3 className="font-display text-[27px] leading-none text-paper">{c.title}</h3>
                        <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/35 text-paper transition-all duration-300 group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-2 h-px w-7 shrink-0 bg-gold" />
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink-mute">
                      {c.kicker}
                    </p>
                    <p className="mt-2 text-[13.5px] leading-[1.75] text-ink-soft">{c.copy}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* also in store */}
        <Reveal delay={0.1} className="mt-16 lg:mt-24">
          <div className="border-y border-line py-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
              <div className="shrink-0 lg:w-[22%]">
                <p className="eyebrow">Also in store</p>
                <p className="mt-3 max-w-[24ch] text-[13px] leading-relaxed text-ink-mute">
                  The everyday list — kept in stock, priced for the whole family.
                </p>
              </div>
              <ul className="grid flex-1 grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-4">
                {alsoInStore.map((item) => (
                  <li key={item}>
                    <a
                      href="#visit"
                      className="link-line block py-2 font-display text-[17px] text-ink/85 transition-colors hover:text-maroon"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
