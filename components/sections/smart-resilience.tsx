"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const CARDS = [
  {
    title: "エネルギーを創る",
    image: "/images/smart-solar.png",
    alt: "太陽光発電パネルを搭載した住宅の屋根",
    description:
      "住まいに太陽光発電を搭載。太陽光を活かして発電し、環境にやさしいエネルギーを暮らしに取り入れることでできるだけ電力を買わない暮らしを目指します。※画像はCGであり、実際の仕様とは異なる場合があります。",
  },
  {
    title: "スマートハイムナビ（HEMS）\nを活用する",
    image: "/images/smart-hems.png",
    alt: "スマートハイムナビでエネルギーを管理するタブレット画面",
    description:
      "スマートハイムナビ（HEMS）でエネルギー設備を一元管理し、自宅電力を「見える化」。さらに、家じゅうの機器※1※2とつながり、音声操作や遠隔操作など毎日の安心・快適・便利をお手伝いします。※1)新スマートハイムナビ対応の機種のみ連携可能です。※2)新スマートハイムナビ対応のエコキ",
  },
  {
    title: "停電に備える",
    image: "/images/smart-battery.png",
    alt: "e-Pocket GREEN蓄電システム",
    description:
      "日中で発電して余った電力をためておくことができる蓄電システム。災害時にライフラインが途絶えてしまっても、蓄えた電気で復旧することも可能です※。※停電時、蓄電池の残量がない場合は電力を使用できません。また、使用できる範囲は、蓄電池や事前の設計により異なります。同時に使える電力には限りがあります。",
  },
  {
    title: "高断熱で暮らす",
    image: "/images/smart-insulation.png",
    alt: "高断熱住宅のキッチンで料理を楽しむ家族",
    description:
      "断熱性が高いと、少しの冷暖房でも快適な温度で暮らせるので、一年中快適です※。電力を有効活用できるので、光熱費の抑制も期待できます。※空調システム用のグリル・ガラリ等を設置しない空調は対象外です。",
  },
  {
    title: "地震に備える",
    image: "/images/smart-earthquake.png",
    alt: "耐震性に優れたセキスイハイムの住宅外観イラスト",
    description:
      "独自のユニットテクノロジーで作られた強靭な建物が家族を災害から守ります。分譲地に建つすべての建物が耐震性に優れているからこそ、災害に強いまちに。",
  },
]

export function SmartResilience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const prefersReducedMotion = useReducedMotion()

  const topCards = CARDS.slice(0, 3)
  const bottomCards = CARDS.slice(3)

  return (
    <>
      <SectionWrapper id="smart-resilience">
        {/* Light blue box with border — wider than content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: "easeOut" }
          }
          className="bg-[#E8F4F8] border border-[#B8DBE8] rounded-2xl mx-4 md:mx-8 lg:mx-16 p-6 md:p-10 lg:p-14"
        >
          {/* Heading inside blue box */}
          <div className="text-center mb-10 md:mb-14">
            <h2
              className="text-3xl md:text-5xl lg:text-6xl tracking-[0.05em] text-[var(--brand-text)] mb-4"
              style={{
                fontFamily:
                  '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif',
              }}
            >
              SMART＆RESILIENCE
            </h2>
            <p className="text-sm md:text-base text-[var(--brand-text)]" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
              地球環境の負荷をおさえ災害に備える「まち」づくり
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            {/* Top row — 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {topCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.5,
                          delay: 0.2 + index * 0.1,
                          ease: "easeOut",
                        }
                  }
                >
                  <h3 className="text-sm md:text-base font-bold text-[var(--brand-text)] mb-4 min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center text-center whitespace-pre-line" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                    {card.title}
                  </h3>
                  <div className="mb-4">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={800}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-[var(--brand-text-muted)]">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom row — 2 columns, wider */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-14">
              {bottomCards.map((card, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.5,
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut",
                        }
                  }
                >
                  <h3 className="text-sm md:text-base font-bold text-[var(--brand-text)] mb-4 flex items-center justify-center text-center" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                    {card.title}
                  </h3>
                  <div className="mb-4">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={800}
                      height={450}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed text-[var(--brand-text-muted)]">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
