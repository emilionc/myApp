import React, { useEffect, useState } from "react";
import CardItem from "../../../src/Components/CardItem/CardItem";
import "./ItemList.css";
import { Link } from "react-router-dom";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../FireBase/FireBase";
//import axios from 'axios';

const ItemList = () => {
  //const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  //console.log(users);

  useEffect(() => {
    const requestData = async () => {
      const q = query(collection(db, "products"));

      const querySnapshot = await getDocs(q);
      const products = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const product = { id: doc.id, ...doc.data() };
        products.push(product);
        //console.log(products);
      });
      setProducts(products);
      console.log(products);
    };

    requestData();
  }, []);

  const getSummer = () => {
    const requestData = async () => {
      const q = query(
        collection(db, 'products'), // Aca estabas pasando el estado "products", habia que pasarle un string
        where("category", "==", "verano")
      );
      const newProducts = []; // Para evitar el variable shadowing
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        const product = { id: doc.id, ...doc.data() };
        newProducts.push(product);
      });
      setProducts(newProducts);
      console.log(newProducts);
    };
    requestData();
  };

  return (
    <div className="ItemList">
     
      <div className="list-container">
      <button  onClick={getSummer}>ropa verano</button>
        {products.map((product) => {
          return (
            <Link to={`/detail/${product.id}`}>
              <CardItem key={product.id} product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ItemList;
