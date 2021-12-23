import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./individualProduct.css";

function IndividualProduct() {
  const singleProduct = useSelector((state) => state.cart.currentProduct);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const value = cart.map(
    (item) => item.id === singleProduct.id && item.quantity
  );
  console.log(value);

  const incCart = (item) => {
    console.log(item);
    dispatch({ type: "incCart", payload: item });
  };
  const decCart = (item) => {
    value > 1
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
          <div className="buttonDiv">
            <button onClick={() => incCart(singleProduct)}>+</button>
            {value}
            <button onClick={() => decCart(singleProduct)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualProduct;
