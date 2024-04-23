// Muestra los datos de un auto de autos.json
const AutoSimple = (auto) => {
    let autoAMostrar = auto.auto;
    return (
        <div>
            <p>{autoAMostrar.marca}</p>
            <p>{autoAMostrar.modelo}</p>
            <p>{autoAMostrar.anio}</p>
            <p>{autoAMostrar.color}</p>
            <p>{autoAMostrar.precio}</p>
            <p>{autoAMostrar.transmision}</p>
        </div>
    );
}

export default AutoSimple;