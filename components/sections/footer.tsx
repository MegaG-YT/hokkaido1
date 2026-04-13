import Image from "next/image"
import { Phone } from "lucide-react"

const FOOTER_NAV = [
  { label: "会社概要", href: "https://www.heim-tohoku.co.jp/group.html" },
  { label: "採用情報", href: "https://www.heim-tohoku.co.jp/recruit_movie/", external: true },
  { label: "サイトの利用について", href: "https://www.heim-tohoku.co.jp/privacy/site.html" },
  { label: "個人情報保護方針", href: "https://www.heim-tohoku.co.jp/privacy.html" },
  { label: "利用目的と共同利用に関するご案内", href: "https://www.heim-tohoku.co.jp/privacy/privacy_info.html" },
  { label: "保険サービスの勧誘方針", href: "https://www.heim-tohoku.co.jp/hoken.html" },
  { label: "ソーシャルメディアポリシー", href: "https://www.heim-tohoku.co.jp/sns_policy/" },
]

const SNS_LINKS = [
  {
    href: "https://www.youtube.com/channel/UCBM6dyaYiBX0h6ElZxGMu4w",
    src: "/images/footer/icon-youtube.svg",
    alt: "YouTube",
    width: 29,
    height: 21,
  },
  {
    href: "https://www.instagram.com/sekisuiheim_tohoku/",
    src: "/images/footer/icon-instagram.svg",
    alt: "Instagram",
    width: 20,
    height: 20,
  },
]

export function Footer() {
  return (
    <footer className="bg-[#7a7a7a] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-6 md:pt-14 md:pb-8">
        {/* Top policy nav — centered, spans full width */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs md:text-sm mb-10 md:mb-12">
          {FOOTER_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="text-white/95 hover:text-white hover:underline transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Two-column: logo stack (left) + phone box (right) */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex flex-col items-start">
            <p className="text-xs md:text-sm mb-3 text-white/95 leading-relaxed">
              東北の一戸建て・注文住宅・分譲住宅を
              <br />
              60年長期サポートで安心をお届けします
            </p>
            <div className="mb-4">
              <Image
                src="/images/footer/footer-logo.svg"
                alt="セキスイハイム東北株式会社"
                width={439}
                height={34}
                className="h-auto w-[320px] md:w-[440px]"
              />
            </div>
            <address className="not-italic text-xs md:text-sm text-white/95 mb-4">
              〒983-0852　仙台市宮城野区榴岡3-4-1（アゼリアヒルズ14階）
            </address>
            <ul className="flex items-center gap-4">
              {SNS_LINKS.map((sns) => (
                <li key={sns.href}>
                  <a
                    href={sns.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center opacity-95 hover:opacity-100 transition-opacity"
                  >
                    <Image src={sns.src} alt={sns.alt} width={sns.width} height={sns.height} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:justify-end md:pt-2">
            <a
              href="tel:0120816393"
              className="inline-flex flex-col items-start rounded-md border border-white/60 px-6 py-4 hover:bg-white/10 transition-colors min-w-[280px]"
            >
              <p className="text-xs md:text-sm mb-1 text-white/95">お客様センター</p>
              <span
                className="flex items-center gap-2 text-2xl md:text-[2rem] leading-none font-normal tracking-wide"
                style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
              >
                <Phone className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
                0120-816-393
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-6 flex justify-center md:justify-end">
          <small className="text-xs text-white/80">© Sekisui Heim Tohoku</small>
        </div>
      </div>
    </footer>
  )
}
