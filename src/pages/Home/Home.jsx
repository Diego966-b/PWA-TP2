// React
import { useState, useEffect } from "react";
// Estructura
import Pie from "../../components/Pie/Pie.jsx";
import Cabecera from "../../components/Cabecera/Cabecera.jsx";
import { useNavigate } from "react-router-dom";
import {ROUTES} from "../../consts/rutas";
import ListarAutos from "../../components/ListarAutos/ListarAutos.jsx";

const Home = () => {

    // UseStates
    const navigate = useNavigate();
    const [colAutos, setColAutos] = useState([]);

    /**
     * Recupera los datos de los autos y lo guarda en useState.
     */
    const fetchAutos = async () => {
        const respuesta = await fetch("/mocks/autos.json");
        const resultado = await respuesta.json();
        setColAutos(resultado);
    };

    /**
     * Use Effect para recuperar los datos json.
     * Se ejecutara cada vez que carga la pag. por primera vez.
     */
    useEffect(() => {
        fetchAutos();
    }, []);
    
    /*
    const onClickHomeHandler = () => {
        navigate(ROUTES.home);
    };
    */

    const onClickDetallesHandler = (idAuto) => {
        navigate(ROUTES.detalles + "?" + "idAuto=" + idAuto);
    }

    console.log("renderizo");

    return (
        <div>
            <Cabecera/>
            <ListarAutos colAutos={colAutos} onClick={onClickDetallesHandler}/>
            <Pie/>
        </div>
    );
}
export default Home;