import { Link } from 'react-router-dom';
import styles from "./Cabecera.module.css"

const Cabecera = () => {
    return (
        <header className={"bg-gray-950 text-white p-4 m-0 rounded-b-lg flex items-center justify-between"}>
            <h1 className={styles.titulo}>WIKA</h1>
            <Link to="/" className="p-0 m-0"><img  className="w-40" alt="logo wika" src="/iconos/logoWika.png"/></Link>  
        </header>
    );
}
export default Cabecera;