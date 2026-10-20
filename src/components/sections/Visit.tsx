import * as React from "react"
import { ArrowUpRight, Clock, Copy, Check, Mail, MapPin, Navigation, Phone } from "lucide-react"
import { Reveal, MaskLine } from "../ui/Reveal"
import { shop } from "@/lib/site"

function MapCard() {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <div className="relative h-[420px] overflow-hidden border border-line bg-paper-2 sm:h-[500px] lg:h-full lg:min-h-[520px]">
      {loaded ? (
        <iframe
          title={`Map showing ${shop.name} at ${shop.addressFull}`}
          src={shop.mapEmbed}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <>
          {/* designed poster — shown until the visitor asks for the live map */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundColor: "#EFE7D7",
              backgroundImage:
                "linear-gradient(rgba(11,10,8,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(11,10,8,0.055) 1px, transparent 1px), linear-gradient(rgba(11,10,8,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(11,10,8,0.03) 1px, transparent 1px)",
              backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
            }}
          />
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 600 520"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="hw-road"
                d="M-30 396 C 110 356, 196 330, 300 306 S 486 262, 640 226"
                fill="none"
              />
            </defs>

            {/* built blocks */}
            <g fill="rgba(11,10,8,0.045)">
              <rect x="46" y="72" width="132" height="96" />
              <rect x="196" y="52" width="76" height="120" />
              <rect x="382" y="70" width="150" height="84" />
              <rect x="60" y="236" width="96" height="76" />
              <rect x="352" y="196" width="70" height="60" />
              <rect x="430" y="300" width="128" height="88" />
              <rect x="120" y="428" width="140" height="70" />
              <rect x="330" y="424" width="90" height="74" />
            </g>

            {/* roads */}
            <use href="#hw-road" stroke="rgba(11,10,8,0.05)" strokeWidth="26" fill="none" />
            <use href="#hw-road" stroke="#F8F2E4" strokeWidth="19" fill="none" />
            <use
              href="#hw-road"
              stroke="rgba(11,10,8,0.18)"
              strokeWidth="1"
              strokeDasharray="7 9"
              fill="none"
            />
            <path d="M318 -20 L306 560" stroke="rgba(11,10,8,0.05)" strokeWidth="20" fill="none" />
            <path d="M318 -20 L306 560" stroke="#F8F2E4" strokeWidth="14" fill="none" />
            <path
              d="M318 -20 L306 560"
              stroke="rgba(11,10,8,0.15)"
              strokeWidth="1"
              strokeDasharray="6 8"
              fill="none"
            />

            {/* the road name, set along the road */}
            <text
              fill="rgba(11,10,8,0.34)"
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 7.5,
                letterSpacing: "0.28em",
              }}
            >
              <textPath href="#hw-road" startOffset="6%">
                HIGH SCHOOL ROAD · SIMRI BAKHTIYARPUR
              </textPath>
            </text>

            {/* the shop's own radius */}
            <circle cx="300" cy="272" r="54" fill="none" stroke="rgba(154,123,63,0.45)" strokeWidth="0.9" />
            <circle cx="300" cy="272" r="92" fill="none" stroke="rgba(154,123,63,0.25)" strokeWidth="0.6" />
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-paper shadow-[0_14px_30px_-12px_rgba(92,18,32,0.9)]">
              <MapPin className="h-6 w-6" strokeWidth={1.5} />
              <span className="absolute inset-0 animate-ping rounded-full bg-maroon/25" />
            </span>
            <p className="mt-4 font-display text-[19px] text-ink">Shree Keshri Synthetics</p>
            <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.18em] text-ink-mute">
              25.720689° N · 86.595200° E
            </p>
          </div>

          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group absolute inset-0 flex items-end justify-center bg-ink/0 pb-6 transition-colors duration-300 hover:bg-ink/[0.04]"
          >
            <span className="btn btn-dark !px-6 !py-3.5 shadow-lg">
              <Navigation className="h-3.5 w-3.5" strokeWidth={1.8} />
              Load the live map
            </span>
          </button>
        </>
      )}

      <a
        href={shop.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 bg-paper/95 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-ink shadow-sm backdrop-blur transition-colors hover:bg-ink hover:text-paper"
      >
        Google Maps
        <ArrowUpRight className="h-3 w-3" strokeWidth={1.8} />
      </a>
    </div>
  )
}

export function Visit() {
  const [copied, setCopied] = React.useState(false)

  const copyCoords = async () => {
    try {
      await navigator.clipboard.writeText(`${shop.lat}, ${shop.lng}`)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="visit" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 border-t border-line pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal y={12}>
              <p className="eyebrow">05 — Visit</p>
            </Reveal>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.8vw,4rem)] leading-[1.02] tracking-[-0.03em]">
              <MaskLine>Come to High</MaskLine>
              <MaskLine delay={0.08}>
                <span className="italic text-maroon">School</span> Road.
              </MaskLine>
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:pb-2">
            <a
              href={shop.directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark group"
            >
              Get directions
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.8}
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink">
                    <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink-mute">
                      The address
                    </p>
                    <p className="mt-2 font-display text-[19px] leading-[1.45] text-ink">
                      {shop.addressLine1},
                      <br />
                      {shop.addressLine2},
                      <br />
                      {shop.addressLine3}
                    </p>
                    <button
                      type="button"
                      onClick={copyCoords}
                      className="mt-3 inline-flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.18em] text-ink-mute transition-colors hover:text-ink"
                    >
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      {shop.latDms} · {shop.lngDms}
                      <span className="text-ink-mute/60">{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink-mute">
                      Call or WhatsApp
                    </p>
                    <a
                      href={`tel:${shop.phoneRaw}`}
                      className="link-line mt-2 inline-block font-display text-[19px] text-ink"
                    >
                      {shop.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink">
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink-mute">
                      Email
                    </p>
                    <a
                      href={`mailto:${shop.email}`}
                      className="link-line mt-2 inline-block break-all font-display text-[17px] text-ink"
                    >
                      {shop.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink">
                    <Clock className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-ink-mute">
                      Opening
                    </p>
                    <p className="mt-2 font-display text-[19px] leading-[1.45] text-ink">
                      Open all seven days
                    </p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-ink-mute">
                      Morning to night. Call ahead on festival days.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-10 border-t border-line pt-6">
                <p className="font-mono text-[8.5px] uppercase leading-[2] tracking-[0.2em] text-ink-mute">
                  Landmark
                </p>
                <p className="mt-2 max-w-[40ch] text-[13px] leading-[1.8] text-ink-soft">
                  On High School Road in Simri Bakhtiyarpur — look for the shutter stacked with
                  colour. If you are coming from Saharsa, the shop is on the main road side.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.1} y={24}>
            <MapCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
