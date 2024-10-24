import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>

<header className='Container'>

  <div className=''>

    <img className='Voltar' src="./images/arrow_back.png" alt="" />
    <img className='logo' src="./images/InKlua.png" alt="" />

    

  </div>

    <nav className='Infos'>

      <li className='InfosNav'>Entrar</li>
      <li className='separador'></li>
      <li className='InfosNav'>Cadastrar</li>

    </nav>
    



</header>
 
</>
  )
}

export default Navbar
