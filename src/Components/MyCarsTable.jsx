import React from "react";
import { FaPen } from "react-icons/fa";
import { IoCalendarOutline, IoPencil, IoTrashBin } from "react-icons/io5";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'
// import { useNavigate } from "react-router-dom";

const MyCarsTable = ({ myCars, cars}) => {
  //   const navigate = useNavigate();

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}:${month}:${year}`;
  };


  const handleDelete = (id, carId) => {
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
        fetch(`https://carhelp-server.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              setData((prevData) =>
              prevData.filter((car) => car.carId !== carId)
            );
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleModify = () => {
    Swal.fire({
          position: "center",
          icon: "success",
          title: "Your task has been added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
  }

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
                onClick={handleModify}
                  className="btn px-3 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-600)] text-white text-sm font-medium rounded-lg flex items-center gap-1"
                >
                  <FaPen className="text-lg" />
                  Update
                </button>
                <button
                  onClick={() => handleDelete(car._id, car.carId)}
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
