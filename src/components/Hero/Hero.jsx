import SocialSidebar from "../SocialSidebae/SocialSidebar"
export default function Hero({bgImg, title,desc,btn, showSocial=true,showBtn=true}) {
  return (
<section
      className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    > 
          <div className="absolute inset-0 bg-black/50"></div>

{ showSocial ?
(
     <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <SocialSidebar />
      </div>)
      :null}
    <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-playfair mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-base md:text-lg text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          {desc}
        </p>
        {showBtn?(
        <button className="bg-gradient-to-br from-[#8E1616] to-[#C34B4B] hover:from-red-700 hover:to-red-900 text-white font-medium px-12 py-3 rounded transition-all shadow-lg hover:shadow-xl">
          {btn}
        </button>
        ):null
        }
      </div>
    </section>
)
}
