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
        <Image
          src="/images/room-plan-a.webp"
          alt="ROOM PLAN A - 間取り図"
          width={1654}
          height={2339}
          className="mx-auto h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1024px"
        />

        {/* B棟 */}
        <Image
          src="/images/room-plan-b.webp"
          alt="ROOM PLAN B - 間取り図"
          width={1654}
          height={2339}
          className="mx-auto h-auto w-full"
          sizes="(max-width: 768px) 100vw, 1024px"
        />

        {/* C棟 */}
        <div>
          <div className="relative">
            <div className="absolute top-[167px] left-1/2 -translate-x-1/2 z-10">
              <span
                className="border border-gray-400 px-6 py-2 text-sm md:text-base tracking-[0.2em] text-gray-500"
                style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
              >
                間取図
              </span>
            </div>
            <div className="absolute top-8 left-4 md:left-8 z-10 flex items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-white text-base md:text-lg font-bold tracking-widest" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>区画</span>
                <div className="bg-white rounded-lg px-3 md:px-5 py-1.5 md:py-2">
                  <span className="text-3xl md:text-5xl font-bold text-[#1b3a6b]" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>C棟</span>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-4 scale-[1.2] origin-left">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="border border-white/50 px-2 py-1 text-center">
                    <span className="text-white text-[10px] md:text-xs leading-tight block tracking-wider" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>建物</span>
                    <span className="text-white text-[10px] md:text-xs leading-tight block tracking-wider" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>面積</span>
                  </div>
                  <span className="text-white text-2xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                    97.48<span className="text-lg md:text-2xl">㎡</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="border border-white/50 px-2 py-1 text-center">
                    <span className="text-white text-[10px] md:text-xs leading-tight block tracking-wider" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>区画</span>
                    <span className="text-white text-[10px] md:text-xs leading-tight block tracking-wider" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>面積</span>
                  </div>
                  <span className="text-white text-2xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                    180.81<span className="text-lg md:text-2xl">㎡</span>
                  </span>
                </div>
              </div>
            </div>
            {/* 免責文 — 右側のみ */}
            <div className="absolute bottom-[520px] right-[calc(2%+125px)] z-10 w-[24%]">
              <p
                className="text-[7px] md:text-[8px] text-gray-500 text-left leading-relaxed"
                style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
              >
                ※掲載の間取り図は、計画段階の図面を基に描き起こしたもので、実際とは異なる場合があります。家具・備品等は演出用のイメージであり、販売価格には含まれません。掲載の面積は登記簿面積と異なる場合があります。日照・通風・眺望は、季節・時刻・周辺環境により異なります。また、駐車場に記載の車両はイメージであり、販売価格には含まれません。実際の駐車可能車種・サイズには制限があり、道路幅員や車両の形状等により駐車できない場合があります。
              </p>
            </div>
            {/* 完成予想バース — 中央固定 */}
            <div className="absolute bottom-[400px] left-1/2 -translate-x-1/2 z-10">
              <span
                className="border border-gray-400 px-6 py-2 text-sm md:text-base tracking-[0.2em] text-gray-500"
                style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
              >
                完成予想バース
              </span>
            </div>
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 z-10 w-[90%]">
              <p
                className="text-[7px] md:text-[8px] text-gray-500 text-left leading-relaxed"
                style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
              >
                ※掲載の完成予想CGは、計画段階の図面を基に描き起こしたもので実際とは異なります。尚、植栽は実際に植樹する樹形、枝ぶり、葉や花の色合いとは異なる場合があり、特定の季節の状況を示すものではありません。竣工時には完成予想CG程度には成長しておりません。予めご了承ください。施工上やむをえない変更が生じた場合は建物竣工時の状態を優先します。販売価格に家具・照明・調度品・エアコン・備品・車等は含まれておりません。
              </p>
            </div>
            <Image
              src="/images/room-plan-c.webp"
              alt="ROOM PLAN C - 間取り図"
              width={1320}
              height={1637}
              className="mx-auto h-auto w-full"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
