import SectionTitle from "../SectionTitle/SectionTitle";


import img1 from "../../assets/images/masterpiece_1.png"; 
import img2 from "../../assets/images/masterpiece_2.png";
import img3 from "../../assets/images/masterpiece_3.png";



export default function Masterpieces() {
    const projects=[
        { id: 1, num: "01.", name: "Palm Hills Office No.3", image: img1 },
    { id: 2, num: "02.", name: "Hacienda Duplex No.4", image: img2 },
    { id: 3, num: "03.", name: "Sawary Family Villa", image: img3 },
    { id: 4, num: "04.", name: "Another Project", image: img3 },
        { id: 5, num: "05.", name: "Another Project", image: img3 },

    ]
  return (

<section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle title="Hand-Selected Masterpieces" />

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 py-4">
          
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="flex-shrink-0 w-[450px] md:w-[400px] snap-center cursor-pointer group"
            >
              <div className="h-64 w-full overflow-hidden rounded-xl shadow-sm">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <h3 className="mt-4 text-lg text-gray-800 font-playfair">
                <span className="font-bold mr-1">{project.num}</span> 
                {project.name}
              </h3>
            </div>
          ))}

        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <div className="w-8 h-2 bg-[#8B0000] rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
        </div>

        </div>
        </section>
)

}
