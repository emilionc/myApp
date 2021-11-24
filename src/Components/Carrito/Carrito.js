import React, { useContext, useState } from "react";
import { ItemsContext } from "../../ItemContext";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../FireBase/FireBase";

import './Carrito.css';


const Carrito = ({ match }) => {
  const { cantidadTotal, items, limpiarCarrito, removeItem } =
    useContext(ItemsContext);

  const [inputValue, setInputValue] = useState("");
  const [compras, setCompras] = useState(null);

  const registrarCompra = async (e) => {
    e.preventDefault();
    console.log(inputValue);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "compras"), {
      name: inputValue,
      id: items,
      //  guardar el estado del carrito
    });
    // asignar a compras el id del documento (docRef.id)
    setCompras(docRef.id);
    console.log("Document written with ID: ", docRef.id);
    setInputValue("");

    // No se cual es el sentido de esta parte
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const sumaCompra = items.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );
  console.log(sumaCompra);

  return (
    <div>
      {!items.length ? (
        <>
          <p style={{ display: "flex", justifyContent: "center" }}>
            "no hay productos en el carrito"
          </p>
          <Link
            to="/"
            style={{
              marginTop: 100,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button>volver Home</button>
          </Link>
        </>
      ) : (
        <>
          <div class="productContainer" style={{ padding: 40 }}>
            <h1>Total Productos: {cantidadTotal} </h1>
            <div>
              {items.map((product) => {
                return (
                  <div className="contenedor-item">
                    {console.log(product)}
                    <h2 style={{ marginTop: 30 }}>Nombre: {product.title}</h2>
                    <h2>talle: {product.talle}</h2>
                    <h2>Price: ${product.price}</h2>
                    <h3 style={{ color: "red" }}>
                      {" "}
                      cantidad agregados: {product.cantidad}
                    </h3>
                    <button onClick={() => removeItem(product.id)}>
                      {" "}
                      Eliminar Producto
                    </button>
                  </div>
                );
              })}
              <div className="form-container">
                <form onSubmit={registrarCompra} style={{ margin: 15 }}>
                  <input
                    placeholder="name"
                    onChange={onChange}
                    inputValue={inputValue}
                  />
                  <button style={{ marginTop: 10 }}>Check-out compra</button>
                </form>
              </div>
              {compras && <h5>compra registrada con ID : {compras}</h5>}

              <h3> Precio Total: ${sumaCompra}</h3>

              <button onClick={limpiarCarrito} style={{ marginTop: 20 }}>
                vaciar carro
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
