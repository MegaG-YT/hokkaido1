"use client"

import Image from "next/image"

export function RoomPlan() {
  return (
    <section id="room-plan" className="scroll-mt-32 relative w-full" style={{ aspectRatio: "1920 / 5666" }}>
      <Image
        src="/images/room-plan-bg.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-16 md:pt-24 space-y-16 md:space-y-24">
        {/* A棟 */}
        <div>
          <div
            className="flex items-center gap-4 md:gap-6 px-4 md:px-8 py-4 md:py-5 mb-0"
            style={{ background: "linear-gradient(135deg, #1e4a8a 0%, #0f2548 60%, #1b3a6b 100%)" }}
          >
            {/* 区画 + A棟 box */}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <span className="text-white/70 text-[10px] md:text-xs tracking-widest" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>区画</span>
              <div className="bg-white px-3 md:px-5 py-1.5 md:py-2">
                <span className="text-3xl md:text-5xl font-bold text-[#1b3a6b]" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>A棟</span>
              </div>
            </div>

            {/* 建物面積 */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="border border-white/50 px-2 py-1 text-center">
                <span className="text-white text-[10px] md:text-xs leading-tight block tracking-wider" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>建物</span>
                <span className="text-white text-[10px] md:text-xs leading-tight block tracking-wider" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>面積</span>
              </div>
              <span className="text-white text-2xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                99.34<span className="text-lg md:text-2xl">㎡</span>
              </span>
            </div>

            {/* Divider */}
            <div className="self-stretch w-px bg-cyan-400/70 mx-1 md:mx-2" />

            {/* 区画面積 */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="border border-white/50 px-2 py-1 text-center">
                <span className="text-white text-[10px] md:text-xs leading-tight block tracking-wider" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>区画</span>
                <span className="text-white text-[10px] md:text-xs leading-tight block tracking-wider" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>面積</span>
              </div>
              <span className="text-white text-2xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                227.24<span className="text-lg md:text-2xl">㎡</span>
              </span>
            </div>
          </div>
          <Image
            src="/images/room-plan-a.webp"
            alt="ROOM PLAN A - 間取り図"
            width={1321}
            height={1634}
            className="mx-auto h-auto w-full"
            sizes="(max-width: 768px) 100vw, 1024px"
          />
        </div>

        <Image
          src="/images/room-plan-b.webp"
          alt="ROOM PLAN B - 間取り図"
          width={1320}
          height={1574}
          className="mx-auto h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1024px"
        />
        <Image
          src="/images/room-plan-c.webp"
          alt="ROOM PLAN C - 間取り図"
          width={1320}
          height={1637}
          className="mx-auto h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1024px"
        />
      </div>
    </section>
  )
}
