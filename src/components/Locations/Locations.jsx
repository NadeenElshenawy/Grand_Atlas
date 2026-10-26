import SectionTitle from "../SectionTitle/SectionTitle";
import mapImage from "../../assets/images/mapPhoto.png"


export default function Locations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">

    <SectionTitle title="Strategic Locations"/>
 <div className="mt-8 w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <img 
            src={mapImage} 
            alt="Map of Strategic Locations in Egypt" 
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
      </section>
  )
}
