import { Link } from "react-router-dom"
import NavItem from "./NavItem";
export default function Navbar() {
  return (
    <>
    
    <nav className="bg-white shadow-sm py-4 px-8 flex items-center justify-between sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center text-white font-bold text-xl">
          <img src="/src/assets/Logo Option.png" alt="" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-red-700 font-bold text-lg">GRAND ATLAS</span>
          <span className="text-xs tracking-widest text-slate-500">DEVELOPMENTS</span>
        </div>
      </Link>
      <ul className="flex space-x-6 justify-center">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/units">Units</NavItem>
        <NavItem to="/Zones">Zones</NavItem>
        <NavItem to="/Developers"> Developers</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </ul>
       <button className="bg-gradient-to-br  from-[#8E1616] to-[#C34B4B] hover:from-red-700 hover:to-red-900 text-white font-medium px-6 py-2 rounded transition-all shadow-md hover:shadow-lg">
        Register
      </button>

    </nav>
    </>
  )
}

