import React, { Suspense } from "react";
import { useLoaderData } from "react-router";

const CarDetails = () => {

    const {model,image,description,price,availability} = useLoaderData();
    console.log(model);

    return (
    <Suspense fallback={<div>Loading...</div>}>
        <div className="my-25 text-center w-[70%] h-[400px] mx-auto flex gap-4 bg-[var(--primary-50)] rounded-2xl p-2">
        <img src={image} alt="" className="w-[40%] rounded-2xl"/>
        <div className="flex flex-col justify-between items-baseline gap-2">
            <div className="flex flex-col items-baseline">
                <h1 className="text-6xl font-semibold">{model}</h1>
            <p className="">{description}</p>
            <h1 className="text-2xl font-semibold">${price}/day</h1>
            </div>
            <div>
                {
                    availability ? (
                        <button className="bg-[var(--primary-color)] text-[var(--primary-950)] py-2 px-4 rounded-full cursor-pointer hover:scale-105 hover:transform duration-300">Book Now</button>
                    ) : (
                        <span className="inline-block px-2 py-1 text-red-700 bg-red-100 rounded-full">
                            Unavailable
                        </span>
                    )
                }
            </div>
        </div>
    </div>
    </Suspense>
);
};  

export default CarDetails;