import { Link } from 'react-router-dom';
import { ROUTES } from '../../consts/rutas';
import { Card } from 'antd';

const ListarAutos = ({ colAutos, textoBusqueda }) => {
    const resultado = filtrar({colAutos, textoBusqueda});
    var mensaje = resultado.length === 0 ? ("No se encontraron elementos para su búsqueda") : ("");
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center">
            {mensaje ? (<p>{mensaje}</p>) : 
            (<>
                {resultado.map ((auto) => {
                return (
                    <div key={auto.id} className="mb-4 place-content-center">
                        <Link to={`${ROUTES.detalles}?idAuto=${auto.id}`}>
                            <Card
                                className="text-white"
                                hoverable
                                style={{
                                    width: 240,
                                    backgroundColor: "transparent",
                                    borderColor: "black",
                                    borderWidth: 3,
                                }}
                                cover={<img alt="example" src="/camionetaejemplo.jpeg"/>}
                                >
                                <p>{auto.marca}</p>
                                <p>{auto.modelo}</p>
                                <p>{auto.anio}</p>
                                <p>{auto.color}</p>
                                <p>{auto.precio}</p>
                                <p>{auto.transmision}</p>
                            </Card>
                        </Link>
                    </div>
                );
            })}
            </>)}
        </div>
    );
}

/**
 * Esta funcion filtra los autos mostrados segun el input de la busqueda.
 */
function filtrar ({textoBusqueda, colAutos}) {
    if (textoBusqueda.trim() === '') {
        return colAutos;
    }
    else
    {
        // Marca
        const autosMarca = colAutos.filter ((auto) => {
            return auto.marca.toLowerCase().includes(textoBusqueda)
        });
        if (autosMarca.length > 0) {
            return autosMarca;
        }
        else
        {
            // Modelo
            const colAutosFiltrada = colAutos.filter ((auto) => {
                return auto.modelo.toLowerCase().includes(textoBusqueda);
            });
            return colAutosFiltrada;
        }
    }
}

export default ListarAutos;