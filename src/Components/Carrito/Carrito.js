import React, { useContext } from "react";
import { ItemsContext } from "../../ItemContext";
import { Link } from 'react-router-dom';


const Carrito = () => {
  const { cantidadTotal, items, limpiarCarrito } = useContext(ItemsContext);
  //const [compraNula, setCompraNula] = useState
  //const productLength = items.length

  return (
    <div>
      {
        !items.length ? 
        <>
          <button component={Link} to="/">volver Home</button>
        </>
       : 
      
        <>
          <div class="productContainer" style={{ padding: 40 }}>
            <h1>total productos: {cantidadTotal} productos</h1>
            <div>
              {items.map((user) => {
                return (
                  <div>
                    <h1>Detalle</h1>
                    {console.log(user)}
                    <h2 style={{ marginTop: 30 }}>Nombre: {user.login}</h2>
                    <h2>id: {user.node_id}</h2>
                    <h2>Avatar: {user.avatar_url}</h2>
                    <h3 style={{ color: "red" }}>
                      {" "}
                      cantidad agregados: {user.cantidad}
                    </h3>
                  </div>
                );
              })}

              <button onClick={limpiarCarrito} style={{ marginTop: 20 }}>
                vaciar carro
              </button>
            </div>
          </div>
        </>

      }
    </div>
  );
};

export default Carrito;
