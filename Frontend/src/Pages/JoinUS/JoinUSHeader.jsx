import React from "react";
import JoinUsImg from "../../assets/JoinUS/JoinusHeader.png";

const AboutHeader = () => {
  return (
    <div className="bg-gradient-to-b from-[#4c1241] to-[#3533cd] text-white shadow-lg">
      <div className="container mx-auto lg:pr-20 lg:pl-32  h-auto py-10 px-3 text-white shadow-lg grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 items-center lg:gap-48 gap-16 text-center">
        <div className="first  text-center lg:mt-0 mt-10">
          <h1 className="text-4xl">Join Our Team</h1>
          <p className="text-base font-sans text-gray-200 mt-4">
            Whether You're a Student, a freelancer, or a rising developer <br />{" "}
            --there's a place for you here.
          </p>
          <button className="mt-5 p-2 rounded-3xl bg-white text-pink-500 font-bold w-52 text-lg">
            Join US
          </button>
        </div>
        <div className="second">
          <img src={JoinUsImg} alt="" className="w-80" />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
