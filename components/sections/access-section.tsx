"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Footprints, TrainFront, Car, type LucideIcon } from "lucide-react"
import { SectionWrapper } from "@/components/shared/section-wrapper"

interface TransportItem {
  icon: LucideIcon
  label: string
  details: string[]
}

interface TransportRow {
  image: string
  imageAlt: string
  items: TransportItem[]
}

const TRANSPORT_ROWS: TransportRow[] = [
  {
    image: "/images/access-train.webp",
    imageAlt: "福島交通飯坂線の電車",
    items: [
      {
        icon: Footprints,
        label: "徒歩",
        details: [
          "福島交通飯坂線「岩代清水」駅　徒歩4分（約200～270m）",
        ],
      },
      {
        icon: TrainFront,
        label: "鉄道・電車",
        details: [
          "JR「福島」駅へ約8分（福島交通飯坂線「岩代清水」駅利用）",
        ],
      },
    ],
  },
  {
    image: "/images/access-driving.webp",
    imageAlt: "車のハンドルを握るドライバー",
    items: [
      {
        icon: Car,
        label: "自動車",
        details: [
          "西道路まで車で約5分（約580～650m）",
          "JR「福島」駅まで約3.0km（車で約10分）",
        ],
      },
    ],
  },
]

const FOOTNOTES = [
  "※所要時間は徒歩80m／分で算出しています。",
  "※車による所要時間は、通常（平日正午頃）要する時間です。",
  "※電車による所要時間は、日中平常時のもので、時間帯により異なります。",
  "※道路状況により所要時間は変動します。",
]

export function AccessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const prefersReducedMotion = useReducedMotion()

  const animate = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.6, ease: "easeOut" as const, delay },
  })

  return (
    <SectionWrapper id="access" className="!py-0">
      <div className="relative py-16 md:py-24" ref={ref}>
        {/* Background nightscape */}
        <Image
          src="/images/hero-nightscape.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Header */}
          <motion.div {...animate(0)} className="text-center mb-12 md:mb-16">
            <p
              className="text-sm md:text-base text-white mb-1"
              style={{
                fontFamily:
                  '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif',
              }}
            >
              鉄道駅が徒歩圏
            </p>
            <p
              className="text-base md:text-lg text-white mb-4"
              style={{
                fontFamily:
                  '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif',
              }}
            >
              カーアクセスも良好
            </p>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl tracking-[0.015em] mb-6"
              style={{
                fontFamily:
                  '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif',
                color: '#8b4840',
              }}
            >
              ACCESS
            </h2>
            <p className="text-sm md:text-base text-white max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
              JR福島駅周辺へ車で約10分～15分程度。地域内を通る道路網が整備されており、移動の利便性が高いエリアです。住宅地としての需要が高く、利便性と自然のバランスが良いエリアを求める方に適した場所です。
            </p>
          </motion.div>

          {/* Transport rows */}
          <div className="space-y-6 md:space-y-8 mb-10 md:mb-14 max-w-2xl mx-auto">
            {TRANSPORT_ROWS.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                {...animate(0.15 + rowIndex * 0.15)}
                className="flex flex-col md:flex-row md:items-stretch gap-0"
              >
                {/* Photo */}
                <div className="md:w-2/5 relative min-h-[200px]">
                  <Image
                    src={row.image}
                    alt={row.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>

                {/* Info box */}
                <div className="md:w-3/5 bg-black/40 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-center rounded-r-2xl">
                  {row.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {itemIndex > 0 && (
                        <div className="border-t border-white/20 my-5" />
                      )}
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-[var(--brand-accent)] flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-[var(--brand-accent)]" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[var(--brand-accent)] mb-2">
                            {item.label}
                          </p>
                          {item.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className="text-sm md:text-base text-white/90 leading-relaxed"
                              style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footnotes */}
          <motion.div
            {...animate(0.45)}
            className="space-y-1 text-right"
          >
            {FOOTNOTES.map((note, index) => (
              <p
                key={index}
                className="text-[10px] md:text-xs text-white"
                style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
              >
                {note}
              </p>
            ))}
            <p className="text-[10px] md:text-xs text-white mt-4 text-right" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
              Image photo（福島県福島市のJR「福島」駅から東側の夜景）
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
