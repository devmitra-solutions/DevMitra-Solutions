import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#4c1241] text-white sticky top-0 z-50 ">
      <div className="container mx-auto bg-[#4c1241] text-white p-4 flex justify-between items-center lg:pl-20 lg:pr-20">
        <div className="logo">
          <Link to={"/"}><img src={logo} alt="DevMitra" className="w-24 lg:w-24" /></Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links gap-8 items-center hidden lg:flex">
          <Link to="/" className="text-white text-lg font-bold duration-300 hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white text-lg font-bold duration-300 hover:text-gray-300">About</Link>
          <Link to="/services" className="text-white text-lg font-bold duration-300 hover:text-gray-300">Services</Link>
          <Link to="/join-us" className="text-white text-lg font-bold duration-300 hover:text-gray-300">Join us</Link>
          <Link to="/contact" className="text-white text-lg font-bold duration-300 hover:text-gray-300 font-serif">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation with animation */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden transform origin-top ${
          isOpen ? "scale-y-100 opacity-100 max-h-screen" : "scale-y-0 opacity-0 max-h-0"
        } bg-gradient-to-t from-[#3C003F] to-[#3C1C92] text-white lg:hidden`}
      >
        <div className="nav-links flex flex-col gap-4 items-center py-4">
          <Link to="/" className="text-lg font-bold duration-300 hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-lg font-bold duration-300 hover:text-gray-300">About</Link>
          <Link to="/services" className="text-lg font-bold duration-300 hover:text-gray-300">Services</Link>
          <Link to="/join-us" className="text-lg font-bold duration-300 hover:text-gray-300">Join us</Link>
          <Link to="/contact" className="text-lg font-bold duration-300 hover:text-gray-300 font-serif">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
