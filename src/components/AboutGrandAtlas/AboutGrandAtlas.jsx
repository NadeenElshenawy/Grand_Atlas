import SectionTitle from "../SectionTitle/SectionTitle";
import aboutImg from "/src/assets/image_5.png"
import arrowIcon from "../../assets/icons/arrow.png"


export default function AboutGrandAtlas() {
  return (
        <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
<SectionTitle title="About Grand Atlas"/>
 <div className="flex flex-col lg:flex-row items-center gap-12 mt-10">
          
          <div className="w-full lg:w-1/2">
            <div className="relative p-2">
              
              <img 
                src={aboutImg} 
                alt="About Grand Atlas Architecture" 
                className="w-full h-auto object-cover border-[4px] border-[#8B0000] rounded-tl-[70px] rounded-tr-[70px] shadow-lg"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <p className="text-gray-600 leading-loose mb-12 text-justify font-lato text-[20px] ">
              We began with a singular, uncompromising vision: to bridge the gap between world-class architecture and the individuals who define our global culture. We recognized that for the discerning client, a home is rarely just a physical structure; it is a curated environment, a private gallery, and the ultimate expression of a life well-lived. Our journey started not in the pursuit of transactions, but in the pursuit of excellence. We set out to dismantle the traditional, high-volume real estate model in favor of a bespoke, 'private office' approach—one where quality always supersedes quantity, and where every client is treated as the sole focus of our firm,  
We don't just find you a home; we secure your peace of mind through a veil of absolute professional confidentiality.
            </p>

            <div>
              <button className="bg-gradient-to-r from-[#8E1616] to-[#C34B4B] hover:from-red-800 hover:to-red-950 text-white px-8 py-3 rounded-md font-medium shadow-md transition-all flex items-center gap-2">
                Know More
                <img 
                  src={arrowIcon} 
                  alt="arrow" 
                  className="w-4 h-4 object-contain" 
                />

              </button>
            </div>

          </div>
        </div>
</div>
</section>
  )
}

