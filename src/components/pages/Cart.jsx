import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container container-cart">

    <div className="cart cart--empty">
      <h2>
      Cart is empty😕
      </h2>
      <p>
      You haven't ordered pizza yet.
        <br />
        To order pizza, go to the main page.
      </p>
      <img src="" alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Go Back</span>
      </Link>
    </div>
    </div>
  );
};

export default Cart;
