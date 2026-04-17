import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { AssetValue } from "@/components/sections/asset-value"
import { Landscape } from "@/components/sections/landscape"
import { SmartResilience } from "@/components/sections/smart-resilience"
import { SurroundingEnvironment } from "@/components/sections/surrounding-environment"
import { AccessSection } from "@/components/sections/access-section"
import { LotInformation } from "@/components/sections/lot-information"
import { PropertyOverview } from "@/components/sections/property-overview"
import { Footer } from "@/components/sections/footer"
import { MobileCtaBar } from "@/components/shared/cta-buttons"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AssetValue />
        <SurroundingEnvironment />
        <Landscape />
        <SmartResilience />
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 md:py-6">
            <p
              className="text-[10px] md:text-xs leading-relaxed text-[var(--brand-text-muted)] text-center md:text-left"
              style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}
            >
              ※建築ガイドライン：建築にあたり、当販売団地におけるガイドラインに沿ったご提案をさせていただきますのでご理解とご協力をお願いいたします。
            </p>
          </div>
        </section>
        <AccessSection />
        <LotInformation />
        <PropertyOverview />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  )
}
