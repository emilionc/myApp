import { useState } from "react";
import Button from "react-bootstrap/Button";


const ItemCount = ({stock, props}) => {
  const [counter, setCounter] = useState(0);

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

  return (
    <div className="container">
      <h2>{counter}</h2>
      <Button variant="primary" onClick={handleDecrement}>
        -
      </Button>

      <Button variant="primary" onClick={handleIncrement}>
        +
      </Button>
      <Button onClick={()=>props.onClick(counter)}>
        Agregar
      </Button>
    </div>
  );
};

export default ItemCount;
