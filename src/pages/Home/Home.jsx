// React
import { useState, useEffect } from "react";
// Componentes
import AutoSimple from "../../components/AutoSimple/AutoSimple.jsx"
// Estructura
import Pie from "../../components/Pie/Pie.jsx";
import Cabecera from "../../components/Cabecera/Cabecera.jsx";
import button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import {ROUTES} from "../../consts/rutas";
import Button from "../../components/Button/Button";

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

    const onClickHomeHandler = () => {
        navigate(ROUTES.Home);
    };

    const onClickDetallesHandler = (idauto) => {
        console.log(idauto)
        navigate(ROUTES.detalles + "?" + "idauto=" + idauto);
       // navigate('/Detalles/${idauto}'); // Navegar a la nueva ruta con el parámetro
    }

    return (
        <div>
            <Cabecera texto={"Esto es la cabecera"} onClickHomeHandler={onClickHomeHandler}></Cabecera>
            {colAutos.map ((auto) => {
                return (
                    <div key={auto.id}>
                        <p>{auto.id}</p>
                        <AutoSimple auto={auto}></AutoSimple>
                        <Button text={"Detalles"} onClick={() => onClickDetallesHandler(auto.id)}></Button>
                    </div>
                );
            })}
            <Pie text={"esto es el footer"}></Pie>
        </div>
    );
}
export default Home;