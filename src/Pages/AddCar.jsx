import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const AddCar = () => {
  const { user } = use(AuthContext);

  const handleAddCar = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const availability =
      formData.get("availability") === "Available" ? true : false;
    const carData = Object.fromEntries(formData.entries());

    carData.bookingCount = parseInt(carData.bookingCount, 10);
    carData.addDate = new Date();
    const features = carData.features.split(",").map((feature) => feature.trim());

    fetch("https://carhelp-server.vercel.app/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        brand: carData.brand,
        model: carData.model,
        image: carData.image,
        price: carData.price,
        description: carData.description,
        availability: availability,
        location: carData.location,
        registrationNumber: carData.registrationNumber,
        features: features,
        bookingCount: carData.bookingCount,
        userEmail: user.email,
        addDate: carData.addDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your car has been added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen mt-30 mb-10 flex items-center justify-center px-4 sm:px-6 md:px-8 font-display">
      <div className="w-full max-w-2xl text-[#021100] bg-[var(--primary-50)] rounded-2xl shadow-md p-6 sm:p-8 md:p-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          Add New Car
        </h1>
        <form onSubmit={handleAddCar} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Car Brand</label>
            <input
              type="text"
              name="brand"
              required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Car Model</label>
            <input
              type="text"
              name="model"
              required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Daily Rental Price ($)
            </label>
            <input
              type="number"
              name="price"
              required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Availability</label>
            <select
              name="availability"
              required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            >
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Vehicle Registration Number
            </label>
            <input
              type="text"
              name="registrationNumber"
              required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Features</label>
            <input
              type="text"
              name="features"
              placeholder="e.g., GPS, AC, Bluetooth"
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              rows={4}
              required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Booking Count</label>
            <input
              type="number"
              name="bookingCount"
              value={0}
              readOnly
              className="w-full border rounded-xl px-4 py-2 bg-gray-100 text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#14A800] text-white font-semibold py-2 rounded-xl hover:bg-[#108600] transition text-sm sm:text-base"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
