import React from "react";
import { IoWifiOutline } from "react-icons/io5";
import chip from "../data/images/chip.png";
import cardLogo from "../data/images/master.png";
import cartStyles from "../styles/cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="card">
        <div className="card-top"></div>
        <div className="card-top-spot"></div>
        <div className="card-content">
          <div className="card-content-top">
            <img src={chip} alt="chip" className="card-chip-image" />
            <IoWifiOutline className="card-chip-icon" />
          </div>
          <div className="card-content-bottom">
            <p>Jonathan Michael</p>
            <p>1525262272727</p>
            <div>
              <span>09/22</span>
              <img src={cardLogo} className="card-logo"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-details"></div>
    </div>
  );
};

export default Cart;
