"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"

const SERIF_FONT = '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif'

const SALE_LOTS = [
  { no: "No.3", area: "177.59㎡（53.72坪）", price: "13,200,000円" },
  { no: "No.4", area: "167.98㎡（50.81坪）", price: "12,700,000円" },
]

const BUILDING_LOTS = [
  { no: "A棟", building: "90.65㎡（27.42坪）", area: "174.02㎡（52.64坪）" },
  { no: "B棟", building: "99.75㎡（30.17坪）", area: "212.33㎡（64.22坪）" },
  { no: "C棟", building: "100.33㎡（30.34坪）", area: "246.75㎡（74.64坪）" },
]

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
    <section id="lot-information" className="scroll-mt-32">
      <div ref={ref} className="relative py-16 md:py-24">
        <Image
          src="/images/lot-bg-edited.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          {/* Title */}
          <motion.div className="mb-10 md:mb-14" {...animate(0)}>
            <div className="mx-auto w-full max-w-3xl bg-[#101F03] py-10 md:py-16 px-6 text-center">
              <h2
                className="text-2xl md:text-4xl tracking-[0.1em] text-white"
                style={{ fontFamily: SERIF_FONT }}
              >
                全体区画図／販売区画図
              </h2>
            </div>
          </motion.div>

          {/* Tables: sales lots + buildings, side-by-side on desktop */}
          <motion.div
            className="mx-auto max-w-4xl mb-10 md:mb-14 flex flex-col md:flex-row md:items-start md:justify-center gap-6 md:gap-8"
            {...animate(0.15)}
          >
            <table className="w-full md:w-auto text-xs md:text-sm border-collapse" style={{ fontFamily: SERIF_FONT }}>
              <thead>
                <tr className="bg-[#555555]/80 text-white">
                  <th className="py-2 px-3 md:px-6 font-normal tracking-wider border border-white/20">区画No.</th>
                  <th className="py-2 px-3 md:px-6 font-normal tracking-wider border border-white/20">区画面積</th>
                  <th className="py-2 px-3 md:px-6 font-normal tracking-wider border border-white/20">販売価格</th>
                </tr>
              </thead>
              <tbody>
                {SALE_LOTS.map((lot) => (
                  <tr key={lot.no} className="bg-white/80 text-[var(--brand-text)]">
                    <td className="py-2 px-3 md:px-6 text-center border border-gray-300">{lot.no}</td>
                    <td className="py-2 px-3 md:px-6 text-center border border-gray-300">{lot.area}</td>
                    <td className="py-2 px-3 md:px-6 text-center border border-gray-300">{lot.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table className="w-full md:w-auto text-xs md:text-sm border-collapse" style={{ fontFamily: SERIF_FONT }}>
              <thead>
                <tr className="bg-[#555555]/80 text-white">
                  <th className="py-2 px-3 md:px-6 font-normal tracking-wider border border-white/20">区画</th>
                  <th className="py-2 px-3 md:px-6 font-normal tracking-wider border border-white/20">建物面積</th>
                  <th className="py-2 px-3 md:px-6 font-normal tracking-wider border border-white/20">区画面積</th>
                </tr>
              </thead>
              <tbody>
                {BUILDING_LOTS.map((lot) => (
                  <tr key={lot.no} className="bg-white/80 text-[var(--brand-text)]">
                    <td className="py-2 px-3 md:px-6 text-center border border-gray-300">{lot.no}</td>
                    <td className="py-2 px-3 md:px-6 text-center border border-gray-300">{lot.building}</td>
                    <td className="py-2 px-3 md:px-6 text-center border border-gray-300">{lot.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Plot Map with light background */}
          <motion.div
            className="mx-auto w-full max-w-2xl"
            {...animate(0.2)}
          >
            <Image
              src="/images/lot-plan-new.webp"
              alt="全体区画図 - 17区画の配置図。各区画の面積と番号を表示"
              width={1125}
              height={1399}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
