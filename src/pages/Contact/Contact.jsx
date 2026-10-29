import Hero from "../../components/Hero/Hero"
import contactHeroImg from "/src/assets/image30.png"
import contactLocation from "../../assets/icons/contact-location.png"
import contactX from "../../assets/icons/contact-x.png"
import contactPhone from "../../assets/icons/contact-phone.png"
import contactTelephone from "../../assets/icons/contact-telephone.png"
import facebook from "../../assets/icons/icFacebook.png"
import insta from "../../assets/icons/contact-insta.png"
import tiktok from "../../assets/icons/contact-tiktok.png"
import contactEmail from "../../assets/icons/contact-email.png"

export const Contact = () => {

  return (
    <>
      <Hero 
        bgImg={contactHeroImg} 
        title="Connected Globally. Available Locally." 
        desc="With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory." 
        showBtn={false} 
        showSocial={false}
      />

      <div className="bg-white min-h-screen py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            
            <div className="flex flex-col">
              
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              
              <p className="text-gray-500 mb-8 leading-relaxed max-w-md text-sm md:text-base">
                Our team is available for private consultations and off-market inquiries. We operate with absolute discretion to ensure your real estate objectives are met with precision.
              </p>

              <div className="space-y-5 text-[#8E1616] font-medium mb-10 text-sm md:text-base">
                <div className="flex items-start md:items-center gap-3">
                  <img src={contactLocation} alt="location" className="w-5 h-5 object-contain mt-1 md:mt-0 shrink-0" />
                  <span>Minusio, Lake Maggiore, Switzerland — ref. LOC1771</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <img src={contactEmail} alt="email" className="w-5 h-5 object-contain shrink-0" />
                  <a href="mailto:Grand_Atlas.Support@gmail.com" className="hover:underline break-all">
                    Grand_Atlas.Support@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <img src={contactPhone} alt="phone" className="w-5 h-5 object-contain shrink-0" />
                  <span>01247859622</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <img src={contactTelephone} alt="telephone" className="w-5 h-5 object-contain shrink-0" />
                  <span>035987124</span>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-gray-500 font-playfair text-lg mb-4">Follow us on social media</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-[#8E1616] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <img src={facebook} alt="Facebook" className="w-5 h-5 object-contain" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#8E1616] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <img src={contactX} alt="X" className="w-4 h-4 object-contain" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#8E1616] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <img src={insta} alt="Instagram" className="w-5 h-5 object-contain " />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#8E1616] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <img src={tiktok} alt="TikTok" className="w-5 h-5 object-contain" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[#847D7D] font-playfair text-lg mb-4">Working Hours</h3>
                <ul className="space-y-2 text-sm max-w-xs">
                  <li className="flex justify-between">
                    <span className="text-[#8E1616] font-bold">Saturday :</span>
                    <span className="text-[#847D7D]">9:00AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#8E1616] font-bold">Sunday :</span>
                    <span className="text-[#847D7D]">9:00AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#8E1616] font-bold">Monday :</span>
                    <span className="text-[#847D7D]">9:00AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#8E1616] font-bold">Tuesday :</span>
                    <span className="text-[#847D7D]">9:00AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-[#8E1616] font-bold">Wednesday :</span>
                    <span className="text-[#847D7D]">9:00AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              
              
              <div className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                
                <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>

                <form className="space-y-5">
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-[#8E1616] focus:ring-1 focus:ring-[#8E1616] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-[#8E1616] focus:ring-1 focus:ring-[#8E1616] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-[#8E1616] focus:ring-1 focus:ring-[#8E1616] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-1.5">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-[#8E1616] focus:ring-1 focus:ring-[#8E1616] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-white font-medium py-3 rounded-md hover:opacity-90 transition-opacity mt-2"
                  >
                    Send Message
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}