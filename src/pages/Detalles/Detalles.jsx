// React
import { useState, useEffect } from "react";
// Componentes
import Cabecera from "../../components/Cabecera/Cabecera";
import {ROUTES} from "../../consts/rutas";
import { Routes, Route, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Detalles = ({onClickHomeHandler}) => {

    const location = useLocation();
    const idauto = new URLSearchParams(location.search).get('idauto');
    console.log(idauto);

    return (
        <div>
            <Cabecera onClickHomeHandler={onClickHomeHandler}></Cabecera>
            <p>Hola!</p>
        </div>
    );
}
export default Detalles;