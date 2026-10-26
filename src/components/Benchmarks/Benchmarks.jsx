

import apartmentIcon from "../../assets/icons/Apartment.png";
import streamLineIcon from "../../assets/icons/streamline_investment-selection.png";
import smileFaceIcon from "../../assets/icons/ant-design_smile-outlined.png";
import starIcon from "../../assets/icons/material-symbols_award-star-outline-rounded.png";
import SectionTitle from "../SectionTitle/SectionTitle";


export default function Benchmarks() {

     const stats = [
    {
      id: 1,
      value: "48",
      label: "Properties Managed",
      icon: apartmentIcon, 
    },
    {
      id: 2,
      value: "90M",
      label: "Total Managed Investments",
      icon: streamLineIcon,
    },
    {
      id: 3,
      value: "500",
      label: "Happy Clients",
      icon: smileFaceIcon,
    },
    {
      id: 4,
      value: "99%",
      label: "Client Satisfaction",
      icon: starIcon,
    },
  ];
  return (

<section className="py-20 bg-white">
    <SectionTitle title="Benchmarks of Success"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat)=>
                    (
<div 
              key={stat.id} 
              className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-100 p-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 duration-300"
            >
              
              <div className="mb-4 h-10 w-10 flex items-center justify-center">
                <img 
                  src={stat.icon} 
                  alt={stat.label} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {stat.value}
              </h3>
                        
              <p className="text-sm text-gray-500 font-medium">
                {stat.label}
              </p>

            </div>
                    ))}
</div>

</section>
)
}
