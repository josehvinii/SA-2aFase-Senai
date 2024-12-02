import React from 'react'
import './Perfil2.css';

function Perfil() {
  return (
<div className='Corpo-container'>

<div className='divUm'>

  <img className='iconUser' src="./img/fotoUser.png" alt="User Icon" />
  <p className='nomeUser'>Juliana Peres</p>

  <label className='possuiDeficiencia'>Possui alguma deficiência?</label> <img className='verificado2' src="./img/img logo.png" alt="" />
  <input type="checkbox" className='checkBox' /> <label className='sim'>Sim</label>
  <input type="checkbox" className='checkBox' /> <label className='nao'>Não</label>


  <label className='deficiencia'>Deficiência:</label>
  <input className='inpts' type="text" />


  <label className='detalhes'>Detalhes:</label>
  <input className='inpts' type="text" />


</div>


<div className="divLinha"></div>


<div className='divDois'>
  
  <h1 className='especificacoes'>Especificações</h1>

  <button className='sair'>Sair da conta</button>
  
</div>


</div>
  )
}

export default Perfil
