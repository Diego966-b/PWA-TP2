import { Link } from 'react-router-dom';
import styles from "./Cabecera.module.css"

const Cabecera = () => {
    return (
        <header className={"bg-gray-950 text-white p-4 m-0 rounded-b-lg flex items-center justify-between"}>
            <h1 className={styles.titulo}>WIKA</h1>
            <Link className="w-1/12" to="/"><img alt="logo wika" src="/logowika.png"/></Link>  
        </header>
    );
}
export default Cabecera;