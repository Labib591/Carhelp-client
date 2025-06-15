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
import CarDetails from "../Pages/CarDetails";
import MyBookings from "../Pages/MyBookings";
import MyCars from "../Pages/MyCars";
import ErrorPage from "../Components/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('https://carhelp-server.vercel.app/cars'),
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
        loader: () => fetch('https://carhelp-server.vercel.app/public-cars'),
        Component: AvailableCars
      },
      {
        path: '/addcars',
        element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
      },
      {
        path: '/cardetails/:id',
        loader: ({ params }) => fetch(`https://carhelp-server.vercel.app/cardetails/${params.id}`),
        element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>
      },
      {
        path: '/mybookings',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path:'/mycars',
        element: <PrivateRoute><MyCars></MyCars></PrivateRoute>
      }
    ]
  }
]);



export default router;