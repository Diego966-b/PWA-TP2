// React
import { useState, useEffect } from "react";
// Componentes
import AutoSimple from "../../components/AutoSimple/AutoSimple.jsx"
// Estructura
import Pie from "../../components/Pie/Pie.jsx";
import Cabecera from "../../components/Cabecera/Cabecera.jsx";


const Home = () => {

    // UseStates

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


    return (
        <div>
            <Cabecera></Cabecera>
            {colAutos.map ((auto) => {
                return (
                    <div key={auto.id}>
                        <AutoSimple auto={auto}></AutoSimple>
                    </div>
                );
            })}
            <Pie></Pie>
        </div>
    );
}
export default Home;