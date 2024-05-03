import { ROUTES } from "../../consts/rutas";
import { Link } from "react-router-dom";
const AutoDetallado = ({auto}) => {
    return (
        <div className="bg-sky-950 mx-6">
            <h1 className="text-5xl font-bold m-4">Detalles del auto seleccionado</h1>
            <div className="text-left p-9 m-9 text-2xl">
                <p className="mb-4">idAuto: {auto.id}</p>
                <p className="mb-4">Marca: {auto.marca}</p>
                <p className="mb-4">Modelo: {auto.modelo}</p>
                <p className="mb-4">Año: {auto.anio}</p>
                <p className="mb-4">Color: {auto.color}</p>
                <p className="mb-4">Precio: {auto.precio}</p>
                <p className="mb-4">Transmision: {auto.transmision}</p>
                <p className="mb-4">Potencia: {auto.potencia}</p>
                <p className="mb-4">Torque: {auto.torque}</p>
                <p className="mb-4">Combustible: {auto.combustible}</p>
                <p className="mb-4">Consumo en ciudad: {auto.consumoCiudad}</p>
                <p className="mb-4">Consumo en carretera: {auto.consumoCarretera}</p>
                <p className="mb-4">Sistemas de seguridad:</p>
                {auto.sistemaSeguridad && (
                    <ul className="list-disc list-inside">
                        {auto.sistemaSeguridad.map ((sistema) => {
                            return <li className="mb-4 ml-9" key={sistema.id}>{sistema.nombre}</li>;
                        })}
                    </ul>
                    )
                }
                <Link to={ROUTES.home}><p className="text-lime-500">Volver</p></Link>
            </div>
        </div>
    );
}
export default AutoDetallado;