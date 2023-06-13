import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/login",
    element:<LoginPage/>,
  },
  {
    path:"/register",
    element:<RegisterPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);