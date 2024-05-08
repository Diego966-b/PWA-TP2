import React from "react";
import { Button } from "antd";

const Boton = ({ texto, onClick }) => {
  return (
    <Button type="primary" onClick={onClick} shape="round" className="ml-5">
      {texto}
    </Button>
  );
};
export default Boton;
