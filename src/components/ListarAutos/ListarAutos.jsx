import { Link } from 'react-router-dom';
import { ROUTES } from '../../consts/rutas';
import { Card } from 'antd';

const ListarAutos = ({ colAutos, textoBusqueda }) => {
    //console.log(textoBusqueda);
    const resultado = filtrar({colAutos, textoBusqueda});
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center">
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
        </div>
    );
}

/**
 * Esta funcion filtra segun el input de la busqueda.
 */
function filtrar (props) {
    if (props.textoBusqueda === '') {
        return props.colAutos;
    }
    const colAutosFiltrada = props.colAutos.filter((el) => {
        return el.modelo.toLowerCase().includes(props.textoBusqueda);
    })
    return colAutosFiltrada;
}

export default ListarAutos;