"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"

interface SectionDividerProps {
  title: string
}

export function SectionDivider({ title }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <div ref={ref} className="flex items-center w-full">
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={isInView ? { x: 0 } : { x: "-100%" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
          }
          className="w-[60vw] md:w-[45vw] lg:w-[33vw] rounded-r-full border-2 border-l-0 border-[var(--brand-accent)] bg-[var(--brand-accent)] py-3 px-6 flex items-center justify-end"
        >
          <h2 className="text-white font-bold text-sm md:text-base lg:text-lg whitespace-nowrap">
            {title}
          </h2>
        </motion.div>
      </div>
      <div className="h-[2px] flex-1 bg-[var(--brand-accent)]" />
    </div>
  )
}
