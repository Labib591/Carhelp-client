import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import MyBookingsTable from "../Components/MyBookingsTable";

const MyBookings = () => {

    const{user} = use(AuthContext);
    // console.log(user);

    const[data,setData] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/bookings")
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
            <MyBookingsTable myCars={myCars}></MyBookingsTable>
        }
    </div>);
};

export default MyBookings;