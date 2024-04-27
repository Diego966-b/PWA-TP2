// React
import { useState, useEffect } from "react";
// Componentes
import Cabecera from "../../components/Cabecera/Cabecera";
import Pie from "../../components/Pie/Pie";
import { useLocation } from 'react-router-dom';

const Detalles = () => {
    const location = useLocation();
    const idAuto = new URLSearchParams(location.search).get('idAuto');

    const [auto, setAuto] = useState([]);

    const fetchAuto = async () => {
        const respuesta = await fetch(`/mocks/auto-${idAuto}.json`);
        const resultado = await respuesta.json();
        setAuto(resultado);
    };

    useEffect(() => {
        fetchAuto();
    }, []);

    return (
        <div>
            <Cabecera/>
                <h1>Detalles del auto seleccionado</h1>
                <div>
                    <p>idAuto:{auto.id}</p>
                    <p>marca:{auto.marca}</p>
                    <p>modelo:{auto.modelo}</p>
                    <p>anio:{auto.anio}</p>
                    <p>color:{auto.color}</p>
                    <p>precio:{auto.precio}</p>
                    <p>transmision:{auto.transmision}</p>
                    <p>potencia:{auto.potencia}</p>
                    <p>torque:{auto.torque}</p>
                    <p>combustible:{auto.combustible}</p>
                    <p>consumoCiudad:{auto.consumoCiudad}</p>
                    <p>consumoCarretera:{auto.consumoCarretera}</p>
                    <p>sistemaSeguridad:{auto.sistemaSeguridad}</p>
                </div>
            <Pie/>
        </div>
    );
}
export default Detalles;