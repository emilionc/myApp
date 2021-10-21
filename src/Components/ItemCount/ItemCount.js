import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ItemCount = ({stock, props}) => {
  const [counter, setCounter] = useState(0);
  const [compra, setCompra] = useState([]);

  const [terminar, setTerminar] = useState(false);


  const handleIncrement = () => {
    if (counter< stock) {
        setCounter(counter + 1)
    }
  };
  const handleDecrement = () => {
    if (counter> 0) {
        setCounter(counter -1)
    }
  };


  const onAdd = (cantidad) => {
     // Funcion que va a hacer desaparecer el item count por un boton de 'Finalizar   compra"
     setCompra(cantidad)
setTerminar(!terminar)
  }
  return (
    <div className="container">
      <h2>{counter}</h2>
      <Button variant="primary" onClick={handleDecrement}>
        -
      </Button>

      <Button variant="primary" onClick={handleIncrement}>
        +
      </Button>
      { terminar ?<Link to="/Carrito"><button className="btn_activo" >Confirmar Compra</button></Link>: (
        <Button onClick={(cant)=> onAdd(cant)}>
        Agregar
      </Button>
           )}
    </div>
  );
};

export default ItemCount;