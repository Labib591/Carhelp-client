import React from "react";
import HeroImage from "../assets/hero.jpg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative font-display">
      <img
        src={HeroImage}
        alt="HeroImage"
        loading="lazy"
        className="w-full h-screen bg-cover"
        style={{ filter: "brightness(50%)" }}
      />
      <div className="absolute bottom-1/5 left-1/18 text-white">
        <div className="flex flex-col gap-8 justify-baseline items-baseline">
          <h1 className="text-7xl md:text-8xl font-display font-semibold tracking-tight leading-tight">
            Drive Freedom. Rent Smarter.
          </h1>
          <p className="text-xl md:text-2xl -mt-4 text-[var(--primary-100)] max-w-xl">
            Seamless rentals. Top-rated cars. Zero hassle.
          </p>
          <Link to={"/availablecars"}>
            <div className="border-2 border-[var(--primary-color)] rounded-full">
              <button
              style={{ filter: "opacity(80%)" }}
              className="group bg-[var(--primary-100)] backdrop-blur-xl border-2 border-[var(--primary-300)] flex items-center gap-2 justify-center cursor-pointer text-[var(--primary-950)] text-center tracking-wider rounded-full px-6 py-3 text-lg font-bold"
            >
              Find a car
              <span className="text-2xl rounded-full border-2 border-[var(--primary-700)] bg-[var(--primary-color)] p-1">
                <MdArrowOutward className="group-hover:rotate-360 transition-all duration-700"/>
              </span>
            </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
