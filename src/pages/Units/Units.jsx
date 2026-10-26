import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import unitsHeroImg from "/src/assets/image12.png";
import api from "../../Helpers/api";
import searchImg from "../../assets/icons/search.png";

export default function Units() {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [bedroomFilter, setBedroomFilter] = useState("");
  const [developerFilter, setDeveloperFilter] = useState("");
  const [zoneFilter, setZoneFilter] = useState("");

  useEffect(() => {
    async function fetchUnits() {
      try {
        const response = await api.get("/unit");
        setUnits(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching unit", error);
        setLoading(false);
      }
    }
    fetchUnits();
  }, []);

  const filteredUnits = units.filter((unit) => {
    const matchesSearch = searchQuery === "" || 
      unit.title_en?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.projectName_en?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.developerName_en?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBedrooms = bedroomFilter === "" || unit.bedrooms === Number(bedroomFilter);
    const matchesDeveloper = developerFilter === "" || unit.developerName_en === developerFilter;
    const matchesZone = zoneFilter === "" || unit.zoneName_en === zoneFilter;

    return matchesSearch && matchesBedrooms && matchesDeveloper && matchesZone;
  });

  return (
    <>
      <Hero 
        bgImg={unitsHeroImg} 
        title="Where Visionary Design Meets Daily Life"
        desc="Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world" 
        showBtn={false}
      />

      <div className="bg-gray-50 min-h-screen pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-center">
            
            {/* --- FILTER BAR --- */}
            <div className="bg-white w-full rounded-md shadow-sm border border-[#8E1616] flex flex-wrap items-center mb-6 overflow-hidden">
              
              {/* 1. Search Input Box */}
              <div className="flex items-center flex-grow border-r border-[#8E1616] px-4 py-3">
                <input 
                  type="text" 
                  placeholder="Search Property" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="outline-none w-full text-gray-500 placeholder-gray-400 font-light" 
                />
                <img src={searchImg} alt="search" className="w-5 h-5 opacity-60" />
              </div>

              {/* 2. Dropdowns Box (Moved OUTSIDE the search input div) */}
              <div className="flex items-center text-gray-400 font-light text-sm">
                
                <select 
                  value={bedroomFilter} 
                  onChange={(e) => setBedroomFilter(e.target.value)}
                  className="outline-none px-4 py-3 border-r border-[#8E1616] bg-transparent cursor-pointer"
                >
                  <option value="">Bedrooms</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="12">12 Bedrooms</option>
                </select>

                <select 
                  value={developerFilter} 
                  onChange={(e) => setDeveloperFilter(e.target.value)}
                  className="outline-none px-4 py-3 border-r border-[#8E1616] bg-transparent cursor-pointer"
                >
                  <option value="">Developer</option>
                  <option value="elmorshedy">Elmorshedy</option>
                </select>

                <select 
                  value={zoneFilter} 
                  onChange={(e) => setZoneFilter(e.target.value)}
                  className="outline-none px-4 py-3 border-r border-[#8E1616] bg-transparent cursor-pointer"
                >
                  <option value="">Zone</option>
                  <option value="Alexandria">Alexandria</option>
                  <option value="Cairo">Cairo</option>
                </select>

                <select className="outline-none px-4 py-3 border-r border-[#8E1616] bg-transparent cursor-pointer">
                  <option>Projects</option>
                </select>
                
                <select className="outline-none px-4 py-3 border-r border-[#8E1616] bg-transparent cursor-pointer">
                  <option>Status</option>
                </select>
                
                <select className="outline-none px-4 py-3 bg-transparent cursor-pointer">
                  <option>Price Range</option>
                </select>

              </div>
            </div>

            <button className="bg-[#8E1616] text-white px-32 py-3 rounded-md hover:bg-red-900 transition-colors mb-12">
              Search
            </button>
          </div>

          {/* --- UNIT CARDS GRID --- */}
          {loading ? (
            <div className="text-center text-xl text-gray-500">Loading units...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {filteredUnits.length > 0 ? (
                filteredUnits.map((unit) => (
                  
                  <div key={unit.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                    
                    {/* Image & Badge */}
                    <div className="relative h-52">
                      <img 
                        src={unit.images?.[0] || "https://placehold.co/600x400"} 
                        alt={unit.title_en} 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 right-3 bg-[#2ECC71] text-white text-xs font-bold px-3 py-1 rounded-sm">
                        {unit.status || "Available"}
                      </span>
                    </div>

                    {/* Specs Row */}
                    <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 text-xs text-gray-500">
                      <span>🛏 {unit.bedrooms} Beds</span>
                      <span>🛁 {unit.bathrooms} Baths</span>
                      <span>📐 {unit.size}m</span>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[#8E1616] font-playfair font-bold text-lg truncate pr-2">
                          {unit.title_en}
                        </h3>
                        <span className="text-gray-700 font-bold whitespace-nowrap">
                          {unit.price?.toLocaleString()} EGP
                        </span>
                      </div>
                      
                      <p className="text-xs text-gray-400 mb-2">
                        {unit.projectName_en} • {unit.zoneName_en}
                      </p>

                      <p className="text-gray-500 text-sm line-clamp-2">
                        {unit.description_en}
                      </p>
                    </div>

                    {/* Button */}
                    <div className="p-4 pt-0">
                      <button className="w-full border border-[#8E1616] text-[#8E1616] font-medium py-2 rounded-md hover:bg-red-50 transition-colors text-sm">
                        View Details
                      </button>
                    </div>

                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center text-gray-500 py-10">
                  No properties found matching your criteria.
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
}