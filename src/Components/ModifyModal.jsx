import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const ModifyModal = ({ car, onClose, onUpdate }) => {
    const { user } = use(AuthContext);

    // console.log(car);

    const pricePerDay = car.totalCost / car.totalDays;

  const handleBookingUpdate = (e) => {
    e.preventDefault();
    const startDateStr = document.getElementById("startDate").value;
    const endDateStr = document.getElementById("endDate").value;

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const diffInMs = endDate - startDate;

    const totalDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    const totalCost = totalDays * pricePerDay;

    const bookingDate = new Date();
    const bookingDateStr = bookingDate.toISOString();

    const upDatedData = {
        ...car,
        startDate: startDateStr,
        endDate: endDateStr,
        totalDays: totalDays,
        totalCost: totalCost,
        bookingDate: bookingDateStr
    }


    fetch(`https://carhelp-server.vercel.app/bookings/${car._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: car.model,
        image: car.image,
        carId: car._id,
        startDate: startDateStr,
        endDate: endDateStr,
        totalDays: totalDays,
        totalCost: totalCost,
        bookingDate: bookingDateStr,
        userEmail: user.email,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          // Show backend error message
          throw new Error(data.error || "Failed to book the car");
        }

        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your car has been booked successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(data);
          onUpdate(upDatedData);
        }
      })
      .catch((error) => {
        // Show error from backend (e.g. overlap)
        alert(error.message);
      });
  };

  return (
    <div className="fixed inset-0 bg-[#00000020] bg-opacity-50 flex items-center justify-center z-50 font-display">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-lg space-y-2">
        <h2 className="text-2xl font-semibold text-[var(--primary-950)]">
          Book {car.model}
        </h2>
        <p className="text-[var(--primary-800)] text-xl font-bold">
          Price: ${pricePerDay} per day
        </p>

        <div>
          <form onSubmit={handleBookingUpdate}>
            <label htmlFor="startDate" className="block text-gray-600">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="w-full border border-gray-300 rounded-md p-2"
            />

            <label htmlFor="endDate" className="block text-gray-600 mt-2">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="w-full border border-gray-300 rounded-md p-2"
            />

            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--primary-color)] text-[var(--primary-950)] rounded-full hover:bg-[var(--primary-300)]"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModifyModal;