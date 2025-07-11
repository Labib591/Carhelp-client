import React, { use, useEffect } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/logo.png";
import { AuthContext } from "../Context/AuthContext";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);

  const notLoggedInLinks = (
    <>
      <li>
        <NavLink className="hover:text-[var(--primary-color)]" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[var(--primary-color)]"
          to={"/availablecars"}
        >
          Available Cars
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[var(--primary-color)]"
          to={"/about-us"}
        >
          About US
        </NavLink>
      </li>
    </>
  );

  const loggedInLinks = (
    <>
      <li>
        <NavLink className="hover:text-[var(--primary-color)]" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[var(--primary-color)]"
          to={"/availablecars"}
        >
          Available Cars
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[var(--primary-color)]"
          to={"/about-us"}
        >
          About US
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[var(--primary-color)]" to={"/addcars"}>
          Add Cars
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[var(--primary-color)]" to={"/mycars"}>
          My Cars
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-[var(--primary-color)]"
          to={"/mybookings"}
        >
          My Bookings
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex justify-center items-center font-display">
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
              {user ? loggedInLinks : notLoggedInLinks}
            </ul>
          </div>
          <a href="/" className="flex items-center text-xl">
            <img src={Logo} className="w-12" alt="" />
            Carhelp
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user ? loggedInLinks : notLoggedInLinks}
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <div
                data-tooltip-id="user"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="top"
              >
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
              </div>
              <Tooltip id="user" style={{ zIndex: "1000" }} />
              <button
                className="btn bg-[#f7f7f7] rounded-full"
                onClick={logOutUser}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-[#f7f7f7] rounded-full">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
