import style from "./Button.module.css";

const Button = ({text, onClick}) => {
  console.log(onClick);
  return (
    <button onClick={onClick} className={style.button}>
      {text}
    </button>
  );
};

export default Button;
