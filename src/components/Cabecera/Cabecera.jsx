import Button from "../Button/Button";


const Cabecera = ({onClickHomeHandler}) => {
    return (
        <header className={"bg-gray-950 text-white p-4 rounded-b-lg flex items-center justify-between"}>
            <h1>Autos</h1>
            <Button text={"home"} onClick={onClickHomeHandler}></Button>
        </header>
    );
}
export default Cabecera;