import React from "react";

const values = [
  {
    title: "Client Collaboration",
    description: "We work with you, not just for you.",
  },
  {
    title: "Quality First",
    description: "Every project is handled with care and clarity.",
  },
  {
    title: "Adaptability",
    description: "We work with you, not just for you.",
  },
  {
    title: "Transparency",
    description: "Clear communication from start to finish.",
  },
];

const processSteps = ["Discover", "Plan", "Develop", "Deliver"];

export default function OurValues() {
  return (
    <div className="bg-white text-black py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Our Values */}
        <h3 className="text-3xl font-semibold mb-10">Our Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#3c2d91] text-white p-6 rounded-2xl shadow text-left"
            >
              <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
              <p className="text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Our Process */}
        <h3 className="text-3xl font-semibold mt-20 mb-10">Our Process</h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="bg-[#3c2d91] text-white px-6 py-2 rounded-full font-medium">
                {step}
              </div>
              {index < processSteps.length - 1 && (
                <div className="text-3xl text-[#3c2d91]">➤</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}