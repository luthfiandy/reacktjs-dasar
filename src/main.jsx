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
import ProductPage from "./pages/product";
import ProductDetail from "./pages/catalog";
import Counter from "./belajar/counter";


const router = createBrowserRouter([

  {
    path:"/",
    // element:<LoginPage/>,
    element: <Counter/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/register",
    element:<RegisterPage/>
  },
  {
    path:"/login",
    element:<ProductPage/>
  },
  {
    path:"/catalog",
    element:<ProductDetail/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);