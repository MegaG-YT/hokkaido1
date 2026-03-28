export function Hero() {
  return (
    <section className="relative px-4 md:px-8 pt-4 md:pt-6">
      <div className="relative">
        <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-5">
          {/* Top row */}
          <div className="aspect-[3/2] bg-gray-300 rounded-tl-2xl md:rounded-tl-3xl" />
          <div className="aspect-[3/2] bg-gray-200" />
          <div className="aspect-[3/2] bg-gray-300 rounded-tr-2xl md:rounded-tr-3xl" />
          {/* Bottom row */}
          <div className="aspect-[3/2] bg-gray-300 rounded-bl-2xl md:rounded-bl-3xl" />
          <div className="aspect-[3/2] bg-gray-200" />
          <div className="aspect-[3/2] bg-gray-300 rounded-br-2xl md:rounded-br-3xl" />
        </div>

        {/* Center text overlay */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateX(-170px)' }}>
          {/* White background container — 10px larger than inner content */}
          <div className="bg-white p-[17px]">
            {/* Gold banner */}
            <div className="bg-[#9e8c5a] py-0.5 md:py-1.5 px-6 md:px-14 text-center whitespace-nowrap">
              <p className="text-white font-bold tracking-widest" style={{ fontSize: 'clamp(1rem, 3.2vw, 2.5rem)', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                福島市の将来を牽引する街「泉」という選択<sup className="text-[0.5em] align-super">※</sup>
              </p>
            </div>
            {/* Title strip — same width, inside the white box */}
            <div className="py-0 md:py-0.5 text-center whitespace-nowrap">
              <h1 className="font-bold" style={{ letterSpacing: '0.15em' }} style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                <span className="text-[#9e8c5a]" style={{ fontSize: 'clamp(1.25rem, 3.8vw, 3rem)' }}>
                  スマートハイムシティ
                </span>
                <span className="text-[#333333]" style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)' }}>
                  泉
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2 text-right text-[17px] text-[var(--brand-text-muted)] px-1 w-[65%] ml-auto">
        ※福島市の「立地適正化計画」にて、当計画地は「居住誘導区域」として指定されています。
      </p>
    </section>
  )
}
