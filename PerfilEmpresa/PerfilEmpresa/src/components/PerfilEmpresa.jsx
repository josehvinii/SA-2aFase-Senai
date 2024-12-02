import React from 'react'
import './PerfilEmpresa2.css';

function PerfilEmpresa() {
  return (
<div className='Corpo-containerEmpresa'>

<div className='div1Emp'>

  <img className='iconEmp' src="./img/fotoUser.png" />
  <img className='verificadoEmp' src="./img/verificado-empresa.png" alt="" />
  <p className='nomeEmp'>InKluaTicket</p>


  <label className='labelEmp'>Email para contato:</label>
  <input className='inptsEmp' type="text" />

  <label className='labelEmp'>Telefone para contato:</label>
  <input className='inptsEmp' type="text" />

  <label className='labelEmp'>Endereço fiscal:</label>
  <input className='inptsEmp' type="text" />

</div>


<div className="divLinhaEmp"></div>


<div className='div2Emp'>
  
  <h1 className='Frase1Emp'>Mantenha suas informações seguras!</h1>

  <p className='Texto1Emp'>Evite compartilhar seus dados pessoais com outras pessoas. 
    Suas informações são protegidas e usadas apenas para 
    melhorar sua experiência.</p>

    <h1 className='Frase2Emp'>Atualização é importante!</h1>
  
  <p className='Texto2Emp'>Mantenha suas informações atualizadas para garantir uma 
  experiência mais personalizada e eficiente.</p>

  <button className='gerenciarEmp'>Gerenciar Perfil</button>
  <img className='iconGerenciarEmp' src="./img/gerenciarUser.png"/>
  
  
</div>


</div>
  )
}

export default PerfilEmpresa
