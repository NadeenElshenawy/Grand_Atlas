import { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import logoImg from "../../assets/LogoOption.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm py-3 md:py-4 px-4 md:px-8 sticky top-0 z-50">
        
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
              <img src={logoImg} alt="Grand Atlas Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-red-700 font-bold text-base md:text-lg">GRAND ATLAS</span>
              <span className="text-[10px] md:text-xs tracking-widest text-slate-500">DEVELOPMENTS</span>
            </div>
          </Link>

          {/* Desktop Menu (Hidden on Mobile) */}
          <ul className="hidden md:flex space-x-4 lg:space-x-6 justify-center">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/units">Units</NavItem>
            <NavItem to="/zones">Zones</NavItem>
            <NavItem to="/developers">Developers</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </ul>

          {/* Register Button (Hidden on very small mobile screens) */}
          <div className="hidden sm:block">
            <button className="bg-gradient-to-br from-[#8E1616] to-[#C34B4B] hover:from-red-700 hover:to-red-900 text-white font-medium px-4 md:px-6 py-2 rounded transition-all shadow-md hover:shadow-lg text-sm md:text-base">
              Register
            </button>
          </div>

          {/* HAMBURGER BUTTON (Visible only on mobile) */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon (☰)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isOpen && (
          <div className="md:hidden mt-4 border-t border-gray-100 pt-4 pb-2 bg-white absolute left-0 w-full shadow-lg">
            <ul className="flex flex-col items-center space-y-4">
              {/* We pass an onClick to NavItem to close the menu when a link is clicked */}
              <div onClick={() => setIsOpen(false)}><NavItem to="/">Home</NavItem></div>
              <div onClick={() => setIsOpen(false)}><NavItem to="/units">Units</NavItem></div>
              <div onClick={() => setIsOpen(false)}><NavItem to="/zones">Zones</NavItem></div>
              <div onClick={() => setIsOpen(false)}><NavItem to="/developers">Developers</NavItem></div>
              <div onClick={() => setIsOpen(false)}><NavItem to="/contact">Contact</NavItem></div>
            </ul>
            
            {/* Register Button for Mobile Menu */}
            <div className="mt-4 flex justify-center pb-4">
              <button className="bg-gradient-to-br from-[#8E1616] to-[#C34B4B] text-white font-medium px-8 py-2 rounded w-11/12">
                Register
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}