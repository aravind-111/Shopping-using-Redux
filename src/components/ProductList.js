import React from "react";
import "./productList.css";
import data from "../data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import QImage from "./QImage";

function ProductList() {
  const dispatch = useDispatch();

  const singleProduct = (data) => {
    dispatch({ type: "getCurrentProduct", payload: data });
  };

  const addCart = (data) => {
    dispatch({ type: "addCart", payload: data });
  };

  return (
    <div className="main-container">
      <div className="container">
        {data.map((data) => {
          return (
            <div className="product-container" key={data.id}>
              <Link to={`/product/${data.id}`}>
                <div
                  onClick={() => singleProduct(data)}
                  className="product-container"
                >
                  <QImage src={data.img} />
                  <h1>{data.name}</h1>
                  {/* <p>{data.desc}</p> */}
                  <h2>Price: ₹{data.price}</h2>
                </div>
              </Link>
              <button onClick={() => addCart(data)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
