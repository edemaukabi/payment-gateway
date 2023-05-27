import React from 'react'
import { BiDockBottom } from 'react-icons/bi'
import logostyles from '../styles/logo.css'

const Logo = () => {
  return (
    <div className='logo'>
        <div className='logo-image'>
            <BiDockBottom className='logo-icon'/>
        </div>
        <p className='logo-text'><span>AceCoin</span>Pay</p>
    </div>
  )
}

export default Logo