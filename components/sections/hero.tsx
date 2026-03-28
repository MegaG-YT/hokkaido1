export function Hero() {
  return (
    <section className="relative px-4 md:px-8 pt-4 md:pt-6">
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-5">
          {/* Cell 1 — top-left in both layouts */}
          <div className="aspect-[3/2] bg-gray-300 rounded-tl-2xl md:rounded-tl-3xl" />
          {/* Cell 2 — top-right on mobile (2-col), middle on desktop */}
          <div className="aspect-[3/2] bg-gray-200 rounded-tr-2xl md:rounded-tr-none" />
          {/* Cell 3 — middle-left on mobile, top-right on desktop */}
          <div className="aspect-[3/2] bg-gray-300 md:rounded-tr-3xl" />
          {/* Cell 4 — middle-right on mobile, bottom-left on desktop */}
          <div className="aspect-[3/2] bg-gray-300 md:rounded-bl-3xl" />
          {/* Cell 5 — bottom-left on mobile, middle on desktop */}
          <div className="aspect-[3/2] bg-gray-200 rounded-bl-2xl md:rounded-none" />
          {/* Cell 6 — bottom-right in both layouts */}
          <div className="aspect-[3/2] bg-gray-300 rounded-br-2xl md:rounded-br-3xl" />
        </div>

        {/* Center text overlay */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center md:[transform:translateX(-170px)]">
          {/* White background container — 10px larger than inner content */}
          <div className="bg-white p-[17px]">
            {/* Gold banner */}
            <div className="bg-[#9e8c5a] py-0.5 md:py-1.5 px-3 md:px-14 text-center md:whitespace-nowrap">
              <p className="text-white font-bold tracking-widest" style={{ fontSize: 'clamp(0.65rem, 3.2vw, 2.5rem)', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                福島市の将来を牽引する街「泉」という選択<sup className="text-[0.5em] align-super">※</sup>
              </p>
            </div>
            {/* Title strip — same width, inside the white box */}
            <div className="py-0 md:py-0.5 text-center md:whitespace-nowrap">
              <h1 className="font-bold" style={{ letterSpacing: '0.15em', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                <span className="text-[#9e8c5a]" style={{ fontSize: 'clamp(0.8rem, 3.8vw, 3rem)' }}>
                  スマートハイムシティ
                </span>
                <span className="text-[#333333]" style={{ fontSize: 'clamp(1rem, 5vw, 4rem)' }}>
                  泉
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2 text-left md:text-right text-black px-1 md:whitespace-nowrap text-[10px] md:text-inherit" style={{ fontSize: 'clamp(10px, 1.6vw, 22px)', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
        ※福島市の「立地適正化計画」にて、当計画地は「居住誘導区域」として指定されています。
      </p>

      {/* Sales banner */}
      <div className="mt-4 bg-[#635B51] py-4 md:py-5 px-4 md:px-8 overflow-hidden">
        <div className="mx-auto max-w-6xl flex items-center justify-center gap-4 md:gap-6 text-white whitespace-nowrap" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
          <span className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">新発売</span>
          <span className="border-l border-white/40 h-8 md:h-12" />
          <span className="flex items-stretch gap-2">
            <span className="flex flex-col justify-center gap-3 text-xs md:text-sm lg:text-base text-center leading-none">
              <span>建　築</span>
              <span>条件付</span>
            </span>
            <span className="text-2xl md:text-4xl lg:text-5xl font-bold">全15区画</span>
          </span>
          <span className="border-l border-white/40 h-8 md:h-12" />
          <span className="text-2xl md:text-4xl lg:text-5xl font-bold">
            1,200<span className="text-sm md:text-xl font-normal">万円台</span>〜1,500<span className="text-sm md:text-xl font-normal">万円台</span>
          </span>
        </div>
      </div>
    </section>
  )
}
