import * as React from "react"
import { cn } from "@/lib/utils"

export function Marquee({
  items,
  className,
  separator = "·",
  speed = 42,
}: {
  items: string[]
  className?: string
  separator?: string
  speed?: number
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-mono text-[11px] uppercase tracking-[0.26em]">{item}</span>
          <span aria-hidden="true" className="text-gold/70">
            {separator}
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee will-change-transform hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {row}
        {row}
      </div>
    </div>
  )
}
