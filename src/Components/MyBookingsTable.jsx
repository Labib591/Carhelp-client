import React from "react";
import { IoCalendarOutline, IoTrashBin } from "react-icons/io5";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router-dom";

const MyBookingsTable = ({ myCars }) => {
//   const navigate = useNavigate();

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}:${month}:${year}`;
  };

  const formatDateTime = (isoDate) => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}:${month}:${year} ${hours}:${minutes}`;
};



  return (
    <div className="overflow-x-auto my-10 rounded-xl border border-[var(--primary-100)]  shadow-md">
      <table className="table w-full">
        <thead className="bg-[var(--primary-100)] text-[var(--primary-900)]">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Model</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Days</th>
            <th>Total Cost</th>
            <th>Booking Date</th>
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
              <td>{formatDate(car.startDate)}</td>
              <td>{formatDate(car.endDate)}</td>
              <td>{car.totalDays}</td>
              <td>${car.totalCost}</td>
              <td>{formatDateTime(car.bookingDate)}</td>
              <td className="flex gap-2 items-center">
                <button
                //   onClick={() => navigate(`/car/${car._id}`)}
                  className="btn px-3 py-2 bg-[var(--primary-color)] hover:bg-[var(--primary-600)] text-white text-sm font-medium rounded-lg flex items-center gap-1"
                >
                  <IoCalendarOutline className="text-lg" />
                  Modify
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

export default MyBookingsTable;
