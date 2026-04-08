"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const SERIF_FONT = '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif'

export function LotInformation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  const prefersReducedMotion = useReducedMotion()

  const animate = (delay: number = 0) => {
    if (prefersReducedMotion) return {}
    return {
      initial: { opacity: 0, y: 30 } as const,
      animate: isInView
        ? ({ opacity: 1, y: 0 } as const)
        : ({ opacity: 0, y: 30 } as const),
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }
  }

  return (
    <SectionWrapper id="lot-information" className="py-0 md:py-0">
      <div ref={ref} className="relative py-16 md:py-24">
        <Image
          src="/images/lot-bg-texture.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <motion.div
            className="rounded-xl bg-white p-6 shadow-lg md:p-12"
            {...animate(0)}
          >
            {/* Header */}
            <div className="mb-10 text-center">
              <motion.p
                className="text-sm tracking-[0.2em] text-[#6B4C3B]"
                style={{ fontFamily: SERIF_FONT }}
                {...animate(0.1)}
              >
                全体区画図
              </motion.p>
              <motion.div
                className="mx-auto mt-2 w-fit border-2 border-[var(--brand-primary)] px-8 py-2"
                {...animate(0.15)}
              >
                <p
                  className="text-lg tracking-[0.1em] text-[var(--brand-text-muted)] md:text-2xl"
                  style={{ fontFamily: SERIF_FONT }}
                >
                  Real estate plot plan
                </p>
              </motion.div>

              <motion.div {...animate(0.2)}>
                <div className="mx-auto my-6 h-[1px] w-full max-w-md bg-[#C8A84E]" />
                <p
                  className="text-[var(--brand-text-muted)]"
                  style={{ fontFamily: SERIF_FONT }}
                >
                  総区画数{" "}
                  <span className="text-3xl font-bold text-[var(--brand-text)] md:text-5xl">
                    17
                  </span>
                  区画
                </p>
                <div className="mx-auto my-6 h-[1px] w-full max-w-md bg-[#C8A84E]" />
                <p
                  className="text-sm text-[var(--brand-text-muted)]"
                  style={{ fontFamily: SERIF_FONT }}
                >
                  予定販売価格帯／
                  <span className="text-xl font-bold text-[var(--brand-text)] md:text-2xl">
                    1,200
                  </span>
                  万円台~
                  <span className="text-xl font-bold text-[var(--brand-text)] md:text-2xl">
                    1,500
                  </span>
                  万円台
                </p>
              </motion.div>
            </div>

            {/* Plot Map Layers */}
            <motion.div {...animate(0.3)}>
              <div className="relative mx-auto w-full max-w-2xl overflow-hidden">
                {/* Map background (bottom layer - sets container size) */}
                <Image
                  src="/images/lot-map-bg.webp"
                  alt=""
                  width={4476}
                  height={4516}
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority={false}
                />
                {/* Roads layer (middle - scaled up to clip beyond background) */}
                <Image
                  src="/images/lot-plan-roads.webp"
                  alt=""
                  width={5187}
                  height={4519}
                  className="absolute object-cover"
                  style={{ top: "-5%", left: "0%", width: "110%", height: "110%" }}
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={false}
                />
                {/* Lot map layer (top - original size) */}
                <Image
                  src="/images/lot-plan-map.webp"
                  alt="全体区画図 - 17区画の配置図。各区画の面積と番号を表示"
                  width={2882}
                  height={4005}
                  className="absolute inset-0 h-full w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 672px"
                  priority={false}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
