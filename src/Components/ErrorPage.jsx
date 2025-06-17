import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie.json";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center h-screen">
      <Lottie animationData={animationData} loop={true} autoplay={true} />
      <Link to={"/"}>
      <button className="btn bg-[var(--primary-color)] font-bold text-lg text-[var(--primary-50)]">
        Go Home
      </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
