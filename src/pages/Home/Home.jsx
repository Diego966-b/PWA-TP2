// React, react-router-dom
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Estructura y rutas
import Pie from "../../components/Pie/Pie.jsx";
import Cabecera from "../../components/Cabecera/Cabecera.jsx";
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
    
    const onClickDetallesHandler = (idAuto) => {
        navigate(`${ROUTES.detalles}?idAuto=${idAuto}`);
    }


    return (
        <div className="w-full min-h-screen">
            <div className="w-full min-h-screen flex">
                <div className="flex-1 p-4">
                    <Carousel/>
                </div>
                <div className="flex-1 p-4">
                    <h1>Bienvenidos!</h1>
                    <p> asddaasdaasda</p>
                </div>
            </div>
            <ListarAutos colAutos={colAutos} onClick={onClickDetallesHandler}/>
        </div>
    );
}
export default Home;