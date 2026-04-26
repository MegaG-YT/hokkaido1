"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"

const SERIF_FONT = '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif'

const SALE_LOTS = [
  { no: "No.3", area: "177.59㎡（53.72坪）", price: "13,200,000円" },
  { no: "No.4", area: "167.98㎡（50.81坪）", price: "12,700,000円" },
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
          <motion.div className="text-center mb-10 md:mb-14" {...animate(0)}>
            <h2
              className="text-2xl md:text-4xl tracking-[0.1em] text-black"
              style={{ fontFamily: SERIF_FONT }}
            >
              全体区画図／販売区画図
            </h2>
            <p
              className="mt-2 text-base md:text-xl tracking-[0.05em] text-black"
              style={{ fontFamily: SERIF_FONT }}
            >
              Real estate plot plan
            </p>
          </motion.div>

          {/* Sales summary banner */}
          <motion.div className="mb-8" {...animate(0.1)}>
            <div className="mx-auto max-w-md bg-[#555555]/80 py-2 px-4 text-center">
              <p className="text-sm md:text-base text-white tracking-widest" style={{ fontFamily: SERIF_FONT }}>
                全<span className="text-lg md:text-xl font-bold">17</span>区画 / <span className="text-lg md:text-xl font-bold">2</span>区画販売中
              </p>
            </div>
          </motion.div>

          {/* Sales table */}
          <motion.div className="mx-auto max-w-md mb-10 md:mb-14" {...animate(0.15)}>
            <table className="w-full text-xs md:text-sm border-collapse" style={{ fontFamily: SERIF_FONT }}>
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
          </motion.div>

          {/* Plot Map with light background */}
          <motion.div
            className="mx-auto w-full max-w-2xl bg-white/20 backdrop-blur-sm p-4 md:p-6"
            {...animate(0.2)}
          >
            <Image
              src="/images/lot-plan-new.webp"
              alt="全体区画図 - 17区画の配置図。各区画の面積と番号を表示"
              width={1200}
              height={1800}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
