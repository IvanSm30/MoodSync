import React from "react";
import Auth from "./pages/Auth";
import Diary from "./pages/Diary";
import Analytics from "./pages/Analytics";
import Home from "src/pages/Home";
import { Navigate } from "react-router-dom";
import Prom from "./pages/Prom";

export const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/diary",
    element: <Diary />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/prom",
    element: <Prom />,
  },
  {
    path: "*",
    element: <Navigate to="/auth" />,
  },
];
