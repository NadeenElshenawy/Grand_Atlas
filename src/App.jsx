
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import Units from "./pages/Units/Units"
import { Zones } from "./pages/Zones/Zones";
import { Contact } from "./pages/Contact/Contact";
import Developers from "./pages/Developers/Developers";

import './App.css'
import Layout from "./components/Layout/Layout";
import ZoneDetails from "./pages/ZoneDetails/ZoneDetails";
import UnitDetails from "./pages/UnitDetails/UnitDetails";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import DeveloperProjects from "./pages/DeveloperProjects/DeveloperProjects";


function App(){
  return(
    <>
          <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/units" element={<Units />} />
        <Route path="/unit/:id" element={<UnitDetails />} />
        <Route path="/Zones" element={<Zones />} />
        <Route path="/zones/:id" element={<ZoneDetails />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/developers" element={<Developers/>}/>
        <Route path="/developers/:id" element={<DeveloperProjects />} />

        </Route>
      </Routes>
    </>
  )
}



export default App;