import { useState, useEffect } from "react";
import ListarAutos from "../../components/ListarAutos/ListarAutos.jsx";
import Carusel from "../../components/Carusel/Carusel.jsx";
import Busqueda from "../../components/Busqueda/Busqueda.jsx";
import Cabecera from "../../components/Cabecera/Cabecera.jsx";
import Pie from "../../components/Pie/Pie.jsx";

const Home = () => {
  const [colAutos, setColAutos] = useState([]);
  const [valueBusqueda, setValueBusqueda] = useState("");

  const fetchAutos = async () => {
    const respuesta = await fetch("/mocks/autos.json");
    const resultado = await respuesta.json();
    setColAutos(resultado);
  };

  useEffect(() => {
    document.title = "Wika -- Home";
    fetchAutos();
  }, []);

  const onChangeHandlerValueBusqueda = (texto) => {
    var textoMinuscula = texto.target.value.toLowerCase();
    setValueBusqueda(textoMinuscula);
  };

  return (
    <div className="w-full min-h-screen">
      <Cabecera />
      <div>
        <div className="flex-1 p-4">
          <h1 className="font-bold">Bienvenidos!</h1>
          <p className="font-semibold">¡Bienvenido a WIKA, tu fuente confiable de información sobre automóviles! Esperamos poder satisfacer tu curiosidad.</p>
        </div>
        <div className="flex-1 p-4">
          <Carusel />
        </div>
      </div>
      <div className="m-5">
        <Busqueda onChangeHandler={onChangeHandlerValueBusqueda} />
      </div>
      <div className="w-full min-h-screen">
        <ListarAutos colAutos={colAutos} textoBusqueda={valueBusqueda} />
      </div>
      <Pie />
    </div>
  );
};
export default Home;
