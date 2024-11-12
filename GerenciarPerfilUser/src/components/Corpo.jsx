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
          <input className='inpts' type="text" value="alguma pessoa da silva" />

          <label className='labelInpts'>E-mail</label>
          <input className='inpts' type="text" value="AlgumaPessoaDaSilva@gmail.com" />

          <label className='labelInpts'>Senha</label>
          <input className='inpts' type="password" value="algum@_pesso@_d@_silv@123" /> <br/>

            <button className='excluir'>EXCLUIR A CONTA</button>
            <button className='sair'>Sair da conta</button>
          
        </div>

        <div className="divLinha"></div>

        <div className='divDois'>
          <h1 className='especificacoes'>Especificações</h1>
          <div className='divCheckBox'>
            <label className='labelInpts'>Possui alguma deficiência?</label>
            <label><input className='checkbox' type="radio" name="deficiencia" checked /> Sim</label>
            <label><input className='checkbox' type="radio" name="deficiencia" /> Não</label>
          </div>

          <label className='labelInpts'>Deficiência:</label>
          <input className='inpts' type="text" value="Autismo" />

          <label className='labelInpts'>Detalhes:</label>
          <input className='inpts' type="text" value="blablabla..." />
        </div>
    </div>
  );
}

export default Corpo;