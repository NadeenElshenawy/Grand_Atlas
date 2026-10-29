import SectionTitle from "../SectionTitle/SectionTitle";
import Carousel from "../Carousel/Carousel"; // <-- Import the Carousel

// Import your images
import img1 from "../../assets/images/masterpiece_1.png"; 
import img2 from "../../assets/images/masterpiece_2.png";
import img3 from "../../assets/images/masterpiece_3.png";

export default function Masterpieces() {
  const projects = [
    { id: 1, num: "01.", name: "Palm Hills Office No.3", image: img1 },
    { id: 2, num: "02.", name: "Hacienda Duplex No.4", image: img2 },
    { id: 3, num: "03.", name: "Sawary Family Villa", image: img3 },
    { id: 4, num: "04.", name: "Another Project", image: img3 },
    { id: 5, num: "05.", name: "Another Project", image: img3 },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <SectionTitle title="Hand-Selected Masterpieces" />

        {/* Use the Carousel Component */}
        <div className="mt-10">
          <Carousel>
            {projects.map((project) => (
              
              /* Wrap each card in a div with padding for spacing */
              <div key={project.id} className="px-3 pb-4">
                <div className="cursor-pointer group">
                  
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
              </div>
            ))}
          </Carousel>
        </div>

      </div>
    </section>
  );
}