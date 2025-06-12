import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import MyCarsTable from "../Components/MyCarsTable";

const MyCars = () => {

    const {user} = use(AuthContext);
    const cars = useLoaderData();
    const myAddedCars = cars.filter((car) => car.userEmail === user.email); 
    console.log(myAddedCars);

    return (
        <div className="my-25 px-4">
            <h1 className="text-6xl font-semibold text-center">Your Added Cars</h1>

            {
                myAddedCars?.length > 0?<MyCarsTable myCars={myAddedCars} cars={cars}></MyCarsTable>:
                <>
            <div className="flex flex-col items-center">
                <p className="text-center text-2xl font-semibold text-red-300 mt-20">No Bookings Found</p>
                <Link to={"/addcars"}><button className="mt-10 bg-[var(--primary-color)] text-[var(--primary-950)] font-semibold px-4 py-2 rounded-full cursor-pointer"> Book A Car</button></Link>
            </div>
            </>
            }
        </div>
    );
};

export default MyCars;