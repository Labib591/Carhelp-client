import React, { useEffect, useState } from "react";
import Car from "./Car";
import { Navigate, useNavigate } from "react-router";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";

const RecentListings = () => {

    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(true);

    const availableCars = data.filter(car => car.availability === true);
    console.log(availableCars);

    const navigate = useNavigate();
  
    useEffect(() => {
      fetch("https://carhelp-server.vercel.app/recentcars")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, Array.isArray(data));
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });  
    },
    []
    )

  return (
    <div className="my-30 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-semibold text-center font-display">
        Recent Listings
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-[90%] mx-auto my-10">
        {availableCars.map((car) => (
          <Car car={car} key={car._id}></Car>
        ))}
      </div>

      <button onClick={() => navigate("/availablecars")} className="bg-gradient-to-r from-[var(--primary-600)] to-[var(--primary-400)] text-white font-semibold py-3.5 px-6 rounded-2xl shadow-lg shadow-[var(--primary-color)]/25 group-hover:shadow-xl hover:shadow-[var(--primary-color)]/40 transform hover:scale-[1.02] transition-all duration-300 ease-out">
                  <span className="flex items-center justify-center">
                    View All Cars
                    <IoIosArrowForward></IoIosArrowForward>
                  </span>
                </button>
    </div>
  );
};

export default RecentListings;
