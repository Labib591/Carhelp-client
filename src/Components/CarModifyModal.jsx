import React from "react";
import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const CarModifyModal = ({ car, onModalOff, onUpdateCar }) => {
  // console.log(car);
  const { user } = use(AuthContext);

const handleCarUpdate = (event) => {
  event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const availability =
      formData.get("availability") === "Available" ? true : false;
    const carData = Object.fromEntries(formData.entries());


    const features = carData.features.split(",").map((feature) => feature.trim());
    const price = parseInt(carData.price, 10); 
  

  // Fix data types
  const updatedCar = {
    ...car,
    model: carData.model,
    image: carData.image,
    price: price,
    description: carData.description,
    availability: availability,
    features: features,
    location: carData.location,
    registrationNumber: carData.registrationNumber,
    features: carData.features
  };

  fetch(`https://carhelp-server.vercel.app/cars/${car._id}?email=${user.email}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${user.accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        model: carData.model,
        image: carData.image,
        price: price,
        description: carData.description,
        availability: availability,
        features: features,
        location: carData.location,
        registrationNumber: carData.registrationNumber,
    }),
  })
    .then(async (res) => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to update car");
      }

      if (data.modifiedCar>0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Car updated successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        onUpdateCar(updatedCar);
        onModalOff();
      }
    })
    .catch((error) => {
      alert(error.message);
    });
};


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 md:px-8 font-display bg-[#00000040]">
      <div className="w-full max-w-2xl text-[#021100] bg-[var(--primary-50)] rounded-2xl shadow-md p-6 sm:p-8 md:p-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
          Update Car Details
        </h1>
        <form onSubmit={handleCarUpdate} className="space-y-4">
            <div>
            <label className="block font-semibold mb-1">Car Model</label>
            <input
              type="text"
              name="model"
              defaultValue={car.brand}
              //   required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Car Model</label>
            <input
              type="text"
              name="model"
              defaultValue={car.model}
              //   required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div className="flex justify-between gap-2 items-center">
            <div className="w-1/2">
              <label className="block font-semibold mb-1">
                Daily Rental Price ($)
              </label>
              <input
                type="number"
                name="price"
                defaultValue={car.price}
                //   required
                className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-semibold mb-1">Availability</label>
              <select
                name="availability"
                //   required
                className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Vehicle Registration Number
            </label>
            <input
              type="text"
              name="registrationNumber"
              defaultValue={car.registrationNumber}
              //   required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Features</label>
            <input
              type="text"
              name="features"
              defaultValue={car.features}
              placeholder="e.g., GPS, AC, Bluetooth"
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              rows={1}
              defaultValue={car.description}
              //   required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="url"
              name="image"
              defaultValue={car.image}
              //   required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={car.location}
              //   required
              className="w-full border rounded-xl px-4 py-2 text-sm sm:text-base"
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="w-full bg-[var(--primary-color)] text-white font-semibold py-2 rounded-xl hover:bg-[var(--primary-600)] transition text-sm sm:text-base"
            >
              Update Car
            </button>
            <button
              onClick={onModalOff}
              className="w-full bg-[var(--primary-color)] text-white font-semibold py-2 rounded-xl hover:bg-[var(--primary-600)] transition text-sm sm:text-base"
            >
              Cancel Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarModifyModal;
