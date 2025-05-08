import { useState, useEffect } from "react";
import client1 from "../assets/Clients/client1.png";
import client2 from "../assets/Clients/client2.png";

const data = [
  {
    client: {
      name: "Arpit Kumar",
      review:
        "Excellent service and stunning project results! Highly professional.",
      avatar:
        "https://media.istockphoto.com/id/492529287/photo/portrait-of-happy-laughing-man.jpg?s=612x612&w=0&k=20&c=0xQcd69Bf-mWoJYgjxBSPg7FHS57nOfYpZaZlYDVKRE=",
    },
    project: {
      title: "ChaneepWeb Services",
      description:
        "We deliver impactful digital solutions that earn praise. Our focus is on creativity, collaboration, and measurable results across every project we build.",
      image: client1,
    },
  },
  {
    client: {
      name: "Sarah Parker",
      review:
        "They brought my idea to life beautifully. Great design sense and execution!",
      avatar: "https://i.pravatar.cc/100?img=8",
    },
    project: {
      title: "Photography Portfolio",
      description:
        "A sleek, responsive portfolio for a professional photographer—focused on visual storytelling, clean layout, and fast performance across all devices.",
      image: client2,
    },
  },
];

const TestimonialProjectSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = data[index];

  return (
    <>
      <section className="bg-gradient-to-t from-[#3C003F] to-[#3C1C92] text-white py-10 px-4">
        <h3 className="text-center mb-5 text-4xl font-bold">
          What Our Client Says
        </h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Client Testimonial Card */}
          <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={current.client.avatar}
                alt={current.client.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
              />
              <div>
                <h3 className="text-xl font-semibold">{current.client.name}</h3>
                <p className="text-sm text-gray-500">Client Review</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed italic">
              “{current.client.review}”
            </p>
          </div>

          {/* Project Showcase Card */}
          <div className="bg-white text-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src={current.project.image}
              alt={current.project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {current.project.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {current.project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setIndex((index - 1 + data.length) % data.length)}
            className="bg-white text-purple-700 hover:bg-purple-100 font-semibold px-5 py-2 rounded-full shadow-md transition"
          >
            ‹ Previous
          </button>
          <button
            onClick={() => setIndex((index + 1) % data.length)}
            className="bg-white text-purple-700 hover:bg-purple-100 font-semibold px-5 py-2 rounded-full shadow-md transition"
          >
            Next ›
          </button>
        </div>
      </section>
      <div className="achivement-section container mx-auto py-16 px-4 flex flex-col md:flex-row items-center justify-between text-center gap-10 lg:px-20">
        {/* Project Completion */}
        <div className="relative p-10 rounded-xl hover:shadow-2xl transition duration-300 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-400 to-blue-200 blur-2xl opacity-70 -z-10"></div>
          <p className="text-4xl font-extrabold text-black">200</p>
          <p className="text-lg font-semibold text-gray-700">
            Project Completion
          </p>
        </div>

        {/* Weekly Work */}
        <div className="relative p-10 rounded-xl hover:shadow-2xl transition duration-300 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-400 to-blue-200 blur-2xl opacity-70 -z-10"></div>
          <p className="text-4xl font-extrabold text-black">
            40 <span className="text-lg font-bold">Hours</span>
          </p>
          <p className="text-lg font-semibold text-gray-700">Weekly Work</p>
        </div>

        {/* Experience */}
        <div className="relative p-10 rounded-xl hover:shadow-2xl transition duration-300 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-400 to-blue-200 blur-2xl opacity-70 -z-10"></div>
          <p className="text-4xl font-extrabold text-black">
            10 <span className="text-lg font-bold">Years</span>
          </p>
          <p className="text-lg font-semibold text-gray-700">Experience</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialProjectSlider;
