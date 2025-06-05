import React from "react";
import HeroImage from "../assets/hero.jpg"

const Hero = () => {
    return (
    <div className="relative">
        <img src={HeroImage} alt="HeroImage" className="w-full h-screen bg-cover" style={{filter: 'brightness(50%)'}}/>
        <div className="absolute bottom-1/2 left-1/2 text-white">This is the hero component</div>
    </div>
);
};

export default Hero;