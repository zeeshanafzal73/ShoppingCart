import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./Cart-Item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="container-md">
      <div className="cart">
        <div className="cartItemContainer" style={{ justifyContent: "center" }}>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="checkout mb-5">
            <div
              className="cartItemContainer mt-2"
            >
              <h3>SubTotal :{totalAmount} $</h3>
            </div>
            <div
              className="cartItemContainer mt-2"
            >
              <button
                type="button"
                className="btn btn-dark mr-2"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
              <button type="button" className="btn btn-warning ml-2">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div
          className="cartItemContainer mt-2"
        >
          <h1>Your Cart is empty</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
