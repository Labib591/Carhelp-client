import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Car from "../Components/Car";
import { FaBox, FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

const AvailableCars = () => {
  const data = useLoaderData();
  // console.log("data: ", data, Array.isArray(data));

  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);
  const [sortOption,setSortOption] = useState("");
  const[loading,setLoading] = useState(false);
  const [allCars, setAllCars] = useState(data);
  const [filteredCars, setFilteredCars] = useState(data);

  const handleToggle = () => {
    setIsGrid(!isGrid);
    setIsList(!isList);
  };


  // if(loading){
  //   return <span className="loading loading-spinner loading-xl mx-auto flex justify-center"></span>;
  // }

  const handleSorting = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sorted = [...filteredCars];

    switch(option){
      case "date-newest":
        sorted.sort((a,b) => new Date(b.addDate) - new Date(a.addDate));
        break;
      
      case "date-oldest":
        sorted.sort((a,b) => new Date(a.addDate) - new Date(b.addDate));
        break;

      case "price-lowest":
        sorted.sort((a,b) => a.price - b.price);
        break;

      case "price-highest":
        sorted.sort((a,b) => b.price - a.price);
        break;
      
      default:
        sorted = [...allCars];
    }

    setFilteredCars(sorted);

  };


  const handleSearch = (e) => {
  e.preventDefault();
  const query = e.target.search.value.toLowerCase();
  const results = allCars.filter((car) =>
    car.model.toLowerCase().includes(query) ||
    car.brand?.toLowerCase().includes(query) ||
    car.location?.toLowerCase().includes(query)
  );
  setFilteredCars(results);
  e.target.reset();
};


if (loading) {
    return (
      <span className="loading loading-spinner loading-xl mx-auto flex justify-center"></span>
    );
  }

  return (
    <div className="my-25 w-[90%] mx-auto font-display">
      <h1 className="text-6xl font-semibold text-center">Available Cars</h1>
      <p className="text-center my-2 text-gray-500 ">
        All the available cars are listed below. You can book a car by clicking
        on the "Book Now" button.
      </p>
      <div className="my-8 w-full flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-2xl shadow-md">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex w-full md:w-1/2 gap-2">
          <input
            type="search"
            name="search"
            placeholder="Search by model, brand..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition duration-200"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-[var(--primary-color)] text-white rounded-full hover:bg-opacity-90 transition duration-200"
          >
            Search
          </button>
        </form>

        {/* Filter Buttons */} 

        <div className="mt-4 md:mt-0">
  <select
    onChange={handleSorting}
    value={sortOption}
    className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
  >
    <option value="">Sort By</option>
    <option value="date-newest">Date Added: Newest First</option>
    <option value="date-oldest">Date Added: Oldest First</option>
    <option value="price-lowest">Price: Lowest First</option>
    <option value="price-highest">Price: Highest First</option>
  </select>
</div>


        {/* Toggle Buttons */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <button
            onClick={handleToggle}
            className={`p-3 rounded-full border transition hover:bg-gray-100 ${
              isGrid ? "bg-[var(--primary-color)] text-white" : "text-gray-600"
            }`}
            title="Grid View"
          >
            <IoGrid size={18} />
          </button>
          <button
            onClick={handleToggle}
            className={`p-3 rounded-full border transition hover:bg-gray-100 ${
              isList ? "bg-[var(--primary-color)] text-white" : "text-gray-600"
            }`}
            title="List View"
          >
            <FaList size={16} />
          </button>
        </div>
      </div>

      {
        filteredCars.length > 0 ? (
          isGrid ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCars.map((car) => (
                <Car key={car._id} car={car}></Car>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredCars.map((car) => (
                <Car key={car._id} car={car}></Car>
              ))}
            </div>
          )
        ) : (
          <h1 className="text-2xl font-semibold text-center">No Cars Available</h1>
        )
      }
    </div>
  );
};

export default AvailableCars;
