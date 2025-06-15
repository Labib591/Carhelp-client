import React from "react";
import { FiSearch, FiCalendar, FiKey } from "react-icons/fi";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Browse Cars",
    description:
      "Explore a wide variety of vehicles that suit your needs and style.",
    icon: <FiSearch className="text-4xl text-[#00BFFF]" />,
  },
  {
    title: "Pick Your Dates",
    description:
      "Choose your pickup and return dates to see availability instantly.",
    icon: <FiCalendar className="text-4xl text-[#00BFFF]" />,
  },
  {
    title: "Drive Away",
    description:
      "Confirm your booking and enjoy the ride with full peace of mind.",
    icon: <FiKey className="text-4xl text-[#00BFFF]" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#E6F9FF] py-16 px-6 md:px-0 font-display">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl font-bold text-[#002633] mb-4">How It Works</h2>
        <p className="text-[#004C66] mb-12 text-lg">
          Renting a car has never been this easy. Follow three simple steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-[#CCF2FF] rounded-full p-4 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#004C66] mb-2">
                {step.title}
              </h3>
              <p className="text-[#007399]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
