import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const incCart = (item) => {
    dispatch({ type: "incCart", payload: item });
  };
  const decCart = (item) => {
    item.quantity > 1
      ? dispatch({ type: "decCart", payload: item })
      : dispatch({ type: "removeFromCart", payload: item });
  };

  return (
    <div className="cartContainer">
      <div className="items">
        {cart.map((item) => {
          return (
            <div key={item.id} className="individualItem">
              <img className="image" src={item.img} alt="" />
              <div className="cartDetails">
                <h2>{item.name}</h2>
                <h2>₹{item.price}</h2>
                <div className="cartButton">
                  <button onClick={() => incCart(item)}>+</button>
                  {item.quantity}
                  <button onClick={() => decCart(item)}>-</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div></div> */}
      <div className="amount">
        <h2>Cart Value</h2>
        <hr></hr>

        <div className="nameValue">
          <h4>Item Price :</h4>
          <h4>98</h4>
        </div>
        <div className="nameValue">
          <h4>Tax Price : </h4>
          <h4>98</h4>
        </div>
        <div className="nameValue">
          <h4>Shipping Price : </h4>
          <h4>98</h4>
        </div>
        <div className="nameValue">
          <h2>Total : </h2>
          <h2>98</h2>
        </div>

        <hr></hr>
      </div>
    </div>
  );
}

export default Cart;
