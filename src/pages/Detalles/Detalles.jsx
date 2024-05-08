import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cabecera from "../../components/Cabecera/Cabecera";
import AutoDetallado from "../../components/AutoDetallado/AutoDetallado";
import Pie from "../../components/Pie/Pie.jsx";
import GenerarPdf from "../../components/GenerarPdf/GenerarPdf.jsx";

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
      <GenerarPdf auto={auto} />
      <Pie />
    </div>
  );
};
export default Detalles;
