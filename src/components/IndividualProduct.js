import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./individualProduct.css";
import QCounter from "./QCounter";

function IndividualProduct() {
  const singleProduct = useSelector((state) => state.cart.currentProduct);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);
  console.log(singleProduct);
  let value;
  let product;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === singleProduct.id) {
      value = cart[i].quantity;
      product = cart[i];
    }
  }
  // const value = cart.map((item) => item.id === singleProduct.id);
  console.log(value);
  console.log(product);

  const incCart = (item) => {
    console.log(item);
    dispatch({ type: "incCart", payload: item });
  };
  const decCart = (item) => {
    console.log(item);
    singleProduct.quantity > 1
      ? dispatch({ type: "decCart", payload: item })
      : dispatch({ type: "removeFromCart", payload: item });
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <img src={singleProduct.img} alt="" />
        <div className="details">
          <h1>{singleProduct.name}</h1>
          <p>{singleProduct.desc}</p>
          <h1>₹{singleProduct.price}</h1>
          <QCounter
            className="buttonDiv"
            onIncrement={incCart}
            OnDecrement={decCart}
            item={singleProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default IndividualProduct;
