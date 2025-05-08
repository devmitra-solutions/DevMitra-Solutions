import React from 'react';
import heroImg from "../assets/heroImg.png";
import evolutionImg from "../assets/evolution.png";
import implementationImg from "../assets/implementation.png";
import strategyImg from "../assets/strategy.png";

const HeroSection = () => {
  return (
<div className="bg-gradient-to-b from-[#4c1241] to-[#3533cd] text-white shadow-lg">
    <div className="container mx-auto bg-gradient-to-b  to-[#3533cd] text-white h-screen p-5 flex flex-col lg:flex-row justify-between lg:pl-24 lg:pr-24">
      {/* Left Section - Text */}
      <div className="text-center lg:text-center max-w-xl lg:mt-32">
        <h1 className="text-4xl lg:text-5xl font-bold font-sans leading-tight text-center">
          Turn Your Ideas Into <br />
          <span className="text-3xl lg:text-4xl text-purple-200">Digital <span className='text-pink-300'>Solutions</span></span>
        </h1>
        <p className="mt-6 text-lg lg:text-xl font-sans text-gray-200 text-center">
          From startups to enterprises, Devmitra <br /> Solutions delivers reliable tech services 
          <br className="hidden lg:block" />
          — from code to consulting.
        </p>
        <button className="mt-8 bg-white text-purple-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="mb-8 lg:mb-0 lg:mt-20">
        <img src={heroImg} alt="Hero" className="w-full max-w-md lg:w-[550px]" />
      </div>
    </div>
    <div className=" bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center text-center">
          <div>
            <img src={evolutionImg} alt="Evaluation" className="mx-auto w-40 lg:w-40 cursor-pointer" />
            <p className="mt-4 font-medium text-gray-800">Evaluation</p>
          </div>
          <div>
            <img src={strategyImg} alt="Creating Strategies" className="mx-auto w-40 lg:w-40 cursor-pointer" />
            <p className="mt-4 font-medium text-gray-800">Creating Strategies</p>
          </div>
          <div>
            <img src={implementationImg} alt="Implementation" className="mx-auto w-40 lg:w-40 cursor-pointer" />
            <p className="mt-4 font-medium text-gray-800">Implementation</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
