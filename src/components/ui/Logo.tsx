import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

const LOGO_SRC = "./images/logo-mark.png"

/**
 * The shop mark. The supplied logo is wrapped in a thin gold ring that carries a
 * slow, rotating highlight — so the mark reads as "alive" without ever moving
 * the artwork itself. On hover the ring speeds up and a light sweeps across.
 */
export function LogoMark({
  size = 44,
  className,
  spin = true,
}: {
  size?: number
  className?: string
  spin?: boolean
}) {
  return (
    <span
      className={cn("group/logo relative inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      {/* rotating highlight on the ring */}
      {spin && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full animate-spin-slow group-hover/logo:[animation-duration:6s]"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(201,169,106,0) 0deg, rgba(201,169,106,0) 205deg, #c9a96a 300deg, #f0dfb6 338deg, rgba(201,169,106,0) 360deg)",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 1.6px), #000 calc(100% - 1.6px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 1.6px), #000 calc(100% - 1.6px))",
          }}
        />
      )}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-gold/35"
      />
      <span className="relative block overflow-hidden rounded-full" style={{ width: size, height: size }}>
        <img
          src={LOGO_SRC}
          alt="Shree Keshri Synthetics emblem"
          width={size}
          height={size}
          className="h-full w-full object-cover transition-transform duration-700 ease-silk group-hover/logo:scale-[1.06]"
          draggable={false}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 transition-opacity duration-300 group-hover/logo:animate-shimmer group-hover/logo:opacity-100"
        />
      </span>
    </span>
  )
}

/** Rotating circular wordmark — used as a hero seal. */
export function CircularSeal({
  size = 168,
  text = "SHREE KESHRI SYNTHETICS · SIMRI BAKHTIYARPUR · ",
  className,
}: {
  size?: number
  text?: string
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        className={cn("absolute inset-0 h-full w-full", !reduce && "animate-spin-slow")}
        aria-hidden="true"
      >
        <defs>
          <path
            id="seal-circle"
            d="M100,100 m-79,0 a79,79 0 1,1 158,0 a79,79 0 1,1 -158,0"
            fill="none"
          />
        </defs>
        <text
          fill="currentColor"
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 8.4,
            letterSpacing: "0.3em",
          }}
        >
          <textPath href="#seal-circle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <LogoMark size={size * 0.52} />
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[13%] rounded-full border border-gold/20"
      />
    </div>
  )
}

/** Big logo used in the intro curtain. */
export function IntroLogo({ size = 132 }: { size?: number }) {
  const reduce = useReducedMotion()
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <motion.span
        aria-hidden="true"
        className="absolute inset-[-14px] rounded-full border border-gold/40"
        initial={reduce ? false : { scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
      />
      <motion.div
        className="h-full w-full overflow-hidden rounded-full"
        initial={reduce ? false : { scale: 0.82, opacity: 0, filter: "blur(6px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <img src={LOGO_SRC} alt="" className="h-full w-full object-cover" />
      </motion.div>
    </div>
  )
}
