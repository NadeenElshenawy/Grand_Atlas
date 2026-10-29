import { NavLink } from "react-router-dom";

export default function NavItem({ to, children, onClick }) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `inline-block px-1 pb-1 font-medium transition-colors border-b-2
           ${
             isActive
               ? "text-[#8E1616] border-[#8E1616]" 
               : "text-slate-700 border-transparent hover:border-red-700" 
           }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}