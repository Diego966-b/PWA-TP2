// React, react-router-dom
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {ROUTES} from "../../consts/rutas";
// Componentes
import ListarAutos from "../../components/ListarAutos/ListarAutos.jsx";
//react-alice-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../../components/Carousel/Carousel";


const Home = () => {

    const navigate = useNavigate();
    const [colAutos, setColAutos] = useState([]);

    const fetchAutos = async () => {
        const respuesta = await fetch("/mocks/autos.json");
        const resultado = await respuesta.json();
        setColAutos(resultado);
    };

    useEffect(() => {
        fetchAutos();
    }, []);

    /*
    const onClickDetallesHandler = (idAuto) => {
        navigate(`${ROUTES.detalles}?idAuto=${idAuto}`);
    }
    */

    return (
        <div className="w-full min-h-screen">
            <div className="w-full min-h-screen flex">
                <div className="flex-1 p-4">
                    <Carousel/>
                </div>
                <div className="flex-1 p-4">
                    <h1 className="font-bold">Bienvenidos!</h1>
                    <p className="font-semibold"> ¡Bienvenido a WIKA, tu fuente confiable de información sobre automóviles! Esperamos poder satisfacer tu curiosidad.</p>
                </div>
            </div>
            <div className="w-full min-h-screen">
                <ListarAutos colAutos={colAutos}/>
            </div>
        </div>
    );
}
export default Home;