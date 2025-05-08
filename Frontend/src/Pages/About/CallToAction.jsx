import React from "react";

export default function CallToAction() {
  return (
    <div className="bg-[#2e2376] text-white py-16 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-medium mb-6">
        Let’s <span className="font-semibold">build</span> something amazing together.
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button className="bg-white text-[#2e2376] font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
          Explore Our Services
        </button>
        <button className="bg-white text-[#2e2376] font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
          Contact US
        </button>
      </div>
      <div className="flex justify-center items-center text-white text-2xl">
        <span className="px-4">⬅<span className="mx-2 text-sm">•••••••••••••</span>➡</span>
      </div>
    </div>
  );
}
