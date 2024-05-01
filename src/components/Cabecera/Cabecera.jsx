import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../consts/rutas.js";
import styles from "./Cabecera.module.css"

const Cabecera = () => {
    // const navigate = useNavigate();
    return (
        <header className={"bg-gray-950 text-white p-4 m-0 rounded-b-lg flex items-center justify-between"}>
            <h1 className={styles.titulo}>WIKA</h1>
            {/* <Button text={"home"} onClick={() => navigate(ROUTES.home)}></Button> */}
            <a className="w-1/12" href={ROUTES.home}><img src="/logowika.png"/></a>
        </header>
    );
}
export default Cabecera;