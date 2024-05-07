import { ROUTES } from "../../consts/rutas";
import { Link } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import Boton from "../../components/Boton/Boton.jsx";
import { DownloadOutlined } from "@ant-design/icons";

const AutoDetallado = ({ auto }) => {
  const { toPDF, targetRef } = usePDF({ filename: `${auto.marca}${auto.modelo}.pdf}` });
  console.log(auto.imagenes);
  return (
    <>
      <div ref={targetRef} className="bg-sky-950 text-left text-2xl mx-6 px-9 pb-1 py-0">
        <h1 className="text-5xl font-bold m-4 text-center">
          Detalles de {auto.marca} {auto.modelo}
        </h1>
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
        <img src={auto.imagen}></img>
        {auto.sistemaSeguridad && (
          <ul className="list-disc list-inside">
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
      <Link to={ROUTES.home}>
        <Boton texto="Volver"></Boton>
      </Link>
      <Boton onClick={() => toPDF()} texto="Descargar PDF" ></Boton>
      {/* <Boton onClick={() => descargarPdf()} texto="Descargar PDF" icon={<DownloadOutlined />} clase="my-0 mx-3"></Boton> */}
    </>
  );
};
export default AutoDetallado;
