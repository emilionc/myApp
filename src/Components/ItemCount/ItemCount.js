import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../ItemContext";

const ItemCount = ({ stock, onClick, nombre }) => {
  //useContext
  const [items, setItems] = useContext(ItemsContext);
  console.log("ITEMS", items);
  const [counter, setCounter] = useState(0);
  //estado del conditional rendering..
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
  const clear = () => {
    if (counter > 0) {
      setCounter(0);
    }
  };

  const onAdd = () => {
    // Funcion que va a hacer desaparecer el item count por un boton de 'Finalizar   compra"
    setTerminar(!terminar);
  };
  const onConfirmar = () => {
    const newItem = {
      nombre: nombre,
      counter: counter,
    };
    const newCart = [...items, newItem];
    setItems(newCart);
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
      <Button variant="primary" onClick={clear}>
        clear
      </Button>
      {terminar ? (
        <Link to="/Carrito">
          <button className="btn_activo" onClick={onConfirmar}>
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
