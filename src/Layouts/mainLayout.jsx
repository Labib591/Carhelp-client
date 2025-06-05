import React from "react";
import { Outlet, useNavigate, useNavigation } from "react-router";
// import Footer from "../Components/Footer";
import Navbar from "../Components/Navba";

const mainLayout = () => {

    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <span className="loading loading-spinner loading-xl mx-auto flex items-center justify-center"></span>;
    }

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default mainLayout;