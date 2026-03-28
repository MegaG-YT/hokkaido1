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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center w-full">
            {/* Gold banner */}
            <div className="w-full max-w-2xl md:max-w-3xl bg-[#9e8c5a] py-3 md:py-5 px-6 md:px-10 text-center">
              <p className="text-white text-sm md:text-lg lg:text-xl tracking-widest" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                福島市の将来を牽引する街「泉」という選択※
              </p>
            </div>
            {/* Title on white strip */}
            <div className="w-full max-w-2xl md:max-w-3xl bg-white py-2 md:py-4 px-6 text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl tracking-wider">
                <span className="text-[#9e8c5a] font-medium" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
                  スマートハイムシティ
                </span>
                <span className="text-[#333333] font-bold text-2xl md:text-4xl lg:text-5xl" style={{ fontFamily: '"游明朝", "Yu Mincho", "Hiragino Mincho Pro", serif' }}>
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
