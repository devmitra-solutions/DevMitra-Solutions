import React from "react";
import {
  FaLaptopCode,
  FaUserGraduate,
  FaCertificate,
  FaClock,
  FaEnvelopeOpenText,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    title: "Client Projects",
    icon: <FaLaptopCode size={20} />,
    description: "Hands-on work on real tech solutions.",
  },
  {
    title: "Mentorship",
    icon: <FaUserGraduate size={20} />,
    description: "Learn directly from experienced professionals.",
  },
  {
    title: "Certification",
    icon: <FaCertificate size={20} />,
    description: "Get verified experience and a portfolio boost.",
  },
  {
    title: "Flexible Work",
    icon: <FaClock size={20} />,
    description: "Remote or hybrid opportunities.",
  },
  {
    title: "LORs",
    icon: <FaEnvelopeOpenText size={20} />,
    description: "Get recommendation letter.",
  },
  {
    title: "Career Growth",
    icon: <FaChartLine size={20} />,
    description: "Open the door to freelance and long-term roles.",
  },
];

const WhyJoinUs = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12">Why Be a Part of Our Journey?</h2>
      <div className="container mx-auto lg:pl-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-200 lg:w-52 w-auto text-center p-6 rounded-lg shadow hover:shadow-lg transition duration-300  cursor-pointer"
          >
            <div className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-md mr-3">
                {feature.icon}
              </span>
              <h3 className="font-semibold text-blue-600">{feature.title}</h3>
            </div>
            <p className="text-black text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoinUs;










