import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie.json";

const ErrorPage = () => {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center h-screen">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
      <button className="btn bg-[var(--primary-color)] font-bold text-lg text-[var(--primary-50)]">
        <a href="/">Go Home</a>
      </button>
    </div>
  );
};

export default ErrorPage;
