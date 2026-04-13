"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"

export function AssetValue() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const prefersReducedMotion = useReducedMotion()

  const headingBlock = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
      className="text-center mb-8 md:mb-12"
    >
      <p className="md:text-lg leading-relaxed" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif', fontSize: '1.1rem', color: '#8b4840' }}>
        &ldquo;泉&rdquo;は、将来的に人が集まる場所へ
      </p>
      <p className="md:text-lg leading-relaxed mb-6" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif', fontSize: '1.1rem', color: '#8b4840' }}>
        資産価値としての可能性
      </p>
      <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[0.015em]" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif', color: '#8b4840' }}>
        ASSET VALUE
      </h2>
    </motion.div>
  )

  const cardBlock = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.15, ease: "easeOut" }}
      className="w-full mx-auto bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-10 md:w-[66%] md:p-16 max-w-[1320px]"
      style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.09)' }}
    >
      <div className="text-center mb-8 md:mb-10">
        <p className="text-xs md:text-sm text-[var(--brand-text-muted)]" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
          2025年3月31日に改訂された
        </p>
        <p className="text-xs md:text-sm text-[var(--brand-text-muted)]" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
          「福島市立地適正化計画」における<br className="md:hidden" />当計画地の位置付け
        </p>
      </div>
      <p className="text-sm md:text-base leading-relaxed text-[var(--brand-text)] px-4 md:px-0" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
        全国の地方都市において、人口減少と高齢化社会は避けられない課題であり、都市計画の見直しが行われています。「コンパクト＋ネットワーク」という基本方針のもと、福島市では2025年3月に「立地適正化計画」の改訂が行われました。その中で、本計画地である福島市泉字堀之内前周辺は、「居住誘導区域」に該当しており、今後、行政の方針のもと&ldquo;将来的に人を集めるエリア&rdquo;として資産価値の維持もしくは向上の可能性が考えられる物件であるといえます。
      </p>
      <p className="text-xs md:text-sm text-[var(--brand-text-muted)] mt-4 text-center" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
        （引用：福島市WEBサイト「福島市立地適正化計画」）
      </p>
    </motion.div>
  )

  const disclaimer = (
    <div className="absolute bottom-0 right-0 z-10 p-1.5 md:p-2" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}>
      <p className="text-[7px] md:text-[9px] leading-relaxed text-white/90 md:whitespace-nowrap">
        ※掲載の現地写真は2023年11月に撮影したものに一部CG処理を施したもので<br className="md:hidden" />実際とは多少異なります。現地を示す光の柱は土地の規模や高さ等を<br className="md:hidden" />表したものではありません。主要道路や鉄道路線を一部光の線で表しています。
      </p>
      <p className="text-[7px] md:text-[9px] leading-relaxed text-white/90 mt-1">
        ※地平線周辺の山の稜線と空は、空現地写真に合成した<br className="md:hidden" />イメージで実際と異なります。
      </p>
    </div>
  )

  return (
    <section id="asset-value" className="scroll-mt-32" ref={ref}>

      {/* ── Mobile: headings over image, card below ── */}
      <div className="md:hidden">
        <div className="relative">
          <Image
            src="/images/asset-value-map.png"
            alt="福島市泉エリアの航空写真と立地適正化計画の区域図"
            width={3840}
            height={3597}
            className="w-full h-auto"
          />
          <div className="absolute inset-x-0 top-0 pt-10 px-4 text-center">
            {headingBlock}
          </div>
          {disclaimer}
        </div>
        <div className="px-4 py-8">
          {cardBlock}
        </div>
      </div>

      {/* ── Desktop: overlay layout ── */}
      <div className="hidden md:block relative overflow-hidden">
        <Image
          src="/images/asset-value-map.png"
          alt="福島市泉エリアの航空写真と立地適正化計画の区域図"
          width={3840}
          height={3597}
          className="w-full h-auto scale-105 origin-top"
        />
        {disclaimer}
        <div className="absolute inset-x-0 top-0 z-10 pt-20 lg:pt-24">
          <div className="mx-auto max-w-7xl px-4">
            {headingBlock}
            {cardBlock}
          </div>
        </div>
      </div>

    </section>
  )
}
