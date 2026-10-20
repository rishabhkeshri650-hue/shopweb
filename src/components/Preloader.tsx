import * as React from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { IntroLogo } from "./ui/Logo"
import { shop } from "@/lib/site"

/**
 * Opening curtain: the emblem settles, the shop name tracks out letter by
 * letter, then the whole panel lifts away. Runs once per page load and is
 * skipped entirely when the visitor prefers reduced motion.
 */
export function Preloader() {
  const reduce = useReducedMotion()
  const [done, setDone] = React.useState(!!reduce)

  React.useEffect(() => {
    if (reduce) return
    const t = window.setTimeout(() => setDone(true), 1250)
    return () => window.clearTimeout(t)
  }, [reduce])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <IntroLogo size={118} />
          <motion.div
            className="mt-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-ink">
              Shree Keshri Synthetics
            </p>
          </motion.div>
          <motion.p
            className="mt-3 font-mono text-[9px] uppercase tracking-[0.28em] text-ink-mute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {shop.tagline}
          </motion.p>
          <motion.div
            className="mt-7 h-px w-40 origin-left bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
