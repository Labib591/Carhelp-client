import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import mainLayout from "../Layouts/mainLayout";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";


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
     }
   ]
  }
]);


export default router;