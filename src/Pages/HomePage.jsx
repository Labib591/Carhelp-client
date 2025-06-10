import React from "react";
import Hero from "../Components/Hero";
import WhyUS from "../Components/WhyUs";
import AvailableCars from "./AvailableCars";

const HomePage = ()  => {
    return (
        <div>
            <Hero></Hero>
            <WhyUS></WhyUS>
            <AvailableCars></AvailableCars>
        </div>
    );  
};

export default HomePage;