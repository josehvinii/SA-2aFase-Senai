import React from 'react'
import './GerenciaEmpresa.css';

function GerenciaEmpresa() {
  return (
    <div className='Corpo-container'>

      <div className='divUm'>
        <h1 className='dadosDaConta'>Dados da Conta</h1>

        <img className='iconUser' src="./img/fotoUser.png" alt="User Icon" />

        <label className='alterarfoto'>
          alterar foto <img className='iconeFoto' src="./img/iconFoto.png" alt="Change Photo Icon" />
        </label>

        <img className='verific-empresa' src="./img/image.png" alt="" />

        <div className='div-inptMae'>

          <div className='div-inpt1'>
            <label className='labelInpts'>Nome empresa</label>
            <input className='inpts' type="text" />


            <label className='labelInpts'>E-mail</label>
            <input className='inpts' type="text" />


            <label className='labelInpts'>Senha</label>
            <input className='inpts' type="password" /> <br />
          </div>

          <div className='div-inpt2'>
            <label className='labelInpts'>CNPJ</label>
            <input className='inpts' type="text" />


            <label className='labelInpts'>Telefone</label>
            <input className='inpts' type="text" />


            <label className='labelInpts'>Endereço</label>
            <input className='inpts' type="password" /> <br />
          </div>

        </div>

        <button className='sair'>Sair da conta</button>


      </div>


      <div className="divLinha"></div>


      <div className='divDois'>
        
        <h1 className='eventos'>Eventos</h1>

        <div className='div-excluir'>
        <h1 className='excluir'>EXCLUIR CONTA</h1>
        <img className='iconLixo' src="./img/iconLixo.png" alt="User Icon" />
        </div>

      </div>


    </div>
  )
}

export default GerenciaEmpresa
