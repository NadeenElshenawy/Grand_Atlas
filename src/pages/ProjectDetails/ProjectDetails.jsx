import { useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Helpers/api";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await api.get(`/projects/${id}`);
        setProject(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching project details", error);
        setLoading(false);
      }
    }
    fetchProject();
  }, [id]);

  if (loading) return <div className="text-center py-20 text-xl">Loading...</div>;
  if (!project) return <div className="text-center py-20 text-xl">Project not found.</div>;

  const mainImage = project.images?.[0];
  const thumbnails = project.images?.slice(1) || [];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        
        <h1 className="text-center text-3xl font-playfair font-bold text-gray-800 mb-8">
          {project.name_en} Project
        </h1>

        <div className="w-full h-[450px] rounded-xl overflow-hidden mb-4 shadow-sm">
          <img 
            src={mainImage || "https://placehold.co/1200x600"} 
            alt={project.name_en} 
            className="w-full h-full object-cover"
          />
        </div>

        {thumbnails.length > 0 && (
          <div className="grid grid-cols-5 gap-4 mb-10">
            {thumbnails.map((img, index) => (
              <div key={index} className="h-24 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-6 mb-8 gap-4">
          
          <div>
            <h2 className="text-3xl font-playfair font-bold text-[#8E1616] mb-2">
              {project.name_en}
            </h2>
            <p className="text-gray-500 flex items-center gap-1 text-sm">
              <span>📍</span> 
              {project.zone?.name_en || "Egypt"} — Ref: {project.id.slice(0, 6).toUpperCase()}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <img 
                src={project.developer?.images?.[0] || "https://placehold.co/100x100?text=Logo"} 
                alt={project.developer?.name_en} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-gray-800 uppercase leading-tight tracking-wide text-sm">
                {project.developer?.name_en || "Developer"}
              </h3>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                Developments
              </span>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h3 className="font-playfair font-bold text-2xl mb-4">At a glance</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Plot size ca.: <strong>589 m²</strong></li>
              <li>• Living area ca.: <strong>300 m²</strong></li>
              <li>• Units: <strong>3000</strong></li>
              <li>• Man made Lakes: <strong>3</strong></li>
              <li>• Playground: <strong>8</strong></li>
              <li>• Public gyms: <strong>20</strong></li>
              <li>• Schools: <strong>50</strong></li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-2xl mb-4">Overview</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              {project.description_en}
            </p>
          </div>

        </div>

        <div className="mt-12">
          <Link to="/zones" state={{ from: "Zones" }} className="text-[#8E1616] hover:underline">
            &larr; Back to Zones
          </Link>
        </div>

      </div>
    </div>
  );
}