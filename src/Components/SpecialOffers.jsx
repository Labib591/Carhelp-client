import React from "react";
import { useNavigate } from "react-router";
import offer1 from "../assets/50off.png";
import offer2 from "../assets/offer2.png";
const SpecialOffers = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 md:px-0 font-display">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-[var(--primary-950)] text-center mb-10">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img src={offer1} alt="" className="mx-auto" width="500px" />
          <img src={offer2} alt="" className="mx-auto" width="500px" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
