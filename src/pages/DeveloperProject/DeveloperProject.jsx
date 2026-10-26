import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Helpers/api";
import SectionTitle from "../../components/SectionTitle/SectionTitle"; 

export default function DeveloperProjects() {
  const { id } = useParams();
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDeveloper() {
      try {
        const response = await api.get(`/developer/${id}`);
        setDeveloper(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching developer details", error);
        setLoading(false);
      }
    }
    fetchDeveloper();
  }, [id]);

  if (loading) return <div className="text-center py-20 text-xl">Loading...</div>;
  if (!developer) return <div className="text-center py-20 text-xl">Developer not found.</div>;

  const bannerImage = developer.images?.[0];

  return (
    <div className="bg-white min-h-screen pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <SectionTitle title="Developers Projects" />

        <div className="w-full h-[400px] rounded-xl overflow-hidden mb-10 shadow-sm">
          <img 
            src={bannerImage || "https://placehold.co/1200x600"} 
            alt={developer.name_en} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {developer.projects?.length > 0 ? (
            developer.projects.map((project) => (
              
              <div 
                key={project.id} 
                className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                
                <div className="h-48 rounded-lg overflow-hidden mb-3">
                  <img 
                    src={project.images?.[0] || "https://placehold.co/400"} 
                    alt={project.name_en} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-between items-center px-2 py-3 border-b border-gray-100 text-xs text-gray-500">
                  <span className="flex items-center gap-1">🚪 50 Units</span>
                  <span className="flex items-center gap-1">🏋️ 7 Gyms</span>
                  <span className="flex items-center gap-1">📐 15,000m</span>
                </div>

                <div className="p-3 flex-grow">
                  <h3 className="text-[#8E1616] font-playfair font-bold text-lg mb-2">
                    {project.name_en}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3">
                    {project.description_en}
                  </p>
                </div>

                <div className="p-3 pt-0 mt-auto">
                  <Link to={`/projects/${project.id}`}> 
                    <button className="w-full border border-[#8E1616] text-[#8E1616] font-medium py-2 rounded-md hover:bg-red-50 transition-colors text-sm">
                      View Details
                    </button>
                  </Link>
                </div>

              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500 py-10">
              No projects available for this developer yet.
            </div>
          )}

        </div>
      </div>
    </div>
  );
}