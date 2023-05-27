import React from 'react'
import Cart from '../components/Cart'
import CardForm from '../components/CardForm'
import styles from '../styles/payment.css'


export const Payment = () => {
    const paymentData = {
        cardNumberInfo: "2412751234123456",
        cvvNumberInfo: "327",
        expiryMonthInfo: "09",
        expiryYearInfo: "22",
        passwordInfo: "12345678"
    }
    return (
      <div className='payment'>
        <div className='payment__nav'>
        </div>
        <div className='payment__body'>
          <CardForm data={paymentData}/>
          {/* <Cart /> */}
        </div>
      </div>
    )
  }