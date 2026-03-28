export function Footer() {
  return (
    <footer className="bg-[var(--brand-primary)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <p className="font-bold text-sm md:text-base">
          セキスイハイム東北株式会社
        </p>
        <p className="mt-4 text-xs text-white/60">
          &copy; {new Date().getFullYear()} セキスイハイム東北株式会社 All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
