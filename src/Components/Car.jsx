import React from "react";

const Car = ({ car }) => {
  const {
    model,
    image,
    price,
    description,
    availability,
    location,
    registrationNumber,
    bookingCount,
  } = car;

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl bg-[var(--primary-50)] hover:scale-105 hover:transform duration-300 ">
      <div className="w-full">
        <img src={image} alt="" className="w-full h-[250px] rounded-t-2xl" />
      </div>
      <div className="flex flex-col gap-2 justify-baseline items-baseline w-full ml-6 mb-4">
        <h1 className="text-2xl font-bold">{model}</h1>
        <p className="text-center text-xl text-gray-500 font-bold">
          Price: ${price}/day
        </p>
        <p className="text-center text-sm text-gray-500">
          Description: {description}
        </p>
        <p className="text-center text-sm">
          {availability ? (
            <span className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded-full">
              Available
            </span>
          ) : (
            <span className="inline-block px-2 py-1 text-red-700 bg-red-100 rounded-full">
              Unavailable
            </span>
          )}
        </p>
        <p className="text-center text-sm text-gray-500">
          Location: {location}
        </p>
        <p className="text-center text-sm text-gray-500">
          Registration Number: {registrationNumber}
        </p>
        <p className="text-center text-sm text-gray-500">
          Booking Count: {bookingCount}
        </p>
      </div>
    </div>
  );
};

export default Car;
