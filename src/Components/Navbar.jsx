import React from "react";
import { NavLink } from "react-router";
import Logo from "../assets/logo.png"

const Navbar = () => {

    const notLoggedInLinks = (
    <>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/addtask"}>
          Available Cars
        </NavLink>
      </li>
    </>
  );

  const loggedInLinks = (
    <>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/addtask"}>
          Available Cars
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/addtask"}>
          Add Cars
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/addtask"}>
          My Cars
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#14A800]" to={"/addtask"}>
          My Bookings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex justify-center items-center">
      <div className="mx-auto w-[90%] fixed top-5 z-50 rounded-full flex justify-between items-center text-base font-normal py-1 px-2 bg-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {notLoggedInLinks}
          </ul>
        </div>
        <a className="flex items-center text-xl"><img src={Logo} className="w-12" alt="" />Carhelp</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {notLoggedInLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="rounded-full bg-primary text-sm text-slate-50 px-6 py-3 pointer">Login</a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
