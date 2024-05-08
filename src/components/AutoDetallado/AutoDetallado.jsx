import { ROUTES } from "../../consts/rutas";
import { Link } from "react-router-dom";
import Boton from "../../components/Boton/Boton.jsx";

const AutoDetallado = ({ auto }) => {
  return (
    <>
      <div className="bg-cream text-black text-left text-2xl mx-6 mt-4 px-9 pb-1 py-2 rounded-xl grid-rows-1">
        <h1 className="text-5xl font-bold m-4 text-center">
          {auto.marca} {auto.modelo}
        </h1>
        <div className="flex flex-col">
          <div className="flex bg-amber-100 mb-2">
            <img className="flex-none" alt="icono marca" src="/iconosDetalles/imagen-de-marca.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl"> {auto.marca}</p>
          </div>
          <div className="flex mb-2">
            <img className="flex-none" alt="icono modelo" src="/iconosDetalles/coche.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl">{auto.modelo}</p>
          </div>
          <div className="flex bg-amber-100 mb-2">
            <img className="flex-none" alt="icono anio" src="/iconosDetalles/calendario.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl">{auto.anio}</p>
          </div>
          <div className="flex mb-2">
            <img className="flex-none" alt="icono color" src="/iconosDetalles/barniz.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl">{auto.color}</p>
          </div>
          <div className="flex bg-amber-100 mb-2">
            <img className="flex-none" alt="icono precio" src="/iconosDetalles/bolsa-de-dinero.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl">{auto.precio}</p>
          </div>
          <div className="flex mb-2">
            <img className="flex-none" alt="icono transmision" src="/iconosDetalles/transmision-manual.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl">{auto.transmision}</p>
          </div>
          <div className="flex bg-amber-100 mb-2">
            <img className="flex-none" alt="icono potencia" src="/iconosDetalles/caballo.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl">{auto.potencia}</p>
          </div>
          <div className="flex mb-2">
            <img className="flex-none" alt="icono torque" src="/iconosDetalles/motor-del-coche.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl">{auto.torque}</p>
          </div>
          <div className="flex bg-amber-100 mb-2">
            <img className="flex-none" alt="icono combustible" src="/iconosDetalles/gas.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl">{auto.combustible}</p>
          </div>
          <div className="flex mb-2">
            <img className="flex-none" alt="icono consumoCiudad" src="/iconosDetalles/medidor-de-aceite.png" width="50" />
            <img className="flex-none" alt="icono consumoCiudad" src="/iconosDetalles/horizonte.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl">{auto.consumoCiudad}</p>
          </div>
          <div className="flex bg-amber-100 mb-2">
            <img className="flex-none" alt="icono consumoCarretera" src="/iconosDetalles/medidor-de-aceite.png" width="50" />
            <img className="flex-none" alt="icono consumoCarretera" src="/iconosDetalles/camino.png" width="50" />
            <p className="flex-1 mb-4 text-center font-semibold text-3xl">{auto.consumoCarretera}</p>
          </div>
          <div className="flex mb-2">
            <img className="flex-none" alt="icono sistemas se seguridad" src="/iconosDetalles/proteger.png" width="50" />
          </div>
          {auto.sistemaSeguridad && (
            <ul className="list-disc list-inside mb-2">
              {auto.sistemaSeguridad.map((sistema) => {
                return (
                  <li className="mb-4 ml-9" key={sistema.id}>
                    {sistema.nombre}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="flex items-center justify-center mb-4">
          <img className="rounded-lg" alt="imagen de auto" src={auto.imagen} width={1000}></img>
        </div>
      </div>
      <Link to={ROUTES.home}>
        <Boton texto="Volver"></Boton>
      </Link>
    </>
  );
};
export default AutoDetallado;
