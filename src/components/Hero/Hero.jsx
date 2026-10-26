import SocialSidebar from "../SocialSidebae/SocialSidebar"

export default function Hero({bgImg, title, desc, btn, showSocial=true, showBtn=true}) {
  return (
    <section
      className="relative min-h-[60vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center py-16 md:py-0"
      style={{ backgroundImage: `url(${bgImg})` }}
    > 
      <div className="absolute inset-0 bg-black/50"></div>

      {showSocial ? (
        <div className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-20">
          <SocialSidebar />
        </div>
      ) : null}

      <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-4xl mt-10 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-playfair mb-4 md:mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-base md:text-lg text-slate-200 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
          {desc}
        </p>
        
        {showBtn ? (
          <button className="bg-gradient-to-br from-[#8E1616] to-[#C34B4B] hover:from-red-700 hover:to-red-900 text-white font-medium px-8 md:px-12 py-3 rounded transition-all shadow-lg hover:shadow-xl mb-4 md:mb-0">
            {btn}
          </button>
        ) : null}
      </div>
    </section>
  )
}