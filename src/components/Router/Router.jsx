import {ROUTES} from "../../consts/rutas";
import Home from "../../pages/Home/Home";
import Detalles from "../../pages/Detalles/Detalles";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: ROUTES.home,
        element: <Home />,
    },
    {
        path: ROUTES.detalles,
        element: <Detalles />,
    },
]);

export {router};