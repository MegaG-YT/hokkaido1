"use client"

import Image from "next/image"

export function RoomPlan() {
  return (
    <section id="room-plan" className="scroll-mt-32 relative w-full aspect-[1920/5666]">
      <Image
        src="/images/room-plan-bg.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-16 md:pt-24 space-y-8 md:space-y-12">
        {/* Section heading */}
        <div className="text-center">
          <p
            className="text-sm md:text-base tracking-[0.3em] text-[#1a1a1a] mb-3"
            style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
          >
            間取り
          </p>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a]"
            style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
          >
            Room plan
          </h2>
        </div>

        {/* A棟 */}
        <Image
          src="/images/room-plan-a.webp"
          alt="ROOM PLAN A - 間取り図"
          width={1321}
          height={1634}
          className="mx-auto h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1024px"
        />

        {/* B棟 */}
        <Image
          src="/images/room-plan-b.webp"
          alt="ROOM PLAN B - 間取り図"
          width={1320}
          height={1681}
          className="mx-auto h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1024px"
        />

        {/* C棟 */}
        <Image
          src="/images/room-plan-c.webp"
          alt="ROOM PLAN C - 間取り図"
          width={1654}
          height={2339}
          className="mx-auto h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1024px"
        />
      </div>
    </section>
  )
}
