import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-email">
            <h1>An enterprise template to ramp up your company website</h1>
            <div className="footer-email-button">
                <input type={'email'} placeholder='Your email address..' />
                <button>Start now</button>
            </div>
        </div>
        <div className="footer-main">
            <div className="footer-main-logo">
                <h1><img src={logo} alt='' />&nbsp;Boldo</h1>
                <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                <p>All rights reserved.</p>
            </div>
            <div className="footer-main-landings">
                <h1>Landings</h1>
                <a href='#'>Home</a>
                <a href='#'>Product</a>
                <a href='#'>Services</a>
            </div>
            <div className="footer-main-company">
                <h1>Company</h1>
                <a href='#'>Home</a>
                <a href='#'>Careers <span>Hiring!</span></a>
                <a href='#'>Services</a>
            </div>
            <div className="footer-main-resources">
                <h1>Resources</h1>
                <a href='#'>Blog</a>
                <a href='#'>Product</a>
                <a href='#'>Services</a>
            </div>
        </div>
    </div>
  )
}

export default Footer