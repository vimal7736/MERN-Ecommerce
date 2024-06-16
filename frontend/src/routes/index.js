import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path:"",
                element: <Home/>
            },
            {
                path:"login",
                element: <Login/>
            },
            {
                path:"forgot-password",
                element: <ForgotPassword/>
            },
            {
                path:"register",
                element: <Register/>
            },
        ]

    },

]);

export default router;