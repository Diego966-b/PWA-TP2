import './App.css';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {ROUTES} from "./consts/rutas";
import Detalles from "./pages/Detalles/Detalles";

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

function App() {
  return (
    <div className="App">
        <header className="App-header"> {/* ver!!! */}
            <RouterProvider router={router} />
        </header>
    </div>
  );
}
/*
    <div style={{
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"}}>
        <RouterProvider router={router} />
    </div>
    
    O BIEN: 

    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white text-lg">
        <RouterProvider router={router} />
    </div>
*/
export default App;