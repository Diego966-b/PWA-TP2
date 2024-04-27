// React, react-router-dom
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Estructura y rutas
import Pie from "../../components/Pie/Pie.jsx";
import Cabecera from "../../components/Cabecera/Cabecera.jsx";
import {ROUTES} from "../../consts/rutas";
// Componentes
import ListarAutos from "../../components/ListarAutos/ListarAutos.jsx";

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

    console.log("renderizo");
    return (
        <div className="w-full min-h-screen">
            <Cabecera/>
            <ListarAutos colAutos={colAutos} onClick={onClickDetallesHandler}/>
            <Pie/>
        </div>
    );
}
export default Home;