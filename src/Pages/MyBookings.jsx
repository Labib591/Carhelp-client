import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import MyBookingsTable from "../Components/MyBookingsTable";
import { Link } from "react-router";
import ModifyModal from "../Components/ModifyModal";

const MyBookings = () => {

    const{user} = use(AuthContext);
    // console.log(user);

    const[data,setData] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`https://carhelp-server.vercel.app/bookings?email=${user.email}`,{
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data, Array.isArray(data));
            setData(data);
            setLoading(false);
        })
    },[]);

    if(loading){
        return <span className="loading loading-spinner loading-xl mx-auto flex justify-center"></span>;
    }
    

    const handleModify = (car) => {
        setSelectedBooking(car);
        setIsModal(true);
    }

    const handleCloseModal = () => {
    setIsModal(false);
    setSelectedBooking(null);
  };

  const handleBookingUpdate = (updatedBooking) => {
    setData((prevData) =>
      prevData.map((booking) =>
        booking._id === updatedBooking._id ? updatedBooking : booking
      )
    );
    handleCloseModal();
  };

    return (<div className="my-25 px-4">
        <title>My Bookings</title>
        <h1 className="font-display text-6xl font-semibold text-center">My Bookings</h1>
        {
            data?.length > 0?<MyBookingsTable key={data._id} myCars={data} cars={data} setData={setData} onModifyClicked={handleModify}></MyBookingsTable>:
            <>
            <div className="flex flex-col items-center">
                <p className="text-center text-2xl font-semibold text-red-300 mt-20">No Bookings Found</p>
                <Link to={"/availablecars"}><button className="mt-10 bg-[var(--primary-color)] text-[var(--primary-950)] font-semibold px-4 py-2 rounded-full cursor-pointer"> Book A Car</button></Link>
            </div>
            </>
        }

        {
            isModal && selectedBooking && <ModifyModal car={selectedBooking} onClose={handleCloseModal} onUpdate={handleBookingUpdate}></ModifyModal>
        }
    </div>);
};

export default MyBookings;