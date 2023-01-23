import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  //mobile view
  const [ toggleMenu, setToggleMenu ] = useState(false)

  //change color
  const [ color, setColor ] = useState(false)
  const changeColor = () => {
      if (window.scrollY >= 100) {
          setColor(true)
      } else {
          setColor(false)
      }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className='fixed'>
        <div className={color ? 'navbar active' : 'navbar'}>
            <div className="navbar-logo">
                <img src={logo} alt='' />
                <h1>Boldo</h1>
            </div>
            <div className="navbar-links">
                <Link to={'/'}><a href='#'>Home</a></Link>
                <Link to={'/product'}><a href='#'>Product</a></Link>
                <Link to={'/services'}><a href='#'>Services</a></Link>
                <Link to={'/contact'}><a href='#'>Contact</a></Link>
                <button>Log In</button>
            </div>
{/* in mobile view */}
            <div className="navbar-menu">
              {toggleMenu
                ? <img src={close} style={{ backgroundColor: 'white', borderRadius: 5}} onClick = {() => setToggleMenu(false)} />
                : <img src={menu}  onClick = {() => setToggleMenu(true)} />
              }
              {toggleMenu &&
                <div className="menu-links">
                  <Link to={'/'}><a href='#'>Home</a></Link>
                  <Link to={'/product'}><a href='#'>Product</a></Link>
                  <Link to={'/services'}><a href='#'>Services</a></Link>
                  <Link to={'/contact'}><a href='#'>Contact</a></Link>
                  <button>Log In</button>
                </div>
              }
            </div>
        </div>
    </div>
  )
}

export default Navbar