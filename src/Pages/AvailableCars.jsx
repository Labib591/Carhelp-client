import React from "react";
import { useLoaderData } from "react-router";

const AvailableCars = () => {

    const data = useLoaderData();
    console.log(data);

    return (<div>AvailableCars</div>);
};  

export default AvailableCars;