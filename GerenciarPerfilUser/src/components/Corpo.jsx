import React from 'react';
import './Corpo.css';

function Corpo() {
  return (
    <div className='Corpo-container'>
      
        <div className='divUm'>
          <h1 className='dadosDaConta'>Dados da Conta</h1>
          <img className='iconUser' src="./img/fotoUser.png" alt="User Icon" />
          <label className='alterarfoto'>
            alterar foto <img className='iconeFoto' src="./img/iconFoto.png" alt="Change Photo Icon" />
          </label>

          <label className='labelInpts'>Nome</label> 
          <input className='inpts' type="text"/>

          <label className='labelInpts'>E-mail</label>
          <input className='inpts' type="text"/>

          <label className='labelInpts'>Senha</label>
          <input className='inpts' type="password"/> <br/>

            <button className='sair'>Sair da conta</button>
            <button className='excluir'>EXCLUIR A CONTA</button>
          
        </div>

        <div className="divLinha"></div>

        <div className='divDois'>
          <h1 className='especificacoes'>Especificações</h1>

          <div className='divCheckBox'>
            <label className='possuiDeficiencia'>Possui alguma deficiência?</label>
            <label><input className='checkbox' type="radio" name="deficiencia"/> Sim</label>
            <label><input className='checkbox' type="radio" name="deficiencia" /> Não</label>
          </div>

          <label className='labelInpts'>Deficiência:</label>
          <input className='inptsTela2' type="text" />

          <label className='labelInpts'>Detalhes:</label>
          <input className='inptsTela2' type="text" />
        </div>

    </div>
  );
}

export default Corpo;