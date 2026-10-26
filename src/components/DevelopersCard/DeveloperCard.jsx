

export default function DeveloperCard({developer}) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={developer.images?.[0]} 
          alt={developer.name_en} 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{developer.name_en}</h2>
        <p>{developer.description_en}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Projects</button>
        </div>
      </div>
    </div>
  );
}
  
