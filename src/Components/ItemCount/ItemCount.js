import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../ItemContext";

const ItemCount = ({ stock, onClick }) => {
  //useContext
  const [counter, setCounter] = useState(0);
  const [terminar, setTerminar] = useState(false);


  const handleIncrement = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  
  const onAdd = () => {
    // Funcion que va a hacer desaparecer el item count por un boton de 'Finalizar   compra"
    setTerminar(!terminar);
    onClick(counter);
  };

  return (
    <div className="container">
      <h2>{counter}</h2>
      <Button variant="primary" onClick={handleDecrement}>
        -
      </Button>

      <Button variant="primary" onClick={handleIncrement}>
        +
      </Button>
      
      {terminar ? (
        <Link to="/Carrito">
          <button className="btn_activo">
            Confirmar Compra
          </button>
        </Link>
      ) : (
        <Button  onClick={onAdd}>
          Agregar
        </Button>
      )}
    </div>
  );
};

export default ItemCount;
