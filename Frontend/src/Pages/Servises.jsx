import React from "react";
import Services from "../JSON/Services.js";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Servises = () => {
  return (
    <div className="bg-gradient-to-t from-[#3C1C92] to-[#3C003F] text-white">
      <div className=" bg-white py-14 px-6 md:px-10 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-black font-AfacadFlux">
            Our Services
          </h1>
          <p className="text-black/90 mt-3 text-base md:text-lg max-w-2xl mx-auto font-AfacadFlux">
            Explore our range of solutions designed to help your business grow and scale with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-gradient-to-b from-purple-300 to-blue-300 border border-white/20 backdrop-blur-md rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] min-h-[320px] cursor-pointer"
            >
              <div>
                <div className="w-full flex justify-center mb-3">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-20 h-20 object-cover rounded-md shadow-sm"
                  />
                </div>
                <h2 className="text-lg font-semibold text-black mb-2 font-AfacadFlux text-center">
                  {service.name}
                </h2>
                <p className="text-black/80 text-sm font-AfacadFlux leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 text-black font-semibold hover:text-pink-400 transition">
                <Link to={`/services/${service.name}`} className="hover:underline text-sm">Read More</Link>
                <FaArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servises;
