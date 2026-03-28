import { SectionDivider } from "@/components/shared/section-divider"
import { SectionWrapper } from "@/components/shared/section-wrapper"

export function SurroundingEnvironment() {
  return (
    <>
      <SectionDivider title="周辺環境・生活情報" />
      <SectionWrapper id="surrounding-environment">
        <div className="mx-auto max-w-7xl px-4">
          <div className="h-64 rounded-lg bg-[var(--brand-gray)] flex items-center justify-center">
            <p className="text-[var(--brand-text-muted)]">コンテンツ準備中</p>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
