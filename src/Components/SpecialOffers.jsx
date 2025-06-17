import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Marquee from "react-fast-marquee";
const offers = [
  {
    title: "15% Off Weekend Rentals!",
    description: "Enjoy a discounted ride this weekend. Limited time only!",
    button: "Book Now",
  },
  {
    title: "Luxury Cars for $99/day",
    description: "Drive premium for less this holiday season.",
    button: "Learn More",
  },
];

const SpecialOffers = () => {

    const navigate = useNavigate();

  return (
    <section className="py-16 px-4 md:px-0 font-display">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-[var(--primary-950)] text-center mb-10">
          Special Offers
        </h2>
        <Marquee speed={50} pauseOnHover={true}>
            <div className="flex gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between p-6 bg-red-500"
              onClick={() => navigate("/availablecars")}
            >
              <div>
                <h3 className="text-2xl font-semibold text-[var(--primary-50)] mb-2">
                  {offer.title}
                </h3>
                <p className="text-[var(--primary-100)] mb-6">{offer.description}</p>
              </div>
              <button  className="self-start bg-[var(--primary-800)] text-white px-5 py-2 rounded-xl hover:bg-[var(--primary-900)] transition-colors duration-300">
                {offer.button}
              </button>
            </motion.div>
          ))}
        </div>
        </Marquee>
      </div>
    </section>
  );
};

export default SpecialOffers;
