import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Root element</div>,
  },
  {
    path: "/loading",
    element: <Loading />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
