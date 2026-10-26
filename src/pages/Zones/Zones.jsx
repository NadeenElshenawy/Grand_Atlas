  import { useState,useEffect } from "react";
  import Hero from "../../components/Hero/Hero"
  import zonesHeroImg from"/src/assets/image28.png"
  import api from "../../Helpers/api";
  import ZoneCard from "../../components/ZoneCard/ZoneCard";
  import {Link} from "react-router-dom";

  export const Zones=({zone})=> {

      const [zones, setZones] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getZones() {
      try {
        const response = await api.get("/zone"); 
        setZones(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching zones", error);
        setLoading(false);
      }
    }

    useEffect(() => {
      getZones();
    }, []);
  return(
      <>
  <Hero bgImg={zonesHeroImg} title="Destinations Defined by Distinction" desc="From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic." showBtn={false}/>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {loading ? (
            <div className="text-center text-xl font-semibold text-gray-500">
              Loading zones...
            </div>
          ) : (
            
            <div className="grid grid-cols-4 gap-8">
              {zones.map((zone) => (
                <Link to={`/zones/${zone.id}`} key={zone.id}>
                <ZoneCard 
                  zone={zone} 
                /></Link>
              ))}
            </div>
          )}
        </div>
  </>
  )

  }