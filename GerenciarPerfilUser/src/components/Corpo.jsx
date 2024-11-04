import React from 'react'
import './Corpo.css'

function Corpo() {
  return (
    <div className='Corpo-container'>

      <h1 className='dadosDaConta'>Dados da Conta</h1>

      <div className='divUm'>

        <div className='divDois'>
          <img className='iconUser' src="./img/iconUser.png" />
          <label className='alterarfoto'>Alterar foto</label>
          <label className='labelInpts'>Nome</label> <input className='inpts' type="text" />
          <label className='labelInpts'>Email</label><input className='inpts' type="text" />
          <label className='labelInpts'>Senha</label><input className='inpts' type="text" />
        </div>

        <div className='botoes'>
          <button className='botao'>EXCLUIR CONTA</button>
          <button className='botao'>DESCONECTAR</button>
        </div>

      </div>


    </div>
  )
}

export default Corpo
