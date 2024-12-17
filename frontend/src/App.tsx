import React from "react";
import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import backGroundImage from "../src/assets/background.png";
const router = createBrowserRouter(routes);

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${backGroundImage})`, height: "100vh" }}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};
export default App;
