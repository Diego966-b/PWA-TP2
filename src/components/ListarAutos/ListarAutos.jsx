import { Link } from 'react-router-dom';
import {ROUTES} from '../../consts/rutas';
import { Card } from 'antd';
const { Meta } = Card;




const ListarAutos = ({ colAutos }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center">
            {colAutos.map ((auto) => {
                return (
                    <div className="mb-4 place-content-center" key={auto.id}>
                        <Link to={`${ROUTES.detalles}?idAuto=${auto.id}`}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                backgroundColor: "transparent",
                                borderColor: "black",
                                borderWidth: 3,
                            }}
                            cover={<img alt="example" src="/camionetaejemplo.jpeg"/>}
                        >
                            <Meta title={auto.marca}/>
                            <p>{auto.modelo}</p>
                            <p>{auto.anio}</p>
                            <p>{auto.color}</p>
                            <p>{auto.precio}</p>
                            <p>{auto.transmision}</p>
                            <Meta description="Wika"/>
                        </Card>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
export default ListarAutos;