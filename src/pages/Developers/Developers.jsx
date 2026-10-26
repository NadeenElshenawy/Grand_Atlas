import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Needed for the button
import Hero from "../../components/Hero/Hero";
import developersHeroImg from "/src/assets/image 29.png";
import api from "../../Helpers/api";

export default function Developers() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDevelopers() {
      try {
        const response = await api.get("/developer");
        setDevelopers(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching developers", error);
        setLoading(false);
      }
    }
    getDevelopers();
  }, []);

  return (
    <>
      <Hero 
        bgImg={developersHeroImg} 
        title="Defining the Future Skyline." 
        desc="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers." 
        showBtn={false}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {loading ? (
          <div className="text-center text-xl font-semibold text-gray-500">
            Loading developers...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 
              Because each developer has multiple projects (see JSON), 
              we need to loop through the developers, and then loop through their projects.
            */}
            {developers.map((dev) => (
              dev.projects?.map((project) => (
                
                // THE CARD DESIGN
                <div 
                  key={project.id} 
                  className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  
                  {/* 1. Project Image & Badge */}
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={project.images?.[0] || "https://placehold.co/600x400"} 
                      alt={project.name_en} 
                      className="w-full h-full object-cover"
                    />
                    {/* The "New Cairo" badge (Using a placeholder since zone ID is in JSON, not name) */}
                    <div className="absolute top-3 right-3 bg-[#8E1616] text-white text-xs font-semibold px-3 py-1.5 rounded-sm shadow-sm">
                      New Cairo
                    </div>
                  </div>

                  {/* 2. Developer Logo & Name */}
                  <div className="flex items-center gap-3 px-1 mb-4">
                    {/* Developer Logo inside a diamond shape */}
                    <div className="w-10 h-10 bg-[#8E1616] flex items-center justify-center rounded-sm transform rotate-45 shrink-0">
                      <img 
                        src={dev.images?.[0]} 
                        alt={dev.name_en} 
                        className="w-6 h-6 object-contain transform -rotate-45"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold text-gray-800 uppercase leading-tight tracking-wide text-sm">
                        {dev.name_en}
                      </h3>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                        Developments
                      </span>
                    </div>
                  </div>

                  {/* 3. View Projects Button (Links to Project Details) */}
                  <div className="mt-auto">
                    <Link to={`/projects/${project.id}`}>
                      <button className="w-full border border-[#8E1616] text-[#8E1616] font-medium py-2 rounded-md hover:bg-red-50 transition-colors text-sm">
                        View Projects
                      </button>
                    </Link>
                  </div>

                </div>
              ))
            ))}

          </div>
        )}
      </div>
    </>
  );
}