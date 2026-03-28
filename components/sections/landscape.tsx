"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { SectionDivider } from "@/components/shared/section-divider"
import { SectionWrapper } from "@/components/shared/section-wrapper"

export function Landscape() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SectionDivider title="セキスイハイムのまちづくり" />
      <SectionWrapper id="landscape">
        <div className="mx-auto max-w-7xl px-4" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeOut" }
            }
            className="text-center"
          >
            {/* Heading */}
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
              街全体をデザインする、
            </p>
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed mb-8">
              セキスイハイムのまちづくり
            </p>

            {/* Decorative line */}
            <div className="w-12 h-[1px] bg-[var(--brand-accent)] mx-auto mb-4" />

            {/* LANDSCAPE title */}
            <h2
              className="text-4xl md:text-6xl lg:text-7xl tracking-[0.08em] text-[var(--brand-nav)] mb-10"
              style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
            >
              LANDSCAPE
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-[var(--brand-text-muted)] leading-relaxed">
              スマートハイムシティ泉では、建物だけでなく街並み全体をデザイン。
            </p>
            <p className="text-sm md:text-base text-[var(--brand-text-muted)] leading-relaxed">
              統一された外構計画により美しい街並みと快適な暮らしを実現します。
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  )
}
