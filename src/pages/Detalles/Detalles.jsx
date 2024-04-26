// React
import { useState, useEffect } from "react";
// Componentes
import Cabecera from "../../components/Cabecera/Cabecera";
import {ROUTES} from "../../consts/rutas";
import {Routes, Route, useParams, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Detalles = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const idauto = new URLSearchParams(location.search).get('idauto');

    const onClickHomeHandler = () => {
        console.log(ROUTES);
        navigate(ROUTES.home);
    };

    return (
        <div>
            <Cabecera onClickHomeHandler={onClickHomeHandler}></Cabecera>
            <p>Hola!</p>
        </div>
    );
}
export default Detalles;