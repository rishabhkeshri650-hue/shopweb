import { ArrowUpRight, Facebook, Instagram, Phone } from "lucide-react"
import { Reveal, MaskLine } from "../ui/Reveal"
import { shop } from "@/lib/site"

const socials = [
  { label: "Instagram", href: shop.social.instagram, Icon: Instagram, handle: "@rameshkeshrisbv19" },
  { label: "Facebook", href: shop.social.facebook, Icon: Facebook, handle: "rameshkeshrisbv19" },
]

export function Owner() {
  return (
    <section id="owner" className="relative scroll-mt-24 overflow-hidden bg-paper-2 py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-gold/20 lg:block"
      />
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5" y={30}>
          <div className="relative mx-auto max-w-[420px] lg:mx-0">
            <span aria-hidden="true" className="absolute -left-4 -top-4 hidden h-full w-full border border-maroon/25 sm:block" />
            <div className="relative aspect-[4/5] overflow-hidden bg-paper-3">
              <img
                src="./images/owner.jpg"
                alt="Portrait of Ramesh Keshri, owner of Shree Keshri Synthetics"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gold/15 mix-blend-multiply"
              />
            </div>
            <div className="absolute -bottom-6 left-5 right-5 flex items-center justify-between bg-paper px-5 py-4 shadow-[0_18px_40px_-24px_rgba(11,10,8,0.5)]">
              <div>
                <p className="font-display text-[17px] leading-none text-ink">{shop.owner}</p>
                <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.22em] text-ink-mute">
                  Owner · since the first shutter
                </p>
              </div>
              <a
                href={`tel:${shop.phoneRaw}`}
                aria-label="Call Ramesh Keshri"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper transition-colors hover:bg-maroon"
              >
                <Phone className="h-4 w-4" strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-4">
          <Reveal y={12}>
            <p className="eyebrow">04 — The owner</p>
          </Reveal>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,4.6vw,3.8rem)] leading-[1.02] tracking-[-0.03em]">
            <MaskLine>The man at</MaskLine>
            <MaskLine delay={0.08}>
              the <span className="italic text-maroon">counter.</span>
            </MaskLine>
          </h2>

          <Reveal delay={0.16}>
            <blockquote className="mt-7 border-l border-gold/60 pl-6">
              <p className="font-display text-[clamp(1.25rem,2.1vw,1.65rem)] italic leading-[1.55] text-ink">
                “I don’t sell cloth. I help you find the one you’ll still be happy with next
                season.”
              </p>
              <footer className="mt-4 font-mono text-[9px] uppercase tracking-[0.24em] text-ink-mute">
                Ramesh Keshri
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-7 max-w-[52ch] text-[14.5px] leading-[1.85] text-ink-soft">
              He knows which shelf the wedding sarees sit on, which cotton survives a Saharsa
              summer, and which size the boy from the next lane wore last year. That memory is the
              real inventory of this shop.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${shop.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark !py-3.5"
              >
                Message on WhatsApp
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
              </a>
              <a href={`tel:${shop.phoneRaw}`} className="btn btn-ghost !py-3.5">
                <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
                Call
              </a>

              <span aria-hidden="true" className="mx-1 hidden h-8 w-px bg-line sm:block" />

              <div className="flex items-center gap-2">
                {socials.map(({ label, href, Icon, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} — ${handle}`}
                    title={`${label} · ${handle}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                  </a>
                ))}
                <a
                  href={shop.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X — @rameshkeshri3"
                  title="X · @rameshkeshri3"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 font-mono text-[12px] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  X
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
