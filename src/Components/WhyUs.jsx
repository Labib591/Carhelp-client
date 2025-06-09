import React from "react";
import { FaBolt, FaCarSide, FaMoneyBillWave } from "react-icons/fa";
import Image1 from "../assets/247.png"
import Image2 from "../assets/caricon.png"
import Image3 from "../assets/bolticon.png"
import Image4 from "../assets/moneyicon.png"

const WhyUS = () => {
    return ( <div className="flex flex-col items-center gap-8 my-20 font-display"> 
        <h1 className="h1 text-6xl font-semibold">Why Us?</h1>
        <p className="text-center text-gray-500">Discover what makes us the go-to choice for car rentals. Whether you're planning a quick weekend getaway or a long road trip, we’ve got you covered.</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-[90%] mx-auto">
            <div className="flex flex-col items-center gap-4 rounded-2xl py-8 px-4 bg-[var(--primary-100)] hover:scale-105 hover:transform duration-300">
                <div className="">
                    <img src={Image2} alt="" className="w-14 h-24"/>
                </div>
                <h1 className="text-2xl font-bold"> Wide Variety of Cars </h1>
                <p className="text-center text-sm text-gray-500">Choose from compact cars, spacious SUVs, or premium luxury vehicles — all maintained to the highest standards.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-2xl py-8 px-4 bg-[var(--primary-100)] hover:scale-105 hover:transform duration-300">
                <div>
                    <img src={Image4} alt="" className="w-14 h-24"/>
                </div>
                <h1 className="text-2xl font-bold"> Affordable Prices </h1>
                <p className="text-center text-sm text-gray-500">Enjoy competitive daily rates with no hidden fees. Quality and value go hand in hand here.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-2xl py-8 px-4 bg-[var(--primary-100)] hover:scale-105 hover:transform duration-300">
                <div>
                   <img src={Image3} alt="" className="w-14 h-24"/>
                </div>
                <h1 className="text-2xl font-bold"> Easy Booking Process </h1>
                <p className="text-center text-sm text-gray-500">Book your ride in minutes with our user-friendly platform. Just a few clicks and you're on the road.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-2xl py-8 px-4 bg-[var(--primary-100)] hover:scale-105 hover:transform duration-300">
                <div>
                    <img src={Image1} alt="" className="w-14 h-24" />
                </div>
                <h1 className="text-2xl font-bold"> 24/7 Customer Support </h1>
                <p className="text-center text-sm text-gray-500">Questions? Last-minute changes? Our support team is always ready to help — day or night.</p>
            </div>
        </div>
    </div>);
};

export default WhyUS;