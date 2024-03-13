import React from "react";
import ReactDOM from "react-dom/client";
import LoginForm from "./Components/LoginForm.jsx";
import RegisterForm from "./Components/Resgister.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
  },
  {
    path: "/LoginForm-ReactJS/login",
    element: <LoginForm />,
  },
  {
    path: "/LoginForm-ReactJS/register",
    element: <RegisterForm />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
