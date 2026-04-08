"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const SERIF_FONT = '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif'

interface LotData {
  id: number
  area: number
  points: string
  labelX: number
  labelY: number
  filled: boolean
}

const LOTS: LotData[] = [
  // Top row
  { id: 1, area: 180.80, points: "95,72 260,60 260,190 100,195", labelX: 175, labelY: 118, filled: true },
  { id: 2, area: 168.12, points: "270,58 420,50 420,175 270,185", labelX: 345, labelY: 105, filled: true },
  { id: 3, area: 177.66, points: "430,48 610,55 605,185 430,170", labelX: 520, labelY: 105, filled: true },

  // Second row
  { id: 11, area: 205.19, points: "80,210 260,205 260,330 75,340", labelX: 165, labelY: 260, filled: true },
  { id: 12, area: 168.07, points: "270,200 420,195 420,330 270,325", labelX: 345, labelY: 255, filled: true },
  { id: 4, area: 174.66, points: "620,55 735,60 730,195 615,185", labelX: 675, labelY: 115, filled: true },

  // Third row
  { id: 13, area: 175.09, points: "270,340 420,335 420,460 270,465", labelX: 345, labelY: 390, filled: true },
  { id: 5, area: 168.20, points: "440,195 610,190 610,330 440,335", labelX: 525, labelY: 255, filled: true },

  // Fourth row (white lots 9, 10 on left; lot 6 on right)
  { id: 9, area: 0, points: "270,470 370,468 370,560 270,565", labelX: 320, labelY: 510, filled: false },
  { id: 10, area: 0, points: "375,468 420,466 420,558 375,560", labelX: 398, labelY: 510, filled: false },
  { id: 6, area: 168.20, points: "440,340 610,335 610,465 440,468", labelX: 525, labelY: 395, filled: true },

  // Fifth row
  { id: 14, area: 0, points: "270,570 420,565 420,620 270,625", labelX: 345, labelY: 590, filled: false },
  { id: 7, area: 168.21, points: "440,475 610,468 610,595 440,600", labelX: 525, labelY: 528, filled: true },

  // Bottom row
  { id: 8, area: 253.59, points: "85,365 260,345 260,640 195,640 190,570 85,575", labelX: 165, labelY: 480, filled: true },
  { id: 15, area: 168.60, points: "270,630 420,625 420,710 270,715", labelX: 345, labelY: 665, filled: true },
  { id: 16, area: 0, points: "440,605 530,600 530,660 440,665", labelX: 485, labelY: 630, filled: false },
  { id: 17, area: 0, points: "535,600 610,598 610,658 535,660", labelX: 573, labelY: 625, filled: false },
]

const PARK_POINTS = "440,670 560,665 560,730 510,745 440,740"

interface DimensionArrow {
  x1: number
  y1: number
  x2: number
  y2: number
  label: string
  labelX: number
  labelY: number
}

const DIMENSIONS: DimensionArrow[] = [
  { x1: 265, y1: 195, x2: 435, y2: 195, label: "私道 約6.0m", labelX: 350, labelY: 192 },
  { x1: 615, y1: 120, x2: 615, y2: 180, label: "専用通路 約2.0m", labelX: 660, labelY: 150 },
  { x1: 430, y1: 468, x2: 430, y2: 330, label: "公道 約8.0m", labelX: 432, labelY: 400 },
]

