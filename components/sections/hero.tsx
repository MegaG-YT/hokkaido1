"use client"

import { motion, useReducedMotion } from "framer-motion"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative">
      {/* Top row — 3 images */}
      <div className="grid grid-cols-3 gap-1 md:gap-2">
        <div className="aspect-[4/3] bg-gray-300 rounded-tl-2xl md:rounded-tl-3xl" />
        <div className="aspect-[4/3] bg-gray-200" />
        <div className="aspect-[4/3] bg-gray-300 rounded-tr-2xl md:rounded-tr-3xl" />
      </div>

      {/* Center text area */}
      <div className="py-4 md:py-6 flex flex-col items-center">
        <div className="w-full max-w-3xl mx-auto px-4">
          <div className="bg-[var(--brand-nav)]/80 py-3 md:py-4 px-6 md:px-8 text-center">
            <p className="text-white text-sm md:text-base lg:text-lg">
              福島市の将来を牽引する街「泉」という選択※
            </p>
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }
          className="mt-3 md:mt-4 text-2xl md:text-4xl lg:text-5xl font-bold text-[var(--brand-primary)] text-center"
        >
          スマートハイムシティ泉
        </motion.h1>
      </div>

      {/* Bottom row — 3 images */}
      <div className="grid grid-cols-3 gap-1 md:gap-2">
        <div className="aspect-[4/3] bg-gray-300 rounded-bl-2xl md:rounded-bl-3xl" />
        <div className="aspect-[4/3] bg-gray-200" />
        <div className="aspect-[4/3] bg-gray-300 rounded-br-2xl md:rounded-br-3xl" />
      </div>
    </section>
  )
}
