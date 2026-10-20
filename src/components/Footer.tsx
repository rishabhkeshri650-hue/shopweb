import { ArrowUpRight, Phone } from "lucide-react"
import HalftoneWordmarkFooter from "./ui/halftone-wordmark-footer"
import { Reveal } from "./ui/Reveal"
import { shop } from "@/lib/site"

export function Footer() {
  return (
    <>
      <section className="relative border-t border-line bg-paper">
        <div className="container-x flex flex-col gap-10 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
          <Reveal>
            <p className="eyebrow">Before you go</p>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(1.9rem,4.2vw,3.3rem)] leading-[1.05] tracking-[-0.03em]">
              Tell us the occasion.
              <br />
              We&apos;ll find the <span className="italic text-maroon">cloth.</span>
            </h2>
            <p className="mt-5 max-w-[46ch] text-[14px] leading-[1.8] text-ink-soft">
              A wedding, a first day, a festival, or a Tuesday. Send a message with the colour and
              the budget — the shortlist comes back the same day.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${shop.whatsapp}?text=Hello%20Shree%20Keshri%20Synthetics%2C%20I%20am%20looking%20for...`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                WhatsApp the shop
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
              </a>
              <a href={`tel:${shop.phoneRaw}`} className="btn btn-ghost">
                <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
                {shop.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <HalftoneWordmarkFooter
        wordmark="keshri"
        label="Shree Keshri Synthetics"
        meta={`© ${new Date().getFullYear()} · Simri Bakhtiyarpur / Saharsa`}
        columns={[
          {
            title: "Shop",
            links: [
              { label: "Collections", href: "#collections" },
              { label: "The shop", href: "#shop" },
              { label: "The owner", href: "#owner" },
              { label: "Visit", href: "#visit" },
            ],
          },
          {
            title: "Find us",
            links: [
              { label: "High School Road", href: shop.mapsLink },
              { label: "Simri Bakhtiyarpur", href: shop.mapsLink },
              { label: "Saharsa, Bihar", href: shop.mapsLink },
              { label: "Directions", href: shop.directionsLink },
            ],
          },
          {
            title: "Contact",
            links: [
              { label: shop.phoneDisplay, href: `tel:${shop.phoneRaw}` },
              { label: "WhatsApp", href: `https://wa.me/${shop.whatsapp}` },
              { label: shop.email, href: `mailto:${shop.email}` },
              { label: "Instagram", href: shop.social.instagram },
              { label: "X / Twitter", href: shop.social.x },
            ],
          },
        ]}
        preset="night"
        palette={{ background: "#0B0A08", ink: "#EFE7D8", warm: "#C9A96A" }}
        dotGap={5.5}
        radius={90}
        crop={0.24}
        grain={0.45}
        height="620px"
        className="mt-0"
      />
    </>
  )
}
