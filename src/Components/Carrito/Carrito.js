import React, { useContext, useState } from "react";
import { ItemsContext } from "../../ItemContext";
import { Link } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../FireBase/FireBase";

const Carrito = ({match}) => {
  const { cantidadTotal, items, limpiarCarrito, removeItem } = useContext(ItemsContext);
  //const [compraNula, setCompraNula] = useState
  //const productLength = items.length
  const [inputValue, setInputValue] = useState("");
  const [compras, setCompras] = useState(null);


  const registrarCompra = async (e) => {
    e.preventDefault();
    console.log(inputValue);

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "compras"), {
      name: inputValue,
    });
    console.log("Document written with ID: ", docRef.id);
    setInputValue("");
    const requestDataCompras = async () => {
      const product = await getDocs(collection(db, "compras"));
      product.forEach((document) => {
       // console.log(document.id);
        setCompras(document.id);
      });
    };
    requestDataCompras();
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const sumaCompra = items.reduce((acc, item) => acc +(item.price * item.cantidad), 0);
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
                  <div>
                    {console.log(product)}
                    <h2 style={{ marginTop: 30 }}>Nombre: {product.title}</h2>
                    <h2>talle: {product.talle}</h2>
                    <h2>Price: ${product.price}</h2>
                    <h3 style={{ color: "red" }}>
                      {" "}
                      cantidad agregados: {product.cantidad}
                    </h3>
                    <button onClick={() => removeItem(product.id)}>  Eliminar Producto</button>
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
