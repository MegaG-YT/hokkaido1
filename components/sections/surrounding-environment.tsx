"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { CtaButtons } from "@/components/shared/cta-buttons"

type Category = "商業施設" | "鉄道駅" | "教育機関・学校" | "病院・クリニック" | "公共機関・金融機関"

const CATEGORY_HEX: Record<Category, string> = {
  "商業施設":           "#b8924a",
  "鉄道駅":             "#2d5f8a",
  "教育機関・学校":     "#5a7a5c",
  "病院・クリニック":   "#8b5a52",
  "公共機関・金融機関": "#5a4a7a",
}

const SIDEBAR_FACILITIES: { src: string; name: string; distance: string; objectPosition: string; category: Category }[] = [
  { src: "/images/location-york-benimaru.webp", name: "ヨークベニマル", distance: "約490〜560m（徒歩7分）", objectPosition: "center", category: "商業施設" },
  { src: "/images/location-kawachi.webp", name: "カワチ薬品 福島西店", distance: "約770〜840m（徒歩11分）", objectPosition: "top", category: "商業施設" },
  { src: "/images/location-seven-eleven.webp", name: "セブンイレブン", distance: "約700〜770m（徒歩10分）", objectPosition: "bottom", category: "商業施設" },
]

const GRID_FACILITIES: { src: string; name: string; distance: string; category: Category }[] = [
  { src: "/images/location-iwashiro-shimizu-station.webp", name: "福島交通飯坂線「岩代清水」駅", distance: "約200〜270m（徒歩4分）", category: "鉄道駅" },
  { src: "/images/location-shimizu-elementary.webp", name: "福島市立清水小学校", distance: "約800〜870m（徒歩11分）", category: "教育機関・学校" },
  { src: "/images/location-shimizu-middle-school.webp", name: "福島市立清水中学校", distance: "約1,530〜1,600m（徒歩20分）", category: "教育機関・学校" },
  { src: "/images/location-izumi-post-office.webp", name: "泉郵便局", distance: "約390〜460m（徒歩5〜6分）", category: "公共機関・金融機関" },
  { src: "/images/location-sakai-eye-clinic.webp", name: "さかい眼科", distance: "約220〜290m（徒歩3〜4分）", category: "病院・クリニック" },
  { src: "/images/location-kitamura-orthopedics.webp", name: "きたむら整形外科", distance: "約290〜360m（徒歩3〜4分）", category: "病院・クリニック" },
  { src: "/images/location-shimizu-branch-office.webp", name: "福島市役所清水支所", distance: "約690〜760m（徒歩9〜10分）", category: "公共機関・金融機関" },
  { src: "/images/location-odanikonioko-clinic.webp", name: "おだニコニコこどもクリニック", distance: "約340〜410m（徒歩5〜6分）", category: "病院・クリニック" },
]

export function SurroundingEnvironment() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px 0px 0px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SectionWrapper id="surrounding-environment" className="pt-0 md:pt-0">
        <div
          className="relative py-10 md:py-16"
          style={{ backgroundImage: "url(/images/location-bg-texture.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="mx-auto max-w-7xl px-4" ref={ref}>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
              className="text-center mb-0 md:mb-12"
            >
              <p className="text-lg md:text-2xl text-[#1a1a1a] leading-relaxed" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                駅も、買い物も、医療も。
              </p>
              <p className="text-lg md:text-2xl text-[#1a1a1a] leading-relaxed mb-6" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                生活利便施設が500m圏内に。
              </p>
              <h2
                className="text-4xl md:text-6xl lg:text-7xl tracking-[0.015em] text-[#b8a468] mb-8 md:mb-12"
                style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
              >
                LOCATION
              </h2>
              <p className="text-base md:text-xl text-[#3a3a3a] leading-relaxed md:mb-4" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                「岩代清水」駅のすぐ近くに位置し、
              </p>
              <p className="text-base md:text-xl text-[#3a3a3a] leading-relaxed md:mb-4" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                徒歩500m圏内に商業施設や医療施設がそろうロケーション
              </p>
              <p className="text-base md:text-xl text-[#3a3a3a] leading-relaxed" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                将来を見据えた、暮らしやすさが魅力の分譲地です。
              </p>
            </motion.div>

            {/* Map + sidebar layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-4 mb-2 md:mb-12 mt-4 md:mt-0 pb-4 md:pb-0"
            >
              {/* Map */}
              <div className="w-full md:relative md:w-3/4 md:aspect-[4/3]">
                <Image
                  src="/images/location-map.webp"
                  alt="スマートハイムシティ泉周辺の地図"
                  width={1200}
                  height={900}
                  className="w-full h-auto md:absolute md:inset-0 md:w-full md:h-full md:object-contain"
                />
              </div>
              {/* Sidebar facilities */}
              <div className="flex flex-row w-full md:flex-col gap-3 md:gap-4 md:w-1/4 md:px-0">
                {SIDEBAR_FACILITIES.map((facility) => (
                  <div key={facility.name} className="flex-1 md:flex-none md:w-auto rounded-lg p-2" style={{ backgroundColor: `${CATEGORY_HEX[facility.category]}55` }}>
                    <div className="relative w-full h-[60px] md:h-auto md:aspect-[4/3] overflow-hidden rounded">
                      <Image src={facility.src} alt={facility.name} fill className="object-cover" style={{ objectPosition: facility.objectPosition }} />
                    </div>
                    <div className="px-1 py-1.5">
                      <p className="text-[10px] md:text-sm text-[var(--brand-text)] font-bold">{facility.name}</p>
                      <p className="text-[10px] md:text-xs text-[var(--brand-text-muted)]">{facility.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Facility photo grid — 4 columns, 2 rows */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {GRID_FACILITIES.map((facility) => (
                <div key={facility.name} className="rounded-lg p-2" style={{ backgroundColor: `${CATEGORY_HEX[facility.category]}55` }}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded">
                    <Image src={facility.src} alt={facility.name} fill className="object-cover" />
                  </div>
                  <div className="px-1 py-1.5">
                    <p className="text-[10px] md:text-sm text-[var(--brand-text)] font-bold">{facility.name}</p>
                    <p className="text-[9px] md:text-xs text-[var(--brand-text-muted)]">{facility.distance}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Footnotes */}
            <div className="mt-8 text-[10px] md:text-xs text-[var(--brand-text-muted)] space-y-1 text-right">
              <p>※所要時間は徒歩80m／分で算出しています。</p>
              <p>※車による所要時間は、通常（平日正午頃）要する時間です。</p>
              <p>※掲載の写真は2025年11月に撮影されたものです。</p>
            </div>

            <CtaButtons className="mt-12 md:mt-16" />
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
