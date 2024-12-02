import React from 'react'
import './Perfil2.css';

function Perfil() {
  return (
<div className='Corpo-container'>

<div className='divUm'>

  <img className='iconUser' src="./img/fotoUser.png" alt="User Icon" />
  <p className='nomeUser'>Juliana Peres</p>

  <label className='possuiDeficiencia'>Possui alguma deficiência?</label> <img className='verificado2' src="./img/img logo.png" alt="" />
  
  <div className="checkBoxGroup">
  <div>
    <input type="checkbox" className="checkBox" id="sim" />
    <label htmlFor="sim">Sim</label>
  </div>
  <div>
    <input type="checkbox" className="checkBox" id="nao" />
    <label htmlFor="nao">Não</label>
  </div>
</div>


  <label className='deficiencia'>Deficiência:</label>
  <input className='inpts' type="text" />


  <label className='detalhes'>Detalhes:</label>
  <input className='inpts' type="text" />


</div>


<div className="divLinha"></div>


<div className='divDois'>
  
  <h1 className='Frase1'>Mantenha suas informações seguras!</h1>

  <p className='Texto1'>Evite compartilhar seus dados pessoais com outras pessoas. 
    Suas informações são protegidas e usadas apenas para 
    melhorar sua experiência.</p>

    <h1 className='Frase2'>Atualização é importante!</h1>
  
  <p className='Texto2'>Mantenha suas informações atualizadas para garantir uma 
  experiência mais personalizada e eficiente.</p>

  <button className='gerenciar'>Gerenciar Perfil</button>
  <img className='iconGerenciar' src="./img/image 47.png"/>
  
  
</div>


</div>
  )
}

export default Perfil
