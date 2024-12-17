import React from "react";
import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import backGroundImage from "../src/assets/background.png";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw"
      }}
    >
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};

export default App;