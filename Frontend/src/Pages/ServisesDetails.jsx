import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ServicesData from "../JSON/Services";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Find the matching service
  const service = ServicesData.find((s) => s.name === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600">Service Not Found</h1>
          <p className="text-gray-600 mt-2">
            The service you are looking for does not exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#3C1C92] to-[#3C003F] text-white px-4 py-10 flex flex-col items-center justify-center">
      
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 font-AfacadFlux text-center">
        Service Details
      </h2>

      <div className="w-full max-w-7xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

          {/* Image Section */}
          <div className="h-80 lg:h-full w-full">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-AfacadFlux">
              {service.name}
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-AfacadFlux">
              {service.description}
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button
                onClick={() => navigate(-1)}
                className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition"
              >
                ← Go Back
              </button>
              <button className="bg-white text-[#3C1C92] px-6 py-2 rounded-full hover:bg-gray-200 font-semibold transition">
                Book Service
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
