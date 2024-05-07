import TextField from '@mui/material/TextField';

const Busqueda = ({ onChangeHandler }) => {
    return (
        <TextField 
            id="filled-basic" 
            variant="filled" 
            label="Busqueda por marca y modelo" 
            className="text-white bg-white w-2/5 rounded-xl"
            onChange={onChangeHandler}
        />
    );
}
export default Busqueda;