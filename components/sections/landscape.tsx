"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { CtaButtons } from "@/components/shared/cta-buttons"

const STAGGER = 0.42
const DELAY_CHILDREN = 0.2
const LAYER_DURATION = 1.2

export function Landscape() {
  const ref = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const headerInView = useInView(headerRef, { once: true, amount: 0.6 })
  const prefersReducedMotion = useReducedMotion()

  const stackVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: STAGGER, delayChildren: DELAY_CHILDREN },
    },
  }
  const layerVariants = {
    hidden: { opacity: 0, y: -32, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: LAYER_DURATION, ease: "easeOut" as const },
    },
  }

  const { scrollYProgress: imageProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  })
  const handY = useTransform(imageProgress, [0, 1], ["-18%", "12%"])

  const animate = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.6, ease: "easeOut" as const, delay },
  })

  return (
    <>
      <SectionWrapper id="landscape">
        <div className="mx-auto max-w-7xl px-4" ref={ref}>
          <motion.div ref={headerRef} {...animate()} className="text-center">
            {/* Heading */}
            <p className="text-lg md:text-2xl text-[#1a1a1a] leading-relaxed" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
              街全体をデザインする、
            </p>
            <p className="text-lg md:text-2xl text-[#1a1a1a] leading-relaxed mb-8" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
              セキスイハイムのまちづくり
            </p>

            {/* Decorative line */}
            <div className="w-36 h-[1px] bg-[var(--brand-accent)] mx-auto mb-4" />

            {/* LANDSCAPE title */}
            <h2
              className="text-4xl md:text-6xl lg:text-7xl tracking-[0.015em] text-[var(--brand-nav)] mb-10"
              style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
            >
              LANDSCAPE
            </h2>

            {/* Description */}
            <p className="text-base md:text-xl text-[#3a3a3a] leading-relaxed" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
              スマートハイムシティ泉では、建物だけでなく街並み全体をデザイン。
            </p>
            <p className="text-base md:text-xl text-[#3a3a3a] leading-relaxed" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
              統一された外構計画により美しい街並みと快適な暮らしを実現します。
            </p>
          </motion.div>

          {/* Main landscape illustration — layered animated reveal */}
          <motion.div
            ref={imageRef}
            className="relative w-full max-w-4xl mx-auto aspect-[16/9] mt-12 overflow-hidden"
            variants={prefersReducedMotion ? undefined : stackVariants}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? undefined : headerInView ? "visible" : "hidden"}
          >
            {/* Layer 1 — sky + birds */}
            <motion.div
              variants={prefersReducedMotion ? undefined : layerVariants}
              className="absolute inset-0"
            >
              <Image
                src="/images/landscape-layer-01-sky.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </motion.div>
            {/* Layer 2 — houses / street line-art */}
            <motion.div
              variants={prefersReducedMotion ? undefined : layerVariants}
              className="absolute inset-0"
            >
              <Image
                src="/images/landscape-layer-02-houses.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </motion.div>
            {/* Layer 3 — trees / foliage */}
            <motion.div
              variants={prefersReducedMotion ? undefined : layerVariants}
              className="absolute inset-0"
            >
              <Image
                src="/images/landscape-layer-03-trees.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </motion.div>
            {/* Layer 4 — cyclist */}
            <motion.div
              variants={prefersReducedMotion ? undefined : layerVariants}
              className="absolute inset-0"
            >
              <Image
                src="/images/landscape-layer-04-cyclist.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </motion.div>
            {/* Layers 6-8 — people group */}
            <motion.div
              variants={prefersReducedMotion ? undefined : layerVariants}
              className="absolute inset-0"
            >
              <Image
                src="/images/landscape-layer-06-people-mother-child.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </motion.div>
            <motion.div
              variants={prefersReducedMotion ? undefined : layerVariants}
              className="absolute inset-0"
            >
              <Image
                src="/images/landscape-layer-07-people-umbrella.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </motion.div>
            <motion.div
              variants={prefersReducedMotion ? undefined : layerVariants}
              className="absolute inset-0"
            >
              <Image
                src="/images/landscape-layer-08-people-dogwalker.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </motion.div>
            {/* Layer 5 — Machinami Design Guideline title badge */}
            <motion.div
              variants={prefersReducedMotion ? undefined : layerVariants}
              className="absolute inset-0"
            >
              <Image
                src="/images/landscape-layer-05-title.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </motion.div>
            {/* Layer 9 — hand with pencil (variants reveal + scroll-linked Y) */}
            <motion.div
              variants={prefersReducedMotion ? undefined : layerVariants}
              style={prefersReducedMotion ? undefined : { y: handY }}
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src="/images/landscape-layer-09-hand-pencil.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 960px"
              />
            </motion.div>
            <span className="sr-only">まちなみデザインガイドライン - 街並みの完成イメージイラスト</span>
          </motion.div>

          {/* Planting caption */}
          <motion.div {...animate(0.3)} className="mt-8 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/images/landscape-planting-caption.png"
                alt="マスタープラン（全体計画）に示す植栽は、大切な景観ポイントです。シンボルツリー等、その他の中木と低木や地被植物を適切に配置し、それらを組み合わせることで美しいまちなみとして周辺環境へと繋がっていきます。"
                width={1200}
                height={60}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Two-column diagrams */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left column - Building layout */}
            <motion.div {...animate(0.4)} className="flex flex-col">
              <h3 className="text-base md:text-lg font-bold text-[#4A4A4A] mt-0 mb-2 md:mb-6 text-center" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                自然の心地よさを
              </h3>
              <div className="relative w-full aspect-[4/3] mb-6 flex items-center justify-center">
                <div className="relative w-[65%] h-full">
                  <Image
                    src="/images/landscape-building-layout.png"
                    alt="建物配置の計画図 - 風通し、日差し、南庭を考慮した配置"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-gray-100 rounded p-4 flex-1 min-h-[7rem]">
                <p className="text-xs md:text-sm text-[var(--brand-text-muted)] leading-relaxed">
                  建物が無秩序に並ぶと、日照や通風、プライバシーの確保が難しくなるため、まち全体の調和を考えて計画的に建物と庭を配置します。
                </p>
                <p className="text-xs md:text-sm text-[var(--brand-text-muted)] leading-relaxed mt-2">
                  デザインガイドラインによりマスタープラン（全体計画）で設定した南庭の位置を守り、建物を配置します。
                </p>
              </div>
            </motion.div>

            {/* Right column - Privacy */}
            <motion.div {...animate(0.5)} className="flex flex-col">
              <h3 className="text-base md:text-lg font-bold text-[#4A4A4A] mt-6 mb-2 md:mt-0 md:mb-6 text-center" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                プライバシーに配慮して部屋や窓を設計
              </h3>
              <div className="relative w-full aspect-[4/3] mb-6 flex items-center justify-center">
                <div className="relative w-3/4 h-full">
                  <Image
                    src="/images/landscape-privacy.png"
                    alt="プライバシー配慮の設計図 - 隣地境界線より2.5m未満の開口部は不可視なものに"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="bg-gray-100 rounded p-4 flex-1 min-h-[7rem]">
                <p className="text-xs md:text-sm text-[var(--brand-text-muted)] leading-relaxed">
                  互いに住み良い環境をつくるため、お隣同士の部屋の配置、窓の向き合いを調整することが必要です。隣地建物に面している窓やドアは、マスタープラン（全体計画）で指定されている側をカスミガラスなどの不可視なものにします。
                </p>
              </div>
            </motion.div>
          </div>

          {/* Two-column photos */}
          <div className="mt-0 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left - Greenery */}
            <motion.div {...animate(0.6)} className="flex flex-col">
              <h3 className="text-base md:text-lg font-bold text-[#4A4A4A] mt-6 mb-2 md:mt-0 md:mb-6 text-center" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                豊かな緑で彩られるまち
              </h3>
              <div className="mb-6">
                <Image
                  src="/images/landscape-greenery.png"
                  alt="豊かな緑に囲まれた街並みを歩く家族"
                  width={1848}
                  height={933}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-gray-100 rounded p-4 flex-1 min-h-[7rem]">
                <p className="text-xs md:text-sm text-[var(--brand-text-muted)] leading-relaxed">
                  マスタープラン（全体計画）に示す植栽は、大切な景観ポイントです。シンボルツリー等、その他の中木と低木や地被植物を適切に配置し、それらを組み合わせることで美しいまちなみとして周辺環境へと繋がっていきます。
                </p>
              </div>
            </motion.div>

            {/* Right - Lighting */}
            <motion.div {...animate(0.7)} className="flex flex-col">
              <h3 className="text-base md:text-lg font-bold text-[#4A4A4A] mt-6 mb-2 md:mt-0 md:mb-6 text-center" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                外灯でまちを美しくライトアップ
              </h3>
              <div className="mb-6">
                <Image
                  src="/images/landscape-lighting.png"
                  alt="外灯で美しくライトアップされた夜の街並みイラスト"
                  width={1848}
                  height={933}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-gray-100 rounded p-4 flex-1 min-h-[7rem]">
                <p className="text-xs md:text-sm text-[var(--brand-text-muted)] leading-relaxed">
                  通り沿いに連続する灯りで夜の美しいまちなみを演出し、防犯性も高めます。このために、全ての区画に門灯・植栽灯を各1灯以上設けます。（屋外照明計2灯以上）
                </p>
              </div>
            </motion.div>
          </div>

          <CtaButtons className="mt-12 md:mt-16" />
        </div>
      </SectionWrapper>
    </>
  )
}
