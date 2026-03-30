"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

// 6 images total. Mobile shows 2 slots cycling through all 6 in pairs (3 states).
// Desktop shows all 6 cells simultaneously.
// Replace bg-* placeholders with next/image when assets are ready.
const IMAGES = [
  "bg-gray-300",
  "bg-gray-200",
  "bg-gray-300",
  "bg-gray-300",
  "bg-gray-200",
  "bg-gray-300",
]

// Desktop: static cells, no cycling
const DESKTOP_CELLS = [
  { bg: "bg-gray-300", className: "md:rounded-tl-3xl" },
  { bg: "bg-gray-200", className: "" },
  { bg: "bg-gray-300", className: "md:rounded-tr-3xl" },
  { bg: "bg-gray-300", className: "md:rounded-bl-3xl" },
  { bg: "bg-gray-200", className: "" },
  { bg: "bg-gray-300", className: "md:rounded-br-3xl" },
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
                className={`absolute inset-0 ${IMAGES[cycle * 2]}`}
                initial={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
                animate={prefersReducedMotion ? { opacity: 1 } : { x: 0 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { x: "-100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          {/* Slot 1 — slides in from left */}
          <div className="aspect-[3/2] relative overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={cycle}
                className={`absolute inset-0 ${IMAGES[cycle * 2 + 1]}`}
                initial={prefersReducedMotion ? { opacity: 0 } : { x: "-100%" }}
                animate={prefersReducedMotion ? { opacity: 1 } : { x: 0 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          {/* Hero label — absolute overlay centered over both images */}
          <div className="absolute inset-0 flex items-center justify-start pl-6 pointer-events-none">
            <div className="bg-white py-3 w-full">
              <div className="bg-[#9e8c5a] py-2 px-4 mx-4 text-center">
                <p className="text-white font-bold tracking-widest text-xs whitespace-nowrap" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                  福島市の将来を牽引する街「泉」という選択<sup className="text-[0.5em] align-super">※</sup>
                </p>
              </div>
              <div className="text-center py-1">
                <h1 className="font-bold" style={{ letterSpacing: '0.15em', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                  <span className="text-[#9e8c5a] text-lg">スマートハイムシティ</span>
                  <span className="text-[#333333] text-2xl">泉</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: static 3×2 grid, no cycling */}
        <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 md:gap-5">
          {DESKTOP_CELLS.map((cell, i) => (
            <div key={i} className={`aspect-[3/2] ${cell.bg} ${cell.className}`} />
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
                <span className="text-[#333333]" style={{ fontSize: 'clamp(1rem, 5vw, 4rem)' }}>
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
      <div className="mt-4 bg-[#635B51] py-4 md:py-5 px-4 md:px-8 overflow-hidden">
        <div className="mx-auto max-w-6xl flex items-center justify-center gap-4 md:gap-6 text-white whitespace-nowrap" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
          <span className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">新発売</span>
          <span className="border-l border-white/40 h-8 md:h-12" />
          <span className="flex items-stretch gap-2">
            <span className="flex flex-col justify-center gap-3 text-xs md:text-sm lg:text-base text-center leading-none">
              <span>建　築</span>
              <span>条件付</span>
            </span>
            <span className="text-2xl md:text-4xl lg:text-5xl font-bold">全15区画</span>
          </span>
          <span className="border-l border-white/40 h-8 md:h-12" />
          <span className="text-2xl md:text-4xl lg:text-5xl font-bold">
            1,200<span className="text-sm md:text-xl font-normal">万円台</span>〜1,500<span className="text-sm md:text-xl font-normal">万円台</span>
          </span>
        </div>
      </div>
    </section>
  )
}
