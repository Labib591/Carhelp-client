import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import MyBookingsTable from "../Components/MyBookingsTable";
import { Link } from "react-router";

const MyBookings = () => {

    const{user} = use(AuthContext);
    // console.log(user);

    const[data,setData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://carhelp-server.vercel.app/bookings")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data, Array.isArray(data));
            setData(data);
        })
    },[]);

    const myCars = data.filter((car) => car.userEmail === user.email);
    // console.log(myCars);

    return (<div className="my-25 px-4">
        <h1 className="font-display text-6xl font-semibold text-center">My Bookings</h1>
        {
            myCars?.length > 0?<MyBookingsTable myCars={myCars} cars={data} setData={setData}></MyBookingsTable>:
            <>
            <div className="flex flex-col items-center">
                <p className="text-center text-2xl font-semibold text-red-300 mt-20">No Bookings Found</p>
                <Link to={"/availablecars"}><button className="mt-10 bg-[var(--primary-color)] text-[var(--primary-950)] font-semibold px-4 py-2 rounded-full cursor-pointer"> Book A Car</button></Link>
            </div>
            </>
        }
    </div>);
};

export default MyBookings;