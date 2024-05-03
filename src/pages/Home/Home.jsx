// React, react-router-dom
import { useState, useEffect } from "react";
// Componentes
import ListarAutos from "../../components/ListarAutos/ListarAutos.jsx";
//react-alice-carousel
import Carousel from "../../components/Carousel/Carousel.jsx";
import Busqueda from "../../components/Busqueda/Busqueda.jsx";
import Cabecera from "../../components/Cabecera/Cabecera.jsx";

const Home = () => {

    const [colAutos, setColAutos] = useState([]);
    const [valueBusqueda, setValueBusqueda] = useState("");
 
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

    const onChangeHandlerValueBusqueda = (texto) => {
        //console.log(texto.target.value);
        var textoMinuscula = texto.target.value.toLowerCase();
        setValueBusqueda(textoMinuscula);
    }

    return (
        <div className="w-full min-h-screen">
            <Cabecera/>
            <div className="w-full min-h-screen flex">
                <div className="flex-1 p-4">
                    <Carousel/>
                </div>
                <div className="flex-1 p-4">
                    <h1 className="font-bold">Bienvenidos!</h1>
                    <p className="font-semibold">¡Bienvenido a WIKA, tu fuente confiable de información sobre automóviles! Esperamos poder satisfacer tu curiosidad.</p>
                </div>
            </div>
            <div className="m-5">
                <Busqueda onChangeHandler={onChangeHandlerValueBusqueda}/>
            </div>
            <div className="w-full min-h-screen">
                <ListarAutos colAutos={colAutos} textoBusqueda={valueBusqueda}/>
            </div>
        </div>
    );
}
export default Home;