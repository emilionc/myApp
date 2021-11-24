import React, { useState, useEffect, useContext } from "react";
import "./UserDetail.css";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FireBase/FireBase";

import { ItemsContext } from "../../ItemContext";

const UserDetail = ({ match }) => {
  let itemID = match.params.id;
  const [product, setProduct] = useState([]);
  const { addItem } = useContext(ItemsContext);

  useEffect(() => {
    const requestData = async () => {
      const docRef = doc(db, "products", itemID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setProduct({ id: itemID, ...docSnap.data()});
      }
    };
    requestData();

  }, [itemID]);
  const onAdd = (cantidad) => {
    addItem(product, cantidad);
  };

  return (
    <div>
      <div className="CharacterDetail" style={{ padding: 40 }}>
        {console.log(product)}
        <img src={product.img} alt="algodon"/>
        <h2>Nombre: {product.title}</h2>
        <h2>Price: ${product.price}</h2>
        <h3>Talle: {product.talle}</h3>
        <ItemCount
          nombre={product.title}
          valorInicial="1"
          stock="30"
          onClick={(cant) => onAdd(cant)}
        />
      </div>
    </div>
  );
};

export default UserDetail;
