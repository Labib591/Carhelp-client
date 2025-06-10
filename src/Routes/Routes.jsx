import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import mainLayout from "../Layouts/mainLayout";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AvailableCars from "../Pages/AvailableCars";
import AddCar from "../Pages/AddCar";
import PrivateRoute from "../Context/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
   Component: mainLayout,
   children: [
     {
      index: true,
      Component: HomePage,
     },
     {
      path: '/login',
      Component: LoginPage
     },
     {
      path: '/register',
      Component: RegisterPage
     },
     {
      path: '/availablecars',
      loader: () => fetch('http://localhost:5000/cars'),
      Component: AvailableCars
     },
     {
      path: '/addcars',
      element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
     }
   ]
  }
]);


export default router;