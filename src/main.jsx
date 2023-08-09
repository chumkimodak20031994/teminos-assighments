import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Repeat from './Component/Repeat/Repeat';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/repeat",
    element: <Repeat />,
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);