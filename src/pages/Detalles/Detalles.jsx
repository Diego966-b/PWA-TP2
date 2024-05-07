import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cabecera from "../../components/Cabecera/Cabecera";
import AutoDetallado from "../../components/AutoDetallado/AutoDetallado";
import Pie from "../../components/Pie/Pie.jsx";

const Detalles = () => {
  const [auto, setAuto] = useState([]);
  const { idAuto } = useParams(); // Mismo nombre de la URL

  const fetchAuto = async () => {
    const respuesta = await fetch(`/mocks/auto-${idAuto}.json`);
    const resultado = await respuesta.json();
    setAuto(resultado);
  };

  useEffect(() => {
    document.title = "Wika -- Detalles";
    fetchAuto();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Cabecera />
      <AutoDetallado auto={auto} />
      {/* aca paso el id del auto, luego voy a un comp. para transformar a pdf y muestro boton descarga */}
      <Pie />
    </div>
  );
};
export default Detalles;
