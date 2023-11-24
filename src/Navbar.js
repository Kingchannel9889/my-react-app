import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
    <div className='container'>
            <ol className='nav-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="Plansprice">Plans and Price</Link></li>
                <li><Link to="Products">Products</Link></li>
                <li><Link to="contactus">Contact Us</Link></li>
            </ol>
        </div>
  )
}

export default Navbar