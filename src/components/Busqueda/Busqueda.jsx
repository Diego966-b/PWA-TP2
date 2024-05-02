//import TextField from '@mui/material/TextField';
//import style from './Busqueda.module.css';

const Busqueda = ({onChangeHandler}) => {
    return (
        <input className={"text-black"}
            onChange={onChangeHandler}
        />
    );
}

export default Busqueda;