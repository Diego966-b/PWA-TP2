import './App.css';
import { Router } from "./components/Router/Router";
import { RouterProvider } from "react-router-dom";
import Cabecera from "./components/Cabecera/Cabecera";
import Pie from "./components/Pie/Pie";

function App() {
  return (
    <div className="App">
        <div className="w-full min-h-screen">
            <Cabecera/>
            <RouterProvider router={Router} />
            <Pie/>
        </div>
    </div>
  );
}

export default App;