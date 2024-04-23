// React
import { useState, useEffect } from "react";
// Componentes

const Detalles = ({idAutoBuscado}) => {

    // UseState

    const [auto, setAuto] = useState([]);

    /**
     * Recupera la informacion del auto buscado.
     */
    const fetchAutoBuscado = async () => {
        const rutaAuto = "/mocks/auto-${idAutoBuscado}.json";
        const respuesta = await fetch(rutaAuto);
        const resultado = await respuesta.json();
        setAuto(resultado);
    };

    /**
     * Use Effect para recuperar los datos del auto buscado.
     * Se ejecutara cada vez que carga la pag. por primera vez.
     */
    useEffect(() => {
        fetchAutoBuscado();
    }, []);


    return (
        <div>
            <p>Hola!</p>
        </div>
    );
}
export default Home;