
export default function ZoneCard({zone}) {

  return (
   <div className="card bg-base-100 w-full shadow-sm border border-gray-200 overflow-hidden">
      <figure className="h-64">
        <img
          src={zone.images?.[0]} 
          alt={zone.name_en} 
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
    </div>
  );
}

