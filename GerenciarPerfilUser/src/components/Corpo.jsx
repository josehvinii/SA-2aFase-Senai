import React from 'react';
import './Corpo.css';

function Corpo() {
  return (
    <div className='Corpo-container'>
      <div className="espaco">
        <h1 className='dadosDaConta'>Dados da Conta</h1>
        <div className="espaco2">
          <h1 className='especificacoes'>Especificações</h1>
        </div>

      </div>
      <div className='divUm'>
        <div className='divDois'>
          <img className='iconUser' src="./img/fotoUser.png" alt="User Icon" />
          <label className='alterarfoto'>
            Alterar foto <img className='iconeFoto' src="./img/iconFoto.png" alt="Change Photo Icon" />
          </label>

          <label className='labelInpts'>Nome</label>
          <div className='inptLapis'>
            <input className='input-nome' type="text" />
            <span className="icon-Lapis">
              <img className='iconeLapis' src="./img/iconLapis.png" alt="Edit Icon" />
            </span>
          </div>

          <label className='labelInpts'>Email</label>
          <input className='inpts' type="text" />

          <label className='labelInpts'>Senha</label>
          <input className='inpts' type="password" />

          <div className='botoes'>
            <button className='botao'>EXCLUIR CONTA</button>
            <button className='botao'>DESCONECTAR</button>
          </div>
        </div>

        <div className="divLinha"></div>

        <div className='divDois'>

          <div className='divCheckBox'>
          <label className='labelInpts'>Possui alguma deficiência?</label>
          <label><input className='checkbox' type="checkbox" /> Sim </label>
          <label><input className='checkbox' type="checkbox"/> Não</label>
          </div>

          <label className='labelInpts'>Deficiência</label>
          <input className='inpts' type="text" />
          <label className='labelInpts'>Detalhes</label>
          <input className='inpts' type="text" />
        </div>



      </div>
    </div>
  );
}

export default Corpo;