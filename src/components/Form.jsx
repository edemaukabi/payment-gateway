import React, { useState, useRef } from "react";
import { FaPen } from "react-icons/fa";
import { GiSevenPointedStar } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { TbGridDots } from "react-icons/tb";
import masterCard from "../data/images/mastercard-logo.png";
import formStyles from "../styles/form.css";

const PaymentForm = ({data}) => {
    const {cardNumberInfo,
        cvvNumberInfo,
        expiryMonthInfo,
        expiryYearInfo,
        passwordInfo } = data

        const cardNumberPlaceholder = cardNumberInfo.substring().replace(/(\d{4})/g, "$1 - ");
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [cvv, setCvv] = useState(cvvNumberInfo);
  const [expiryMonth, setExpiryMonth] = useState(expiryMonthInfo.padStart(2, '0'));
  const [expiryYear, setExpiryYear] = useState(expiryYearInfo);

  const [password, setPassword] = useState(passwordInfo);

  const handleCardNumberChange = (event) => {
    const { value } = event.target;
    const newValue = value.replace(/\D/g, "");

    // Format the card number in groups of four with dashes
    const formattedValue = newValue.substring().replace(/(\d{4})/g, "$1-"); // Add a dash after every four digits

    setCardNumber(formattedValue.slice(0, 19));
    setCardType(getCardType(value));
  };

  const handleCvvChange = (event) => {
    const { value } = event.target;
    setCvv(value);
  };

  const handleMonthChange = (e) => {
    const { value } = e.target;
    setExpiryMonth(value);
  };

  const handleYearChange = (e) => {
    const { value } = e.target;
    setExpiryYear(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const getCardType = (cardNumber) => {
    // Regex patterns for different card types
    const cardTypes = [
      { type: "mastercard", pattern: /^5[1-5]/ },
      { type: "visa", pattern: /^4/ },
    ];

    for (const cardType of cardTypes) {
      if (cardNumber.match(cardType.pattern)) {
        return cardType.type;
      }
    }

    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="payment-form-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="payment-form-group card-number">
          <label className="card-number-label" htmlFor="cardNumber">
            <div>
              <p>Card Number:</p>
              <p>Enter the 16-digit card number on the card</p>
            </div>
            <div className="card-number-label-edit">
              <FaPen className="edit-icon" />
              <span>Edit</span>
            </div>
          </label>
          <input
            id="cardNumber"
            placeholder={cardNumberPlaceholder}
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
          />
          <img src={masterCard} className="card-number-card" />
          <GiSevenPointedStar className="card-number-icon" size={"1.2rem"} />
          <TiTick className="card-number-icontick" size={"0.8rem"} />
        </div>

        {/* <div className="card-type">{cardType}</div> */}
        <div className="payment-form-group cvv">
          <label htmlFor="cvv">CVV:</label>
          <input
            id="cvv"
            type="text"
            maxLength="3"
            minLength="3"
            value={cvv}
            onChange={handleCvvChange}
            required
          />
          <TbGridDots className="payment-form-gridicon"/>
        </div>

        <div className="payment-form-group expiry">
          <label htmlFor="expiryMonth">Expiry Date:</label>
          <div>
            <input
              type="text"
              value={expiryMonth}
              onChange={handleMonthChange}
              placeholder="MM"
              maxLength="2"
            />
            <span className="expiry-span">/</span>
            <input
              type="text"
              value={expiryYear}
              onChange={handleYearChange}
              placeholder="YY"
              maxLength="2"
            />
          </div>
        </div>

        <div className="payment-form-group password">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <TbGridDots className="payment-form-gridicon"/>
        </div>

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
