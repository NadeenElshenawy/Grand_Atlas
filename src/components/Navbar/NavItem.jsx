import {Link} from "react-router-dom"

export default function NavItem({to,children}){
    return(

        <li >
<Link
to={to}
className="inline-block px-1 pb-1 text-slate-700 font-medium 
                   border-b-2 border-transparent hover:border-red-700 
                   transition-colors">
            {children}
      </Link>      
        </li>
    )
}