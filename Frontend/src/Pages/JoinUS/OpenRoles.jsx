import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const roles = [
  {
    title: "UI/UX Designer (Intern)",
    type: "Intern",
    details: {
      duration: "2–3 Months",
      tools: "Figma, Canva",
      workType: "Remote",
    },
  },
  {
    title: "Front-End Developer",
    type: "Freelancer",
    details: {
      duration: "Depends on project",
      tools: "React, Tailwind",
      workType: "Remote/Flexible",
    },
  },
  {
    title: "FullStack Developer [MERN Developer/Java SpringBoot/ Python Django] (Intern)",
    type: "Intern",
    details: {
      duration: "1–2 Months",
      tools: "Code Editer, Postman, GitHub",
      workType: "Remote",
    },
  },
  {
    title: "Digital Marketing Intern",
    type: "Intern",
    details: {
      duration: "Flexible",
      tools: "Google Analytics, SEMrush",
      workType: "Remote",
    },
  },
];

const OpenRoles = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Open Roles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 text-left shadow-md transition hover:shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {role.title}
                </h3>
                {role.type === "Freelancer" && (
                  <span className="text-sm text-gray-600">(Freelancer)</span>
                )}
              </div>
              <button
                onClick={() => toggleDetails(index)}
                className="text-purple-600"
              >
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {openIndex === index && (
              <div className="mt-4 text-sm text-gray-700">
                <ul className="list-disc ml-4 space-y-1 mb-4">
                  <li>Duration: {role.details.duration}</li>
                  <li>Tools: {role.details.tools}</li>
                  <li>Type: {role.details.workType}</li>
                </ul>
                <Link to={"https://forms.gle/vigqEbG334RkEPjS8"} target="_blank" className="bg-purple-600 text-white px-4 py-1 rounded-full font-semibold hover:bg-purple-700 transition">
                  Apply
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenRoles;



