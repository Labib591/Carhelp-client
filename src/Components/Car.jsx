import React from "react";
import { Link } from "react-router";

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
    _id
  } = car;

  return (
    <Link to={`/cardetails/${_id}`}>
    <div className='flex flex-col justify-baseline items-center gap-4 rounded-2xl bg-[var(--primary-50)] hover:scale-105 hover:transform duration-300'>
      <div className="w-full">
        <img src={image} alt="" className="w-full h-[250px] rounded-t-2xl" />
      </div>
      <div className="flex flex-col gap-2 justify-baseline items-baseline w-full px-6 mb-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold">{model}</h1>
        <p className="text-center text-sm font-semibold">
          {availability ? (
            <span className="inline-block px-2 py-1 text-[var(--primary-950)] bg-green-300 rounded-full">
              Available
            </span>
          ) : (
            <span className="inline-block px-2 py-1 text-red-700 bg-red-100 rounded-full">
              Unavailable
            </span>
          )}
        </p>
        </div>
        <p className="text-center text-xl text-gray-500 font-bold">
          Price: ${price}/day
        </p>
        
        <p className="text-center text-sm text-gray-500">
          Description: {description}
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
        <button className="bg-[var(--primary-color)] text-white py-2 px-4 rounded-full w-full cursor-pointer">
          See Details
        </button>
      </div>
    </div>
    </Link>
  );
};

export default Car;
