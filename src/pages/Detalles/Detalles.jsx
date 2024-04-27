// React, react-router-dom
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
// Estructura
import Cabecera from "../../components/Cabecera/Cabecera";
import Pie from "../../components/Pie/Pie";
// Componentes
import AutoDetallado from "../../components/AutoDetallado/AutoDetallado";

const Detalles = () => {

    const [auto, setAuto] = useState([]);
    const location = useLocation();
    const idAuto = new URLSearchParams(location.search).get('idAuto');

    const fetchAuto = async () => {
        const respuesta = await fetch(`/mocks/auto-${idAuto}.json`);
        const resultado = await respuesta.json();
        setAuto(resultado);
    };

    useEffect(() => {
        fetchAuto();
    }, []);
    
    return (
        <div className="w-full min-h-screen">
            <Cabecera/>
            <AutoDetallado auto={auto}/>
            <Pie/>
        </div>
    );
}
export default Detalles;