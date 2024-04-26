import './App.css';
import Home from './pages/Home/Home';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
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
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
