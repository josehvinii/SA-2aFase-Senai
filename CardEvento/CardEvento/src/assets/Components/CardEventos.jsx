import React from 'react'
import './CardEventos.css'


function CardEvento() {
  return (
    <div className='container-card'>
      <div className="card">
        <img className='imagemEvento' src="./Img/Img-Evento.PNG"/>
        <div className="card-body">
          <h2 className='data'>27 nov - 2024 • 08:00 {'>'} 29 nov - 2024 • 19:00</h2>
          <p className='local'>CentroSul Florianópolis, Florianópolis - SC</p>
        </div>
      </div>
    </div>
  )
}


export default CardEvento