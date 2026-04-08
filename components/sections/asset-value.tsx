"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { SectionWrapper } from "@/components/shared/section-wrapper"

export function AssetValue() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="mt-8">
      <SectionWrapper id="asset-value">
        <div className="mx-auto max-w-7xl px-4" ref={ref}>
          {/* Heading block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeOut" }
            }
            className="text-center mb-12 md:mb-16"
          >
            <p className="md:text-lg text-[#888888] font-bold leading-relaxed" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif', fontSize: '1.5rem' }}>
              &ldquo;泉&rdquo;は、将来的に人が集まる場所へ
            </p>
            <p className="md:text-lg text-[#888888] font-bold leading-relaxed mb-6" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif', fontSize: '1.5rem' }}>
              資産価値としての可能性
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[0.08em] text-[#A8B2BC]" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
              ASSET VALUE
            </h2>
          </motion.div>

          {/* Content box with semi-transparent background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, delay: 0.15, ease: "easeOut" }
            }
            className="bg-white/50 rounded-2xl mx-4 px-4 py-10 md:mx-0 md:p-16"
            style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.09)' }}
          >
            {/* Subtitle */}
            <div className="text-center mb-8 md:mb-10">
              <p className="text-sm md:text-sm text-[var(--brand-text-muted)]">
                2025年3月31日に改訂された
              </p>
              <p className="text-sm md:text-sm text-[var(--brand-text-muted)]">
                「福島市立地適正化計画」における当計画地の位置付け
              </p>
            </div>

            {/* Body text */}
            <p className="text-base md:text-base leading-[2.4] text-[var(--brand-text)]">
              全国の地方都市において、人口減少と高齢化社会は避けられない課題であり、都市計画の見直しが行われています。「コンパクト＋ネットワーク」という基本方針のもと、福島市では2025年3月に「立地適正化計画」の改訂が行われました。その中で、本計画地である福島市泉字堀之内前周辺は、「居住誘導区域」に該当しており、今後、行政の方針のもと&ldquo;将来的に人を集めるエリア&rdquo;として資産価値の維持もしくは向上の可能性が考えられる物件であるといえます。
            </p>
            <p className="text-sm md:text-sm text-[var(--brand-text-muted)] mt-4 text-center">
              （引用：福島市WEBサイト「福島市立地適正化計画」）
            </p>
          </motion.div>

        </div>

        {/* Aerial map image — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, delay: 0.3, ease: "easeOut" }
          }
          className="mt-10 md:mt-14 relative w-full aspect-[16/9] overflow-hidden"
        >
          <Image
            src="/images/asset-value-map.png"
            alt="福島市泉エリアの航空写真と立地適正化計画の区域図"
            fill
            className="object-cover"
          />
        </motion.div>
      </SectionWrapper>
    </div>
  )
}
