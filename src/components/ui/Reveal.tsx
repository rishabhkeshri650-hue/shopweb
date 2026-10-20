import * as React from "react"
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion"

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1]

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  once = true,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * A line of type that rises out of its own mask.
 *
 * The observer sits on the clipping wrapper, not the moving text: a child
 * translated below an `overflow:hidden` parent is fully clipped, so
 * IntersectionObserver would report it as never visible and the reveal would
 * never fire.
 */
export function MaskLine({
  children,
  className,
  delay = 0,
  duration = 1.05,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}) {
  const reduce = useReducedMotion()
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <span ref={ref} className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={className ? `block ${className}` : "block"}
        initial={reduce ? false : { y: "112%" }}
        animate={reduce ? undefined : { y: inView ? "0%" : "112%" }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

export { EASE }
