import './App.css';
import { Router } from "./components/Router/Router";
import { RouterProvider } from "react-router-dom";
import Pie from "./components/Pie/Pie";

function App() {
  return (
    <div className="App">
        <div className="w-full min-h-screen">
            <RouterProvider router={Router} />
            <Pie />
        </div>
    </div>
  ); 
}

export default App;