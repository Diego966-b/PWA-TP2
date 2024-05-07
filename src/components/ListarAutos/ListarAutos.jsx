import { Link } from "react-router-dom";

const ListarAutos = ({ colAutos, textoBusqueda }) => {
  const resultado = filtrar({ colAutos, textoBusqueda });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center">
      {resultado.length === 0 ? (
        <p>No se encontraron elementos para su búsqueda</p>
      ) : (
        <>
          {resultado.map((auto) => {
            return (
              <div key={auto.id} className="mb-4 place-content-center">
                <Link to={`/detalles/${auto.id}`}>
                  <div className="w-72 bg-transparent border border-gray-300 rounded-lg shadow-md p-4">
                    <img src={auto.portada} alt="Imagen del auto" className="w-full h-36 object-cover rounded-t-lg mb-4" />
                    <div className="text-center text-white">
                      <p className="font-bold">{auto.marca}</p>
                      <p className="text-sm">{auto.modelo}</p>
                      <p>{auto.anio}</p>
                      <p>{auto.color}</p>
                      <p>{auto.precio}</p>
                      <p>{auto.transmision}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

/**
 * Filtra los resultados de la busqueda
 */
function filtrar({ colAutos, textoBusqueda }) {
  const textoSinEspacios = textoBusqueda.trim();
  // Si no hay texto, muestro todo
  if (textoSinEspacios === "") {
    return colAutos;
  } else {
    const palabras = textoSinEspacios.split(" ");
    // Busco la marca
    const autosMarca = colAutos.filter((auto) => auto.marca.toLowerCase().includes(palabras[0]));
    // Si tiene marca y modelo
    if (palabras.length > 1 && autosMarca.length > 0) {
      const modeloAuto = palabras.slice(1);
      const resultadoBusqueda = autosMarca.filter((auto) => auto.modelo.toLowerCase().includes(modeloAuto[0]));
      return resultadoBusqueda;
    }
    // Si tiene solo marca
    if (autosMarca.length > 0) {
      return autosMarca;
    } else {
      // Si tiene solo modelo
      return colAutos.filter((auto) => auto.modelo.toLowerCase().includes(textoSinEspacios));
    }
  }
}

export default ListarAutos;
