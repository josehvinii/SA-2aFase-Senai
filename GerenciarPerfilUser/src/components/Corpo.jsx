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


          <img className='verificado' src="./img/img logo.png" alt="" />


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


            <label className='possuiDeficiencia'>Possui alguma deficiência?</label> <img className='verificado2' src="./img/img logo.png" alt="" />
            <input type="checkbox" className='checkBox'/> <label className='sim'>Sim</label>
            <input type="checkbox" className='checkBox'/> <label className='nao'>Não</label>


          <label className='deficiencia'>Deficiência:</label>
          <input className='inptsTela2' type="text" />


          <label className='detalhes'>Detalhes:</label>
          <input className='inptsTela2' type="text" />
        </div>


    </div>
  );
}


export default Corpo;