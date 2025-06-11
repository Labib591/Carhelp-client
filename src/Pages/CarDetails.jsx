    import React, { Suspense, useState } from "react";
    import { useLoaderData } from "react-router";
    import BookingModal from "../Components/BookingModal";

    const CarDetails = () => {
        const {
            model,
            image,
            description,
            price,
            availability,
            features
        } = useLoaderData();


        const [isModalOpen, setIsModalOpen] = useState(false);

        const handleBooking = () => {
            setIsModalOpen(true);
        };

        const closeModal = () => {
        setIsModalOpen(false);
    };

        return (
            <Suspense fallback={<div className="text-center my-20 text-xl">Loading car details...</div>}>
                <div className="max-w-5xl mx-auto my-24 p-6 bg-[var(--primary-50)] rounded-2xl shadow-xl flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gray-200">
                        <img
                            src={image}
                            alt={model}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold text-[var(--primary-900)]">{model}</h1>
                        <p className="text-[var(--primary-800)]">{description}</p>
                        <h2 className="text-2xl font-semibold text-[var(--primary-700)]">${price} / day</h2>

                        <div>
                            {availability ? (
                                <span className="inline-block px-3 py-1 text-sm font-medium text-[var(--primary-950)] bg-[var(--primary-300)] rounded-full">
                                    Available
                                </span>
                            ) : (
                                <span className="inline-block px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
                                    Unavailable
                                </span>
                            )}
                        </div>
                        <p>Features: {features}</p>
                    </div>

                    {availability && (
                        <div className="mt-6">
                            <button
                                onClick={handleBooking}
                                className="bg-[var(--primary-color)] text-[var(--primary-950)] font-medium py-2 px-6 rounded-full cursor-pointer hover:scale-105 transform transition duration-300 shadow-md"
                            >
                                Book Now
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <BookingModal onClose={closeModal} car={useLoaderData()} />
            )}
            </Suspense>
        );
    };

    export default CarDetails;
