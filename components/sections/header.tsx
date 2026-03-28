"use client"

import { useState } from "react"
import Image from "next/image"
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
  { label: "周辺環境・生活情報", id: "surrounding-environment" },
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
          href="#"
          className="hidden md:inline-flex items-center gap-2 border border-[var(--brand-primary)] text-[var(--brand-primary)] px-4 py-2 rounded text-sm hover:bg-[var(--brand-primary)] hover:text-white transition-colors"
        >
          セキスイハイム東北サイトはこちら
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
              <a
                href="#"
                className="mx-4 mt-6 inline-flex items-center justify-center gap-2 border border-[var(--brand-primary)] text-[var(--brand-primary)] px-4 py-3 rounded text-sm"
                onClick={() => setOpen(false)}
              >
                セキスイハイム東北サイトはこちら
                <ExternalLink className="h-4 w-4" />
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Nav bar */}
      <nav className="hidden md:block bg-[var(--brand-nav)] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          {NAV_ITEMS.map((item, i) => (
            <div key={item.id} className="flex-1 flex items-center">
              <a
                href={`#${item.id}`}
                className="relative flex-1 text-center text-[var(--brand-nav-foreground)] text-sm font-medium py-3 group hover:z-10"
              >
                <span
                  className="absolute inset-y-0 -left-[9px] -right-[9px] bg-[var(--brand-accent)] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ clipPath: "polygon(9px 0%, 100% 0%, calc(100% - 9px) 100%, 0% 100%)" }}
                />
                <span className="relative z-10">{item.label}</span>
              </a>
              {i < NAV_ITEMS.length - 1 && (
                <span className="w-px h-4 bg-white/40 shrink-0 -skew-x-12" />
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}
