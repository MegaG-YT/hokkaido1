"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, ExternalLink } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const NAV_ITEMS = [
  { label: "資産価値としての可能性", id: "asset-value" },
  { label: "周辺環境", id: "surrounding-environment" },
  { label: "アクセス", id: "access" },
  { label: "区画情報", id: "lot-information" },
  { label: "物件概要", id: "property-overview" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Image
          src="/images/logo.svg"
          alt="セキスイハイム東北"
          width={252}
          height={45}
          priority
        />

        {/* Desktop external link */}
        <a
          href="https://www.heim-tohoku.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-[var(--brand-primary)] text-[var(--brand-primary)] px-4 py-2 rounded text-sm hover:bg-[var(--brand-primary)] hover:text-white transition-colors"
          style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
        >
          <strong>セキスイハイム東北サイトはこちら</strong>
          <ExternalLink className="h-4 w-4" />
        </a>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden p-2">
            <Menu className="h-6 w-6 text-[var(--brand-primary)]" />
            <span className="sr-only">メニューを開く</span>
          </SheetTrigger>
          <SheetContent side="right" className="p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle>メニュー</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <SheetClose
                  key={item.id}
                  render={
                    <a
                      href={`#${item.id}`}
                      className="px-6 py-4 text-sm font-medium border-b border-[var(--border)] hover:bg-[var(--brand-gray)] transition-colors"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
              <motion.a
                href="https://www.heim-tohoku.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-6 inline-flex items-center justify-center gap-2 bg-[var(--brand-primary)] text-white px-4 py-3 rounded text-sm"
                style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.95, opacity: 0.85 }}
                transition={{ duration: 0.1 }}
              >
                <strong>セキスイハイム東北サイトはこちら</strong>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Nav bar */}
      <nav className="hidden md:block bg-[var(--brand-nav)] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative flex-1 text-center text-[var(--brand-nav-foreground)] text-sm font-medium py-3 group hover:z-10"
            >
              <span className="absolute inset-0 bg-[var(--brand-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
