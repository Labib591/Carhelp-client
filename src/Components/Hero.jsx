import React from "react";
import HeroImage from "../assets/hero.jpg";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={HeroImage}
        alt="HeroImage"
        className="w-full h-screen bg-cover"
        style={{ filter: "brightness(50%)" }}
      />
      <div className="absolute bottom-1/5 left-1/12 text-white">
        <div className="flex flex-col gap-5 justify-baseline items-baseline">
          <h1 className="text-8xl font-display font-light tracking-tight ">
            Rent your dream car
          </h1>
          <button className="bg-[#ffffff80] flex items-center gap-1 justify-center cursor-pointer text-white text-center border-0 tracking-wider rounded-full px-6 py-3">
            Find a car
            <span>
              <MdArrowOutward />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
