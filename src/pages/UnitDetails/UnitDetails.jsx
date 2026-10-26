import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../Helpers/api";

export default function UnitDetails() {
  const { id } = useParams();
  const [unit, setUnit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUnit() {
      try {
        const response = await api.get(`/unit/${id}`);
        setUnit(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching unit details", error);
        setLoading(false);
      }
    }
    fetchUnit();
  }, [id]);

  if (loading) return <div className="text-center py-20 text-xl">Loading...</div>;
  if (!unit) return <div className="text-center py-20 text-xl">Unit not found.</div>;

  const mainImage = unit.images?.[0];
  const thumbnails = unit.images?.slice(1) || [];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        
        {/* 1. MAIN IMAGE */}
        <div className="w-full h-[500px] rounded-xl overflow-hidden mb-4 bg-gray-200">
          <img 
            src={mainImage || "https://placehold.co/1200x600"} 
            alt={unit.title_en} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2. THUMBNAILS GALLERY */}
        {thumbnails.length > 0 && (
          <div className="grid grid-cols-5 gap-4 mb-10">
            {thumbnails.map((img, index) => (
              <div key={index} className="h-24 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* 3. TITLE AND PRICE */}
        <div className="flex justify-between items-start border-b border-gray-200 pb-6 mb-8">
          <div>
            <h1 className="text-4xl font-playfair font-bold text-[#8E1616] mb-2 uppercase">
              {unit.title_en}
            </h1>
            
            {/* HERE IS THE NESTED DATA FIX */}
            <p className="text-gray-500 flex items-center gap-1">
              <span>📍</span> 
              {unit.project?.name_en || "Unknown Project"} 
              {/* Fallback for zone since it's missing in the top level */}
              , {unit.zoneName_en || "Egypt"} 
              — Ref: {unit.id.slice(0, 6).toUpperCase()}
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-bold text-gray-700">
              {unit.price?.toLocaleString()} EGP
            </h2>
          </div>
        </div>

        {/* 4. CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: At a glance */}
          <div>
            <h3 className="font-playfair font-bold text-2xl mb-4">At a glance</h3>
            <ul className="space-y-3 text-gray-600">
              {/* Using unit.size for both since plot size isn't in JSON */}
              <li>• Plot size ca.: <strong>{unit.size} m²</strong></li>
              <li>• Living area ca.: <strong>{unit.size} m²</strong></li>
              <li>• Bedrooms: <strong>{unit.bedrooms}</strong></li>
              <li>• Bathrooms: <strong>{unit.bathrooms}</strong></li>
              <li>• Status: <strong className="text-green-600">{unit.status}</strong></li>
            </ul>
          </div>

          {/* Right Column: Overview */}
          <div>
            <h3 className="font-playfair font-bold text-2xl mb-4">Overview</h3>
            <p className="text-gray-600 leading-relaxed text-justify mb-8">
              {unit.description_en}
            </p>

            {/* 5. ACTION BUTTONS */}
            <div className="flex gap-4">
              <button className="flex-1 bg-[#10B981] hover:bg-green-600 text-white font-medium py-3 rounded-md transition-colors text-center">
                Contact on WhatsApp
              </button>
              <button className="flex-1 border border-gray-300 text-gray-600 hover:bg-gray-50 font-medium py-3 rounded-md transition-colors text-center">
                Call
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12">
          <Link to="/units" className="text-[#8E1616] hover:underline">
            &larr; Back to all units
          </Link>
        </div>

      </div>
    </div>
  );
}