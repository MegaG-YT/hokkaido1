"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { SectionDivider } from "@/components/shared/section-divider"
import { SectionWrapper } from "@/components/shared/section-wrapper"

export function PropertyOverview() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SectionDivider title="物件概要" />
      <SectionWrapper id="property-overview" className="bg-[#FAF0E4]">
        <div className="mx-auto max-w-7xl px-4" ref={ref}>
          {/* Section heading */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-base md:text-lg lg:text-xl tracking-[0.3em] text-[var(--brand-text-muted)] mb-3">
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
              {/* 全体概要 */}
              <div>
                <h3 className="font-bold mb-2">【スマートハイムシティ泉 全体概要】</h3>
                <p>
                  ◎所在地／福島県福島市泉字堀ノ内前10番1他地内（カーナビマップコード：76 069 699*81）◎交通／福島交通飯坂線「岩代清水」駅まで徒歩3〜4分（約180〜260m）◎私道負担／有：（区画1・2・3・4・5・11・12：262.42㎡のうち持分各8分の1）◎総区画数／17区画（当社区画15区画、すべての予定販売宅地を一括して販売するか、また数期に分けて販売するか確定しておりません。）◎用途地域／第一種住居地域◎建ぺい率／60%◎容積率／200%◎法令制限／宅地造成及び特定盛土規制法◎開発許可番号／福島市指令開開第14号（2025年6月3日）◎開発面積／4022.77㎡◎道路幅員／公道約6.0m・私道約6.0m（アスファルト舗装）
                </p>
              </div>

              {/* 予告広告 */}
              <div>
                <h3 className="font-bold mb-2">〈予告広告〉</h3>
              </div>

              {/* 分譲地概要 */}
              <div>
                <h3 className="font-bold mb-2">【分譲地概要】</h3>
                <p>
                  ◎販売区画数／未定◎予定販売価格帯／1,200万円台〜1,500万円台◎予定最多販売価格帯／1,300万円台（9区画）◎区画面積／168.07㎡〜253.59㎡◎地目／宅地（造成完了後）◎造成完了時期／2026年2月予定◎引渡時期／2026年4月予定◎設備／東北電力、福島市上下水道、個別プロパンガス（オール電化を推奨します）※水道加入金の負担165,000円（税込）があります◎備考／造成完了後、面積が変更となる場合があります。区画8の面積には敷地延長部分77.23㎡が含まれます。◎建築ガイドライン／建築にあたり、当販売団地におけるガイドラインに沿ったご提案をさせていただきますのでご理解とご協力をお願いいたします。
                </p>
              </div>

              {/* 販売開始予定 */}
              <div>
                <p className="font-bold mb-2">販売開始予定時期：2026年4月予定</p>
                <p>
                  宅地分譲に関しまして、販売を開始するまでは、契約又は予約の申込みは一切応じられません。すべての予定販売宅地を一括して販売するか、また数期に分けて販売するか確定しておりません。また、申込みの順位の確保に関する措置は講じられません。予めご了承ください。※当初販売開始時期を令和8年3月下旬として広告しましたが、上記の通り令和8年4月に変更となりました。訂正してお詫びいたします。
                </p>
              </div>

              {/* 建築条件付宅地分譲 */}
              <div>
                <p>
                  【建築条件付宅地分譲】この土地は、土地売買契約後3ヶ月以内にセキスイハイム東北株式会社と住宅の建物請負契約を締結して頂くことを条件として販売いたします。この期間内に住宅を建築しないことが確定したとき、または住宅の建物請負契約が成立しなかった場合には、土地売買契約は白紙となり、受領した金員は無利息にて全額返金いたします。
                </p>
              </div>

              {/* 取引形態 */}
              <div>
                <h3 className="font-bold mb-2">【取引形態／売主】</h3>
                <p>
                  売主・広告主／セキスイハイム東北株式会社 福島支店 福島県郡山市島2丁目50番15号 tel.024-932-8160 宅地建物取引業免許：国土交通大臣（9）第3749号 建設業者許可番号：国土交通大臣許可（特-5）第13887号 （公社）福島県宅地建物取引業協会会員東北地区不動産公正取引協議会加盟
                </p>
              </div>

              {/* 情報更新日 */}
              <div>
                <p>情報更新日：2026年3月31日</p>
                <p>次回更新予定日：2026年4月10日</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  )
}
