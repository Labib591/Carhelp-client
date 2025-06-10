import React from "react";
import Hero from "../Components/Hero";
import WhyUS from "../Components/WhyUs";
import AvailableCars from "./AvailableCars";
import RecentListings from "../Components/RecentListings";

const HomePage = ()  => {
    return (
        <div>
            <Hero></Hero>
            <WhyUS></WhyUS>
            <RecentListings></RecentListings>
        </div>
    );  
};

export default HomePage;