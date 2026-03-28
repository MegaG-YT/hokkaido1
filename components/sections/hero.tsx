"use client"

import { motion, useReducedMotion } from "framer-motion"

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden">
      {/* Image mosaic grid */}
      <div className="grid grid-cols-3 grid-rows-[1fr_auto_1fr] gap-1 md:gap-2">
        {/* Top row */}
        <div className="aspect-[4/3] bg-gray-300 rounded-sm" />
        <div className="row-span-2 aspect-[3/4] bg-gray-200 rounded-sm" />
        <div className="aspect-[4/3] bg-gray-300 rounded-sm" />

        {/* Overlaid banner + title row */}
        <div className="col-span-3 flex flex-col items-center py-4 md:py-6">
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

        {/* Bottom row */}
        <div className="aspect-[4/3] bg-gray-300 rounded-sm" />
        <div className="aspect-[4/3] bg-gray-200 rounded-sm" />
        <div className="aspect-[4/3] bg-gray-300 rounded-sm" />
      </div>
    </section>
  )
}
