"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const CARDS = [
  {
    title: "エネルギーを創る",
    description:
      "住まいに太陽光発電を搭載。太陽光を活かして発電し、環境にやさしいエネルギーを暮らしに取り入れることでできるだけ電力を買わない暮らしを目指します。※画像はCGであり、実際の仕様とは異なる場合があります。",
  },
  {
    title: "スマートハイムナビ（HEMS）を活用する",
    description:
      "スマートハイムナビ（HEMS）でエネルギー設備を一元管理し、自宅電力を「見える化」。さらに、家じゅうの機器※1※2とつながり、音声操作や遠隔操作など毎日の安心・快適・便利をお手伝いします。※1)新スマートハイムナビ対応の機種のみ連携可能です。※2)新スマートハイムナビ対応のエコキ",
  },
  {
    title: "停電に備える",
    description:
      "日中で発電して余った電力をためておくことができる蓄電システム。災害時にライフラインが途絶えてしまっても、蓄えた電気で復旧することも可能です※。※停電時、蓄電池の残量がない場合は電力を使用できません。また、使用できる範囲は、蓄電池や事前の設計により異なります。同時に使える電力には限りがあります。",
  },
  {
    title: "高断熱で暮らす",
    description:
      "断熱性が高いと、少しの冷暖房でも快適な温度で暮らせるので、一年中快適です※。電力を有効活用できるので、光熱費の抑制も期待できます。※空調システム用のグリル・ガラリ等を設置しない空調は対象外です。",
  },
  {
    title: "地震に備える",
    description:
      "独自のユニットテクノロジーで作られた強靭な建物が家族を災害から守ります。分譲地に建つすべての建物が耐震性に優れているからこそ、災害に強いまちに。",
  },
  {
    title: "水害・断水に備える",
    description:
      "雨水を一時貯留してから放流するクロスウェーブ。下水道への排水量が一気に増えることを抑えます※1。飲料水貯留システムは、断水時にも普段に近い暮らしを実現。平常時には新鮮な水道水が入れ替ります※2。※1)特定の大型分譲地のみの仕様となります。※2)4日以上水を使用しなかった場合、貯留水の水質が低下している恐れがあるため、最初の70リットルは飲用以外で使用します。1年に1回を目安に作動と取水の確認を行ってください。",
  },
]

export function SmartResilience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SectionWrapper id="smart-resilience">
        <div className="mx-auto max-w-7xl px-4" ref={ref}>
          {/* Heading */}
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
            <h2
              className="text-3xl md:text-5xl lg:text-6xl tracking-[0.05em] text-[var(--brand-text)] mb-4"
              style={{
                fontFamily:
                  '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif',
              }}
            >
              SMART＆RESILIENCE
            </h2>
            <p className="text-sm md:text-base text-[var(--brand-text-muted)]">
              地球環境の負荷をおさえ災害に備える「まち」づくり
            </p>
          </motion.div>

          {/* Light blue box with card grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, delay: 0.15, ease: "easeOut" }
            }
            className="bg-[#E8F4F8] rounded-2xl p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {CARDS.map((card, index) => (
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
                  className="bg-white rounded-xl p-5 md:p-6"
                >
                  {/* Card title */}
                  <h3 className="text-base md:text-lg font-bold text-[var(--brand-text)] mb-4 min-h-[2.5rem] md:min-h-[3.5rem] flex items-start">
                    {card.title}
                  </h3>

                  {/* Placeholder image */}
                  <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xs text-gray-400">
                      Image photo
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs md:text-sm leading-relaxed text-[var(--brand-text-muted)]">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  )
}
