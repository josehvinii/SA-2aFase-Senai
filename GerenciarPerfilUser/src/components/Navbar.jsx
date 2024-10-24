import React from 'react'
import './Navbar.css'
import Logo from './Logo'

function Navbar() {
  return (
    <div className='Navbar-container'>
      <div className='logo'><Logo/></div>
      <li>Minha conta</li>
    </div>
  )
}

export default Navbar
