import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const cart = useSelector((state) => state.cart.cart.length);
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <h2>Shop Online</h2>
      </Link>
      <Link to="/cart">
        <div>
          Cart : &nbsp;<span>{cart}</span>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
