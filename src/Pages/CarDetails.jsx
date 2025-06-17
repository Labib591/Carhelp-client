import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import BookingModal from "../Components/BookingModal";

const CarDetails = () => {
  const { model, image, description, price, availability, features } =
    useLoaderData();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBooking = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Suspense
      fallback={
        <div className="text-center my-20 text-xl">Loading car details...</div>
      }
    >
      <title>{`Carhelp | ${model}`}</title>
      <div className="w-[90%] mx-auto my-24 rounded-3xl overflow-hidden shadow-2xl relative font-display">
        {/* Background Image */}
        <div className="relative h-[800px] w-full">
          <img src={image} alt={model} className="w-full h-full object-fill md:object-cover" />

          {/* Bottom Details Overlay */}
          <div className="absolute bottom-0 w-full bg-[var(--primary-50)]/50 backdrop-blur-md px-6 py-6 md:py-8 flex flex-col gap-4">
            <div className="">
              {availability ? (
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-100 text-green-800">
                  Available
                </span>
              ) : (
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-red-100 text-red-800">
                  Unavailable
                </span>
              )}
            </div>
            <div className="flex items-center justify-between bg-[var(--primary-50)] rounded-full px-4 py-2">
                <h1 className="text-lg md:text-4xl font-medium text-gray-900">
              {model}
            </h1>
             <div className="">
              <span className="text-3xl font-bold text-[var(--primary-color)">
                ${price}
              </span>
            </div>
            </div>
            <p className="text-[var(--primary-900)] text-sm md:text-base flex items-center gap-1"><span className="font-semibold text-lg text-[var(--primary-950)]">About the car:  </span>{description}</p>
            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {features.map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-[var(--primary-100)] text-[var(--primary-800)] rounded-full shadow-sm"
                >
                  {feature.toUpperCase()}
                </span>
              ))}
            </div>

            

            {availability && (
              <button
                onClick={handleBooking}
                className="mt-4 w-max px-6 py-2 rounded-full bg-[var(--primary-color)] text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-md"
              >
                Book Now
              </button>
            )}
          </div>
        </div>

        {isModalOpen && (
          <BookingModal onClose={closeModal} car={useLoaderData()} />
        )}
      </div>
    </Suspense>
  );
};

export default CarDetails;
