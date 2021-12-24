import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QCounter from "../QCounter";
import QImage from "../QImage";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);

  const itemPrice = cart.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );
  const tax = (itemPrice * 0.12).toFixed(2);
  const shippingCost = itemPrice > 1000 ? 0 : itemPrice > 0 ? 50 : 0;
  const totalCost = Math.round(+itemPrice + +tax + +shippingCost);

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
              <QImage zoom src={item.img} />
              {/* <ReactImageZoom /> */}
              <div className="cartDetails">
                <h2>{item.name}</h2>
                <h2>₹{item.price}</h2>
                <QCounter
                  className="cartButton"
                  onIncrement={incCart}
                  OnDecrement={decCart}
                  item={item}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="amount">
        <h2>Cart Value</h2>
        <hr></hr>

        <div className="nameValue">
          <h4>Item Price :</h4>
          <h4>{itemPrice}</h4>
        </div>
        <div className="nameValue">
          <h4>Tax Price : </h4>
          <h4>{tax}</h4>
        </div>
        <div className="nameValue">
          <h4>Shipping Price : </h4>
          <h4>{shippingCost}</h4>
        </div>
        <div className="nameValue">
          <h2>Total : </h2>
          <h2>{totalCost}</h2>
        </div>

        <hr></hr>
      </div>
    </div>
  );
}

export default Cart;
