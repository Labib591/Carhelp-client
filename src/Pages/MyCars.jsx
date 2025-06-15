import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import MyCarsTable from "../Components/MyCarsTable";
import CarModifyModal from "../Components/CarModifyModal";

const MyCars = () => {
  const { user } = use(AuthContext);
  const [cars, setCars] = useState([]);

  const [isModal, setIsModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://carhelp-server.vercel.app/cars?email=${user.email}`,{
      headers:{
        authorization: `Bearer ${user.accessToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, Array.isArray(data));
        setCars(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <span className="loading loading-spinner loading-xl mx-auto flex justify-center"></span>
    );
  }


  const handleModifyCar = (car) => {
    setSelectedCar(car);
    setIsModal(true);
  }

  const handleModalOff = () => {
    setIsModal(false);
    setSelectedCar(null);
  }

  const handleUpdateCar = (updtaedCar) => {
    setCars((prevData) =>
      prevData.map((booking) =>
        booking._id === updtaedCar._id ? updtaedCar : booking
      )
    );
    handleModalOff();
  }

  return (
    <div className="my-25 px-4">
      <h1 className="text-6xl font-semibold text-center">Your Added Cars</h1>

      {cars?.length > 0 ? (
        <MyCarsTable myCars={cars} setCars={setCars} onModify = {handleModifyCar}></MyCarsTable>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <p className="text-center text-2xl font-semibold text-red-300 mt-20">
              No Bookings Found
            </p>
            <Link to={"/addcars"}>
              <button className="mt-10 bg-[var(--primary-color)] text-[var(--primary-950)] font-semibold px-4 py-2 rounded-full cursor-pointer">
                {" "}
                Add A Car
              </button>
            </Link>
          </div>
        </>
      )}

      {
        isModal && selectedCar && <CarModifyModal car={selectedCar} onModalOff={handleModalOff} onUpdateCar={handleUpdateCar}></CarModifyModal>
      }
    </div>
  );
};

export default MyCars;
