import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import People from "./components/People";
import Error from "./components/Error";

import homeLoader from "./loader/home";
import logoutLoader from "./loader/logout";
import profileLoader from "./loader/profile";
import peopleLoader from "./loader/people";

import loginAction from "./action/login";
import Register from "./components/Register";
import registerAction from "./action/register";

import Test from "./components/Test";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
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
        path: "/profile/:userId",
        element: <Profile />,
        loader: profileLoader,
      },
      {
        path: "/people",
        element: <People />,
        loader: peopleLoader,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
      {
        path: "/logout",
        loader: logoutLoader,
      },
      {
        path: "/test",
        element: <Test />,
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
