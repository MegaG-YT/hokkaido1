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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center w-full">
            {/* Gold banner */}
            <div className="bg-[#9e8c5a] py-3 md:py-6 px-4 md:px-10 text-center whitespace-nowrap">
              <p className="text-white tracking-widest" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 1.875rem)', fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                福島市の将来を牽引する街「泉」という選択※
              </p>
            </div>
            {/* Title on white strip */}
            <div className="bg-white py-1 md:py-4 px-4 md:px-6 text-center whitespace-nowrap">
              <h1 className="tracking-wider" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                <span className="text-[#9e8c5a] font-medium" style={{ fontSize: 'clamp(1rem, 3vw, 2.25rem)' }}>
                  スマートハイムシティ
                </span>
                <span className="text-[#333333] font-bold" style={{ fontSize: 'clamp(1.25rem, 4vw, 3rem)' }}>
                  泉
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
