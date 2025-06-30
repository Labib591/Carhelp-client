import React from "react";
import { Outlet, useNavigate, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const mainLayout = () => {

    //  const isLoading = navigation.state === "loading";

    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <span className="loading loading-spinner loading-xl mx-auto flex items-center justify-center"></span>;
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet className="min-h-viewport"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default mainLayout;