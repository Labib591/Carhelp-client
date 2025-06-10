import React, { useEffect, useState } from "react";
import Car from "./Car";

const RecentListings = () => {

    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(true);
  
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
    <div className="my-30">
      <h1 className="text-6xl font-semibold text-center font-display">
        Recent Listings
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-[90%] mx-auto my-10">
        {data.map((car) => (
          <Car car={car} key={car._id}></Car>
        ))}
      </div>
    </div>
  );
};

export default RecentListings;
