import React from "react";
import { FaBolt, FaCarSide, FaMoneyBillWave } from "react-icons/fa";

const WhyUS = () => {
    return ( <div className="flex flex-col items-center gap-8 my-20 font-display"> 
        <h1 className="h1 text-6xl font-semibold">Why Us?</h1>
        <p className="text-center">Discover what makes us the go-to choice for car rentals. Whether you're planning a quick weekend getaway or a long road trip, we’ve got you covered.</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-[90%] mx-auto">
            <div className="flex flex-col items-center gap-4 rounded-2xl p-4 bg-[var(--primary-50)]">
                <div className="p-4 rounded-full border-2 border-[var-(--primary-950)]">
                    <FaCarSide className="text-5xl text-[var(--primary-400)]"></FaCarSide>
                </div>
                <h1 className="text-2xl font-bold"> Wide Variety of Cars </h1>
                <p className="text-center">Choose from compact cars, spacious SUVs, or premium luxury vehicles — all maintained to the highest standards.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-2xl p-4 bg-[var(--primary-50)]">
                <div className="p-4 rounded-full border-2 border-[var-(--primary-950)]">
                    <FaMoneyBillWave className="text-5xl text-[var(--primary-400)]"></FaMoneyBillWave>
                </div>
                <h1> Wide Variety of Cars </h1>
                <p className="text-center">Choose from compact cars, spacious SUVs, or premium luxury vehicles — all maintained to the highest standards.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-2xl p-4 bg-[var(--primary-50)]">
                <div className="p-4 rounded-full border-2 border-[var-(--primary-950)]">
                    <FaBolt className="text-5xl text-[var(--primary-400)]"></FaBolt>
                </div>
                <h1> Wide Variety of Cars </h1>
                <p className="text-center">Choose from compact cars, spacious SUVs, or premium luxury vehicles — all maintained to the highest standards.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-2xl p-4 bg-[var(--primary-50)]">
                <div className="p-4 rounded-full border-2 border-[var-(--primary-950)]">
                    <FaCarSide className="text-5xl text-[var(--primary-400)]"></FaCarSide>
                </div>
                <h1> Wide Variety of Cars </h1>
                <p className="text-center">Choose from compact cars, spacious SUVs, or premium luxury vehicles — all maintained to the highest standards.</p>
            </div>
        </div>
    </div>);
};

export default WhyUS;