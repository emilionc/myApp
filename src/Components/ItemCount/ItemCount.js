import { useState } from "react";
import { Link } from "react-router-dom";
import  '../ItemCount/ItemCount.css'
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
     
      <button onClick={handleDecrement} style={{marginLeft: 20}}>
     -
      </button>
      <h2 style={{padding: 10}}>{counter}</h2>
      <button onClick={handleIncrement} style={{marginRight: 20}}>
      +
      </button>
      {terminar ? (
        <Link to="/Carrito">
          <button className="btn_activo">
            Confirmar Compra
          </button>
        </Link>
      ) : (
        <div className="button-container">
        <button  onClick={onAdd}>
          Agregar
        </button>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
