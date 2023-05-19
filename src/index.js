import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import People from "./components/People";

import homeLoader from "./loader/home";

import loginAction from "./action/login";
import Register from "./components/Register";
import registerAction from "./action/register";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
