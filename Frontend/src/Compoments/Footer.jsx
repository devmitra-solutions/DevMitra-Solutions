import React from "react";
import { FaLinkedin, FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#4c1241] to-[#3533cd] text-white px-4 py-10">
      <div className="container mx-auto max-w-7xl lg:pr-20 lg:pl-20 flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Brand Info */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-wide">
            DEVMITRA{" "}
            <span className="block text-sm font-normal">---SOLUTIONS---</span>
          </h2>
          <p className="text-sm mt-2">
            © 2025 Devmitra Solutions. All Rights Reserved.
          </p>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <Link to="/contact" className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-purple-100 transition">
            Contact Us
          </Link>
          <p className="text-xs mt-2">To Get Services / To Join Us</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-purple-300 my-8 w-full" />

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-xl">
        <a href="#" aria-label="LinkedIn">
          <FaLinkedin className="hover:text-blue-500 transition duration-300" />
        </a>
        <Link to={"https://www.instagram.com/devmitrasolutions_official?igsh=cDdyY3Jzb2ZrcGI1"} target="_blank" aria-label="Instagram">
          <GrInstagram className="hover:text-pink-500 transition duration-300" />
        </Link>
        <a href="#" aria-label="Facebook">
          <FaFacebook className="hover:text-blue-600 transition duration-300" />
        </a>
        <a href="#" aria-label="Twitter">
          <FaSquareXTwitter className="hover:text-sky-400 transition duration-300" />
        </a>
        <a href="#" aria-label="YouTube">
          <IoLogoYoutube className="hover:text-red-600 transition duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
