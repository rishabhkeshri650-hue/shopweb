import * as React from "react"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { ArrowUpRight, Menu, Phone, X } from "lucide-react"
import { LogoMark } from "./ui/Logo"
import { navLinks, shop } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 })

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-silk",
          scrolled ? "bg-paper/85 backdrop-blur-xl shadow-[0_1px_0_rgba(11,10,8,0.08)]" : "bg-transparent",
        )}
      >
        {/* thin information strip — collapses on scroll */}
        <div
          className={cn(
            "hidden overflow-hidden border-b border-ink/5 transition-all duration-500 ease-silk sm:block",
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
          )}
        >
          <div className="container-x flex h-9 items-center justify-between">
            <p className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-ink-mute">
              {shop.addressLine1} · {shop.addressLine2}, {shop.addressLine3.split(",")[0]}
            </p>
            <div className="hidden items-center gap-6 sm:flex">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-ink-mute">
                Open all week
              </span>
              <a
                href={`tel:${shop.phoneRaw}`}
                className="link-line font-mono text-[9.5px] uppercase tracking-[0.24em] text-ink"
              >
                {shop.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="container-x flex h-[68px] items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-3" aria-label={`${shop.name} — home`}>
            <LogoMark size={42} />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[17px] tracking-tight text-ink">Shree Keshri</span>
              <span className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.32em] text-ink-mute">
                Synthetics
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-line font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${shop.phoneRaw}`}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper sm:flex"
              aria-label="Call the shop"
            >
              <Phone className="h-[15px] w-[15px]" strokeWidth={1.5} />
            </a>
            <a
              href={`https://wa.me/${shop.whatsapp}?text=Hello%20Shree%20Keshri%20Synthetics%2C%20I%20would%20like%20to%20ask%20about%20a%20product.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark hidden !px-6 !py-3.5 md:inline-flex"
            >
              WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <motion.div
          className="h-[2px] origin-left bg-gold"
          style={{ scaleX: progress, opacity: scrolled ? 1 : 0 }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="container-x flex h-[68px] items-center justify-between">
              <div className="flex items-center gap-3">
                <LogoMark size={38} />
                <span className="font-display text-[16px]">Shree Keshri</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15"
                aria-label="Close menu"
              >
                <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="container-x mt-6 flex flex-col" aria-label="Mobile">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-line py-5"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5 }}
                >
                  <span className="font-display text-[30px] leading-none">{l.label}</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-ink-mute">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="container-x mt-auto mb-8 space-y-4">
              <a href={`tel:${shop.phoneRaw}`} className="btn btn-dark w-full">
                Call {shop.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${shop.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-full"
              >
                WhatsApp us
              </a>
              <p className="pt-2 text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-ink-mute">
                {shop.addressFull}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
