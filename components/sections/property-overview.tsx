import { SectionDivider } from "@/components/shared/section-divider"
import { SectionWrapper } from "@/components/shared/section-wrapper"

export function PropertyOverview() {
  return (
    <>
      <SectionDivider title="物件概要" />
      <SectionWrapper id="property-overview">
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-64 rounded-lg bg-[var(--brand-gray)] flex items-center justify-center">
            <p className="text-[var(--brand-text-muted)]">コンテンツ準備中</p>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
