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
        <AccessSection />
        <LotInformation />
        <PropertyOverview />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  )
}
