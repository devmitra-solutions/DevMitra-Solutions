import React from "react";
import { FaCode, FaMobileAlt, FaPencilRuler, FaSearch, FaBullhorn, FaLightbulb } from "react-icons/fa";
import Web from "../../assets/About/web.png";
import App from "../../assets/About/App.png";
import UIUX from "../../assets/About/UIUX.png";
import SEO from "../../assets/About/SEO.png";
import Digital from "../../assets/About/Digital.png";
import Consulting from "../../assets/About/Consulting.png";

const services = [
  { icon: Web, title: "Web Development" },
  { icon: App, title: "App Development" },
  { icon: UIUX, title: "UI/UX Design" },
  { icon: SEO, title: "SEO" },
  { icon: Digital, title: "Digital Marketing" },
  { icon: Consulting, title: "Consulting" },
];

export default function OurStorySection() {
  return (
    <div className="bg-[#2e2376] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Our Story</h2>
        <div className="bg-white text-black rounded-2xl p-6 shadow-md">
          <p className="mb-2">
            Devmitra Solutions was founded with a vision to bridge the gap between business needs and technical innovation.
          </p>
          <p className="mb-2">
            What began as a small team of developers has evolved into a creative tech agency trusted by clients for web development, app development, UI/UX design, and digital consulting.
          </p>
          <p>
            We believe in delivering smart, scalable, and reliable solutions — one project at a time.
          </p>
        </div>

        <h3 className="text-3xl font-semibold mt-16 mb-10">What We Do</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-transparent text-white p-4"
            >
              <div className="mb-4"><img src={service.icon} alt="" /></div>
              <div className="bg-white text-black px-4 py-1 rounded-full font-semibold text-sm">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}