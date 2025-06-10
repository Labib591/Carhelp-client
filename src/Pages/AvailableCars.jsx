import React from "react";
import { useLoaderData } from "react-router";
import Car from "../Components/Car";

const AvailableCars = () => {
  const data = useLoaderData();
  console.log("data: ", data, Array.isArray(data));

  return (
    <div className="my-30">
      <h1 className="text-6xl font-semibold text-center font-display">
        Available Cars
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-[90%] mx-auto my-10">
        {data.map((car) => (
          <Car car={car} key={car._id}></Car>
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
