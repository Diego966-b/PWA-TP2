import { ROUTES } from "../../consts/rutas.js";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import Detalles from "../../pages/Detalles/Detalles.jsx";

const Router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.detalles,
    element: <Detalles />,
  },
]);

export { Router };
