import React from "react";
import Hero from "../Components/Hero";
import WhyUS from "../Components/WhyUs";
import AvailableCars from "./AvailableCars";
import RecentListings from "../Components/RecentListings";
import HowItWorks from "../Components/HowItWorks";
import SpecialOffers from "../Components/SpecialOffers";

const HomePage = ()  => {
    return (
        <div>
            <Hero></Hero>
            <WhyUS></WhyUS>
            <RecentListings></RecentListings>
            <HowItWorks></HowItWorks>
            <SpecialOffers></SpecialOffers>
        </div>
    );  
};

export default HomePage;