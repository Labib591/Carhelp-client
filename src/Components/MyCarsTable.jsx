import React from "react";
import { use } from "react";
import { FaPen } from "react-icons/fa";
import { IoCalendarOutline, IoPencil, IoTrashBin } from "react-icons/io5";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
// import { useNavigate } from "react-router-dom";

const MyCarsTable = ({ myCars, setCars, onModify }) => {
  const {user} = use(AuthContext);
  //   const navigate = useNavigate();

  const formatDate = (rawDate) => {
    // console.log(rawDate);
    if (!rawDate) return "N/A";

    const date = new Date(rawDate);
    if (isNaN(date.getTime())) return "Invalid Date";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}:${month}:${year}`;
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://carhelp-server.vercel.app/cars/${id}?email=${user.email}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCar) {
              setCars((prevData) => prevData.filter((car) => car._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Car could not be deleted.",
                icon: "error",
              });
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto my-10 rounded-xl border border-[var(--primary-100)] font-display shadow-md">
      <table className="table w-full">
        <thead className="bg-[var(--primary-100)] text-[var(--primary-900)]">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Model</th>
            <th>Price</th>
            <th>Bookings</th>
            <th>Availability</th>
            <th>Date Added</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myCars.map((car, index) => (
            <tr
              key={car.carId}
              className="hover:bg-[var(--primary-50)] transition duration-200"
            >
              <td className="font-semibold">{index + 1}</td>
              <td>
                <img
                  src={car.image}
                  alt="Car"
                  className="rounded-lg w-24 h-16 object-cover"
                />
              </td>
              <td className="font-semibold">{car.model}</td>
              <td>${car.price}</td>
              <td>{car.bookingCount}</td>
              <td>{car.availability ? "Available" : "Not Available"}</td>
              <td>{formatDate(car.addDate)}</td>
              <td className="flex gap-2 items-center">
                <button
                  onClick={() => onModify(car)}
                  className="btn px-3 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-600)] text-white text-sm font-medium rounded-lg flex items-center gap-1"
                >
                  <FaPen className="text-lg" />
                  Update
                </button>
                <button
                  onClick={() => handleDelete(car._id)}
                  className="btn px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg flex items-center gap-1"
                >
                  <IoTrashBin className="text-lg" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCarsTable;
