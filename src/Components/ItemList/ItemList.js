import React, { useEffect, useState } from "react";
import CardItem from "../../../src/Components/CardItem/CardItem";
import "./ItemList.css";
import { Link } from "react-router-dom";
import { collection, query,  getDocs, addDoc } from "firebase/firestore";
import { db } from "../../FireBase/FireBase";
//import axios from 'axios';

const ItemList = () => {
  //const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
   const [inputValue, setInputValue] = useState('');
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
      setProducts(products)
      console.log(products);
    };

    requestData();
  }, []);
  const onChange = (e) => {
    setInputValue(e.target.value)
    // console.log(e.taget.value);
  }
  const registrarCompra = async (e) => {
    e.preventDefault();
    console.log(inputValue);

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "compras"), {
  name: inputValue,
  //country: "Japan"
});

console.log("Document written with ID: ", docRef.id);
setInputValue('');
  }
  return (
    <div className="ItemList">
    <div className="form-container">
    <form onSubmit={registrarCompra} style={{margin: 15}}>
      <input  placeholder='name' onChange={onChange} inputValue={inputValue}/>
      <button style={{marginTop: 10}}>Agregar</button>
    </form>
    </div>
    <div className="list-container">
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
