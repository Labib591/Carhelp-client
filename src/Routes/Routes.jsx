import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import mainLayout from "../Layouts/mainLayout";
import HomePage from "../Pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
   Component: mainLayout,
   children: [
     {
      index: true,
      Component: HomePage,
     },
   ]
  }
]);


export default router;