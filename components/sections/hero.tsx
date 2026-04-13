"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

const HERO_IMAGES = [
  { src: "/images/hero-cityscape.png", alt: "福島市の街並みと山々の風景" },
  { src: "/images/hero-family-play.png", alt: "肩車をして遊ぶ家族" },
  { src: "/images/hero-family-walk.png", alt: "橋の近くを散歩する家族" },
  { src: "/images/hero-cycling.png", alt: "青空の下でサイクリングを楽しむ人々" },
  { src: "/images/hero-cooking.png", alt: "一緒に料理を楽しむ夫婦" },
  { src: "/images/hero-nightscape.png", alt: "福島市の美しい夜景" },
]

// Desktop: static cells, no cycling
const DESKTOP_CELLS = [
  { index: 0, className: "md:rounded-tl-3xl" },
  { index: 1, className: "" },
  { index: 2, className: "md:rounded-tr-3xl" },
  { index: 3, className: "md:rounded-bl-3xl" },
  { index: 4, className: "" },
  { index: 5, className: "md:rounded-br-3xl" },
]

const INTERVAL_MS = 3500

export function Hero() {
  const [cycle, setCycle] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const id = setInterval(() => {
      setCycle(c => (c + 1) % 3)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative md:px-8 md:pt-6">
      <div className="relative">
        {/* Mobile: 2 stacked images with label overlaid on top */}
        <div className="md:hidden relative">
          {/* Slot 0 — slides in from right */}
          <div className="aspect-[3/2] relative overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={cycle}
                className="absolute inset-0"
                initial={prefersReducedMotion ? { opacity: 0 } : { x: "100%", opacity: 0 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { x: 0, opacity: 1 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { x: "-100%", opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image src={HERO_IMAGES[cycle * 2].src} alt={HERO_IMAGES[cycle * 2].alt} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slot 1 — slides in from left */}
          <div className="aspect-[3/2] relative overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={cycle}
                className="absolute inset-0"
                initial={prefersReducedMotion ? { opacity: 0 } : { x: "-100%", opacity: 0 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { x: 0, opacity: 1 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { x: "100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
              >
                <Image src={HERO_IMAGES[cycle * 2 + 1].src} alt={HERO_IMAGES[cycle * 2 + 1].alt} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hero label — absolute overlay centered over both images */}
          <div className="absolute inset-0 flex items-center justify-start pl-3 pr-8 pointer-events-none">
            <div className="bg-white py-3 w-full">
              <div className="bg-[#9e8c5a] py-2 px-2 mx-3 text-center">
                <p className="text-white font-bold tracking-widest whitespace-nowrap" style={{ fontSize: 'clamp(8px, 2.4vw, 12px)', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                  福島市の将来を牽引する街「泉」という選択<sup className="text-[0.5em] align-super">※</sup>
                </p>
              </div>
              <div className="text-center py-1">
                <h1 className="font-bold" style={{ letterSpacing: '0.15em', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                  <span className="text-[#9e8c5a]" style={{ fontSize: 'clamp(13px, 4vw, 18px)' }}>スマートハイムシティ</span>
                  <span className="text-[#9e8c5a]" style={{ fontSize: 'clamp(17px, 5.5vw, 24px)' }}>泉</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: static 3×2 grid, no cycling */}
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 md:gap-5">
          {DESKTOP_CELLS.map((cell, i) => (
            <div key={i} className={`relative aspect-[3/2] overflow-hidden ${cell.className}`}>
              <Image src={HERO_IMAGES[cell.index].src} alt={HERO_IMAGES[cell.index].alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Center text overlay */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center md:[transform:translateX(-170px)]">
          {/* White background container — 10px larger than inner content */}
          <div className="bg-white p-[17px]">
            {/* Gold banner */}
            <div className="bg-[#9e8c5a] py-0.5 md:py-1.5 px-3 md:px-14 text-center md:whitespace-nowrap">
              <p className="text-white font-bold tracking-widest" style={{ fontSize: 'clamp(0.65rem, 3.2vw, 2.5rem)', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                福島市の将来を牽引する街「泉」という選択<sup className="text-[0.5em] align-super">※</sup>
              </p>
            </div>
            {/* Title strip — same width, inside the white box */}
            <div className="py-0 md:py-0.5 text-center md:whitespace-nowrap">
              <h1 className="font-bold" style={{ letterSpacing: '0.15em', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                <span className="text-[#9e8c5a]" style={{ fontSize: 'clamp(0.8rem, 3.8vw, 3rem)' }}>
                  スマートハイムシティ
                </span>
                <span className="text-[#9e8c5a]" style={{ fontSize: 'clamp(1rem, 5vw, 4rem)' }}>
                  泉
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2 text-left md:text-right text-black px-1 md:whitespace-nowrap text-[10px] md:text-inherit" style={{ fontSize: 'clamp(10px, 1.6vw, 22px)', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
        ※福島市の「立地適正化計画」にて、当計画地は「居住誘導区域」として指定されています。
      </p>

      {/* Sales banner */}
      <div className="mt-4 bg-[#b49033] py-4 md:py-5 px-4 md:px-8 w-screen md:-mx-8">
        <div className="flex items-center justify-center text-white" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
          <span className="text-xl md:text-4xl lg:text-5xl font-bold tracking-[0.05em]">第1期　建築条件付土地販売開始!</span>
        </div>
      </div>
    </section>
  )
}
