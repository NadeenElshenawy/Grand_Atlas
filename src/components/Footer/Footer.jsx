import linkedinIcon from "../../assets/icons/Linkedin.png"
import facebookIcon from "../../assets/icons/ic Facebook.png"
import twitterIcon from "../../assets/icons/Twitter.png"
import logo from "../../assets/Logo Option.png"


export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* ── Main Content: 4 columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <img src={logo} alt="Grand Atlas" className="h-20 mb-4" />
            <p className="text-sm text-slate-700 mb-1">+1 (7635) 547-12-97</p>
            <p className="text-sm text-slate-700">support@lift.agency</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="/" className="hover:text-red-700">Home</a></li>
              <li><a href="/inventories" className="hover:text-red-700">Inventories</a></li>
              <li><a href="/zones" className="hover:text-red-700">Zones</a></li>
              <li><a href="/developers" className="hover:text-red-700">Developers</a></li>
              <li><a href="/contact" className="hover:text-red-700">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">About</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-red-700">Grand Atlas</a></li>
              <li><a href="#" className="hover:text-red-700">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-700">Legal</a></li>
              <li><a href="#" className="hover:text-red-700">Help</a></li>
              <li><a href="#" className="hover:text-red-700">Support</a></li>
            </ul>
          </div>


{/* Column 4: Get in touch */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Get in touch</h3>

            {/* Email input + arrow button */}
            <div className="flex border border-slate-300 rounded overflow-hidden mb-5">
              <input
                type="email"
                placeholder="Get product updates"
                className="flex-1 px-3 py-2 text-sm outline-none bg-white"
              />
              <button className="bg-red-700 hover:bg-red-800 text-white px-4 flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Social icons — inline, no component */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center bg-white hover:border-red-700 transition-colors overflow-hidden"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-9 h-9 object-contain" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center bg-white hover:border-red-700 transition-colors overflow-hidden"
              >
                <img src={facebookIcon} alt="Facebook" className="w-4 h-4 object-contain" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center bg-white hover:border-red-700 transition-colors overflow-hidden"
              >
                <img src={twitterIcon} alt="Twitter" className="w-9 h-9 object-contain" />
              </a>
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <hr className="border-slate-200 mb-6" />

        {/* ── Copyright ── */}
        <p className="text-center text-sm text-slate-500">
          © 2020 Lift Media. All rights reserved
        </p>

</div>
      </footer>
  )
}
