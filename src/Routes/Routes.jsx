import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import mainLayout from "../Layouts/mainLayout";


const router = createBrowserRouter([
  {
    path: "/",
   Component: mainLayout,
  }
]);


export default router;