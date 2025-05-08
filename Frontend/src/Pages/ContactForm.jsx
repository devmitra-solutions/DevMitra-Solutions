import React, { useState } from "react";
import Header from "../Compoments/Header";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [statusColor, setStatusColor] = useState("text-green-600");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    setStatusColor("text-yellow-400");

    const formData = new FormData(e.target);
    formData.append("access_key", "2db6bec1-ff45-4077-85fa-849e6b83b1ab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!", { position: "top-center" });
      setStatusColor("text-green-600");
      setResult("Message sent successfully!");
      setTimeout(() => setResult(""), 2000);
      e.target.reset();
    } else {
      setStatusColor("text-red-600");
      setResult("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-[#4c1241] to-[#3533cd] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Get In Touch</h2>
          <p className="text-sm md:text-base">
            Whether you need a tech partner, a quote, or have <br /> a question — we’re here to help.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-black shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="from_name" value="Devmitra Solutions" />

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block mb-1 font-medium cursor-pointer">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="border border-black outline-none rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1 font-medium cursor-pointer">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="border border-black outline-none rounded px-4 py-2 w-full"
                  required
                />
              </div>
            </div>

            {/* Contact Number */}
            <div className="w-full">
              <label htmlFor="contactNumber" className="block mb-1 font-medium cursor-pointer">Contact Number</label>
              <div className="flex gap-2 items-center w-full">
                <select name="country_code" id="countryCode" className="border border-black rounded px-2 py-2">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contact_number"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  placeholder="Contact Number"
                  className="border border-black outline-none rounded px-4 py-2 w-full"
                  required
                />
              </div>
            </div>

            {/* Email and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block mb-1 font-medium cursor-pointer">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="border rounded px-4 py-2 border-black outline-none w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium cursor-pointer">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="border rounded border-black outline-none px-4 py-2 w-full"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-1 font-medium cursor-pointer">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="What do you have in mind"
                rows="4"
                className="border rounded px-4 py-2 border-black outline-none w-full"
                required
              ></textarea>
            </div>

            {/* Button & Status */}
            <div className="flex justify-center items-center flex-col">
              <span className={`w-full mb-2 font-bold text-center ${statusColor}`}>{result}</span>
              <button
                type="submit"
                className="bg-[#3c2d91] text-white font-medium px-6 py-2 rounded-full hover:bg-[#2e2376] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-3xl">
          <Link to={"https://www.instagram.com/devmitrasolutions_official?igsh=cDdyY3Jzb2ZrcGI1"} target="_blank">
          <FaInstagram className="duration-300 hover:text-pink-500 cursor-pointer" />
          </Link>
          <FaLinkedin className="duration-300 hover:text-blue-500 cursor-pointer" />
          <FaFacebookF className="duration-300 hover:text-blue-600 cursor-pointer" />
        </div>

        {/* Contact Info Footer */}
        <div className="max-w-5xl mx-auto text-sm flex flex-col md:flex-row justify-between items-center mt-8 px-4 text-white">
          <div className="text-center md:text-left">
            <p className="font-semibold text-2xl text-center">DEVMITRA</p>
            <p className="text-xs mt-1">© 2025 Devmitra Solutions. All Rights Reserved.</p>
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="font-semibold">Email</p>
            <p className="text-xs mt-1">
              <a href="mailto:contact@devmitra.com" className="underline text-md">contact@devmitra.com</a><br />
              <a href="mailto:hr@devmitra.com" className="underline text-md">hr@devmitra.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
