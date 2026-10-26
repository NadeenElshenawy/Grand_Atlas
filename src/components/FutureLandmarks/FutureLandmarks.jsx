import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import api from "../../Helpers/api";

export default function FutureLandmarks() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProjects() {
    try {
      const response = await api.get("/projects/all-projects");
      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching projects", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <SectionTitle title="Future Landmarks" />

        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {projects.slice(0, 3).map((project) => (
              <div 
                key={project.id} 
                className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                
                <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gray-200">
                  <img 
                    src={project.images?.[0] || "https://placehold.co/600x400?text=No+Image"} 
                    alt={project.name_en} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#8E1616] text-white text-xs font-semibold px-3 py-1.5 rounded-sm shadow-sm">
                    {project.zone?.name_en}
                  </div>
                </div>

                <div className="flex items-cent er gap-3 px-1 mb-6">
                  
                  <div className="w-10 h-10 bg-[#8E1616] flex items-center justify-center rounded-sm transform rotate-45 shrink-0">
                    <img 
                      src={project.developer?.images?.[0] || "https://placehold.co/100x100?text=Logo"} 
                      alt={project.developer?.name_en} 
                      className="w-full h-full object-cover transform -rotate-90 rounded-sm"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <h3 className="font-bold text-gray-800 uppercase leading-tight tracking-wide">
                      {project.developer?.name_en}
                    </h3>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                      Developments
                    </span>
                  </div>
                </div>

                {/* 3. THE BUTTON */}
                <button className="w-full border border-[#8B0000] text-[#8B0000] font-medium py-2 rounded-md hover:bg-red-50 transition-colors">
                  View Details
                </button>

              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center items-center gap-2 mt-10">
          <div className="w-8 h-2 bg-[#8B0000] rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}