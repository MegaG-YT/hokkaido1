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
        <Image
          src="/images/room-plan-a.webp"
          alt="ROOM PLAN A - 間取り図"
          width={1321}
          height={1634}
          className="mx-auto h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1024px"
        />
        <Image
          src="/images/room-plan-b.webp"
          alt="ROOM PLAN B - 間取り図"
          width={1320}
          height={1574}
          className="mx-auto h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1024px"
        />
      </div>
    </section>
  )
}