export function LotInformation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  const prefersReducedMotion = useReducedMotion()

  const animate = (delay: number = 0) => {
    if (prefersReducedMotion) return {}
    return {
      initial: { opacity: 0, y: 30 } as const,
      animate: isInView
        ? ({ opacity: 1, y: 0 } as const)
        : ({ opacity: 0, y: 30 } as const),
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }
  }

  const lotAnimate = (index: number) => {
    if (prefersReducedMotion) return {}
    return {
      initial: { opacity: 0, scale: 0.95 } as const,
      animate: isInView
        ? ({ opacity: 1, scale: 1 } as const)
        : ({ opacity: 0, scale: 0.95 } as const),
      transition: {
        duration: 0.4,
        delay: 0.3 + index * 0.05,
        ease: "easeOut" as const,
      },
    }
  }

  return (
    <SectionWrapper id="lot-information" className="py-0 md:py-0">
      <div ref={ref} className="relative">
        <Image
          src="/images/lot-bg-texture.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />

        <div className="relative z-10 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4">
            <motion.div
              className="rounded-xl bg-white p-6 shadow-lg md:p-12"
              {...animate(0)}
            >
              {/* Header */}
              <div className="mb-10 text-center">
                <motion.p
                  className="text-sm tracking-[0.2em] text-[#6B4C3B]"
                  style={{ fontFamily: SERIF_FONT }}
                  {...animate(0.1)}
                >
                  全体区画図
                </motion.p>
                <motion.div
                  className="mx-auto mt-2 w-fit border-2 border-[var(--brand-primary)] px-8 py-2"
                  {...animate(0.15)}
                >
                  <p
                    className="text-lg tracking-[0.1em] text-[var(--brand-text-muted)] md:text-2xl"
                    style={{ fontFamily: SERIF_FONT }}
                  >
                    Real estate plot plan
                  </p>
                </motion.div>

                <motion.div {...animate(0.2)}>
                  <div className="mx-auto my-6 h-[1px] w-full max-w-md bg-[#C8A84E]" />
                  <p
                    className="text-[var(--brand-text-muted)]"
                    style={{ fontFamily: SERIF_FONT }}
                  >
                    総区画数{" "}
                    <span className="text-3xl font-bold text-[var(--brand-text)] md:text-5xl">
                      17
                    </span>
                    区画
                  </p>
                  <div className="mx-auto my-6 h-[1px] w-full max-w-md bg-[#C8A84E]" />
                  <p
                    className="text-sm text-[var(--brand-text-muted)]"
                    style={{ fontFamily: SERIF_FONT }}
                  >
                    予定販売価格帯／
                    <span className="text-xl font-bold text-[var(--brand-text)] md:text-2xl">
                      1,200
                    </span>
                    万円台~
                    <span className="text-xl font-bold text-[var(--brand-text)] md:text-2xl">
                      1,500
                    </span>
                    万円台
                  </p>
                </motion.div>
              </div>

              {/* Plot Map */}
              <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                  <svg
                    viewBox="0 0 800 780"
                    className="h-auto w-full"
                    role="img"
                    aria-label="全体区画図 - 17区画の配置図"
                  >
                    <title>全体区画図 - 17区画の配置図</title>

                    <defs>
                      <marker
                        id="arrowStart"
                        markerWidth="8"
                        markerHeight="6"
                        refX="0"
                        refY="3"
                        orient="auto"
                      >
                        <polygon points="8,0 0,3 8,6" fill="#333" />
                      </marker>
                      <marker
                        id="arrowEnd"
                        markerWidth="8"
                        markerHeight="6"
                        refX="8"
                        refY="3"
                        orient="auto"
                      >
                        <polygon points="0,0 8,3 0,6" fill="#333" />
                      </marker>
                    </defs>

                    {/* Road outline - curved road on left/bottom */}
                    <path
                      d="M120,40 L740,40 L740,760 L400,760 L400,750 C380,750 300,755 280,755 L120,755 C60,750 40,700 35,650 L30,400 C30,300 50,200 70,120 C80,70 100,45 120,40 Z"
                      fill="#D8D8D8"
                    />
                    {/* Inner road area between lot groups */}
                    <rect x="260" y="190" width="180" height="25" fill="#D8D8D8" />
                    <rect x="425" y="180" width="20" height="430" fill="#D8D8D8" />

                    {/* Lot polygons */}
                    {LOTS.map((lot, index) => (
                      <motion.g
                        key={lot.id}
                        style={{
                          transformOrigin: `${lot.labelX}px ${lot.labelY}px`,
                        }}
                        {...lotAnimate(index)}
                      >
                        <polygon
                          points={lot.points}
                          fill={lot.filled ? "#E8E8C8" : "#FFFFFF"}
                          stroke="#AAAAAA"
                          strokeWidth="1.5"
                          aria-label={`区画${lot.id}${lot.area ? `: ${lot.area}㎡` : ""}`}
                        />
                        <text
                          x={lot.labelX}
                          y={lot.labelY}
                          textAnchor="middle"
                          fontWeight="700"
                          fontSize="18"
                          fill="#333"
                        >
                          {lot.id}
                        </text>
                        {lot.area > 0 && (
                          <text
                            x={lot.labelX}
                            y={lot.labelY + 20}
                            textAnchor="middle"
                            fontSize="11"
                            fill="#666"
                          >
                            {lot.area.toFixed(2)}㎡
                          </text>
                        )}
                      </motion.g>
                    ))}

                    {/* Park area */}
                    <motion.g {...lotAnimate(LOTS.length)}>
                      <polygon
                        points={PARK_POINTS}
                        fill="#8BC34A"
                        stroke="#6B9B30"
                        strokeWidth="1.5"
                      />
                      <text
                        x="500"
                        y="710"
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="700"
                        fill="#FFFFFF"
                      >
                        公園
                      </text>
                    </motion.g>

                    {/* Dimension arrows */}
                    {DIMENSIONS.map((dim) => (
                      <g key={dim.label}>
                        <line
                          x1={dim.x1}
                          y1={dim.y1}
                          x2={dim.x2}
                          y2={dim.y2}
                          stroke="#333"
                          strokeWidth="1"
                          markerStart="url(#arrowStart)"
                          markerEnd="url(#arrowEnd)"
                        />
                        <text
                          x={dim.labelX}
                          y={dim.labelY}
                          textAnchor="middle"
                          fontSize="9"
                          fill="#333"
                          fontWeight="500"
                        >
                          {dim.label}
                        </text>
                      </g>
                    ))}

                    {/* 区画図 badge */}
                    <rect
                      x="85"
                      y="42"
                      width="55"
                      height="24"
                      rx="2"
                      fill="#555"
                    />
                    <text
                      x="112"
                      y="58"
                      textAnchor="middle"
                      fontSize="11"
                      fill="#FFF"
                      fontWeight="600"
                    >
                      区画図
                    </text>

                    {/* Dot markers at key corners */}
                    {[
                      [260, 190],
                      [420, 175],
                      [610, 185],
                      [265, 330],
                      [440, 468],
                      [85, 575],
                      [260, 640],
                    ].map(([cx, cy], i) => (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="4"
                        fill="#333"
                      />
                    ))}

                    {/* North compass */}
                    <g>
                      <text
                        x="660"
                        y="730"
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight="700"
                        fill="#333"
                      >
                        N
                      </text>
                      <polygon
                        points="660,735 655,755 660,748 665,755"
                        fill="#333"
                      />
                      <circle
                        cx="660"
                        cy="748"
                        r="14"
                        fill="none"
                        stroke="#333"
                        strokeWidth="1.5"
                      />
                    </g>

                    {/* ゴミ集積場 label */}
                    <text
                      x="590"
                      y="745"
                      textAnchor="middle"
                      fontSize="9"
                      fill="#666"
                    >
                      ゴミ集積場
                    </text>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
