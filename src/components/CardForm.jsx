import React from 'react'
import Logo from './Logo'
import PaymentForm from './Form'
import formStyles from '../styles/cardform.css'


const currentDate = {
    day: '01',
    month: '01',
    year: "19"
}

const CardForm = ({data}) => {
  return (
    <div className='cardform'>
        <div className='cardform-header'>
            <Logo />
            <div className='cardform-header-right'>
                <span className='cardform-header-span'>0</span>
                <span className='cardform-header-span'>1</span>
                <span className='cardform-header-space'>:</span>
                <span className='cardform-header-span'>1</span>
                <span className='cardform-header-span'>9</span>
            </div>
        </div>
        <div className='cardform-form'>
            <PaymentForm data={data}/>
        </div>
    </div>
  )
}

export default CardForm