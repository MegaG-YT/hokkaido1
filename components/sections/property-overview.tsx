"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { CtaButtons } from "@/components/shared/cta-buttons"

export function PropertyOverview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <section
        id="property-overview"
        className="scroll-mt-32 py-10 md:py-16"
        style={{
          backgroundImage: "url('/images/outline-section-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FAF0E4",
        }}
      >
        <div className="mx-auto max-w-7xl px-4" ref={ref}>
          {/* Section heading */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-2xl md:text-lg lg:text-xl tracking-[0.3em] text-[#1a1a1a] font-bold mb-3" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
              物件概要
            </p>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-serif"
              style={{ color: "var(--brand-accent)" }}
            >
              Outline
            </h2>
          </div>

          {/* White content box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeOut" }
            }
            className="bg-white rounded-lg p-6 md:p-10 shadow-sm"
          >
            <div className="space-y-8 text-xs md:text-sm leading-relaxed text-[var(--brand-text)]">
              {/* 分譲地全体概要 */}
              <div>
                <h3 className="font-bold mb-2">【分譲地全体概要】</h3>
                <ul className="space-y-1">
                  <li>◎所在地／福島県福島市泉字堀ノ内前10番13他（カーナビマップコード：76 069699*81）</li>
                  <li>◎交通／福島交通飯坂線「岩代清水」駅まで徒歩3～4分（約260～270ｍ）</li>
                  <li>◎私道負担／有：262.42㎡のうち持分各8分の1</li>
                  <li>◎総区画数／17区画（当社区画15区画、第1期:2区画、第2期:未定）</li>
                  <li>◎用途地域／第一種住居地域</li>
                  <li>◎建ぺい率／60%</li>
                  <li>◎容積率／200%</li>
                  <li>◎法令制限／宅地造成及び特定盛土規制法</li>
                  <li>◎開発許可番号／福島市指令開開第14号（2025年6月3日）</li>
                  <li>◎開発面積／4022.77㎡</li>
                  <li>◎道路幅員／公道約6.0ｍ・私道約6.0ｍ（アスファルト舗装）</li>
                  <li>◎取引形態／売主</li>
                  <li>◎売主・広告主／セキスイハイム東北株式会社 福島支店 福島県郡山市島2丁目50番15号 tel.024-932-8160 宅地建物取引業免許：国土交通大臣（9）第3749号 建設業者許可番号：国土交通大臣許可（特-5）第13887号 （公社）福島県宅地建物取引業協会会員東北地区不動産公正取引協議会加盟</li>
                </ul>
              </div>

              {/* 建築条件付き土地概要 */}
              <div>
                <h3 className="font-bold mb-2">【建築条件付き土地概要】</h3>
                <ul className="space-y-1">
                  <li>◎販売区画数／2区画</li>
                  <li>◎販売価格／12,700,000～13,200,000円</li>
                  <li>◎区画面積／167.98㎡～177.59㎡</li>
                  <li>◎地目／宅地</li>
                  <li>◎造成完了時期／2026年2月</li>
                  <li>◎引渡時期／即</li>
                  <li>◎設備／東北電力、福島市上下水道、個別プロパンガス※水道加入金の負担165,000円（税込）があります</li>
                  <li>◎建築ガイドライン／建築にあたり、当販売団地におけるガイドラインに沿ったご提案をさせていただきますのでご理解とご協力をお願いいたします。</li>
                  <li>◎建築条件付宅地分譲／この土地は、土地売買契約後3ヶ月以内にセキスイハイム東北株式会社と住宅の建物請負契約を締結して頂くことを条件として販売いたします。この期間内に住宅を建築しないことが確定したとき、または住宅の建物請負契約が成立しなかった場合には、土地売買契約は白紙となり、受領した金員は無利息にて全額返金いたします。</li>
                </ul>
              </div>

              {/* 情報更新日 */}
              <div>
                <p>情報更新日：2026年4月14日</p>
                <p>次回更新予定日：2026年4月27日</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 md:mt-16">
            <CtaButtons />
          </div>
        </div>
      </section>
    </>
  )
}
