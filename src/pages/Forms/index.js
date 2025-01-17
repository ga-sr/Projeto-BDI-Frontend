import React from 'react';

import './styles.scss';

export function Forms() {
  return (
    <div className="container">
    <div id="header">
      <h2>Cadastro no sistema Covid em Foco</h2>
      <p>Preencha o formulário e contribua com a nossa pesquisa :D</p>
    </div>
    <div className="forms">
      <form onSubmit={()=> ("a")}>
        <span>Nome</span>
        <input type="text" />
        <span>CPF</span>
        <input type="text" />
        <span>Data de nascimento</span>
        <input type="date" />
        <span>Período de infecção</span>
        <div className="infectionPeriod">
          <span>De</span>
          <input type="date" />
          <span>à</span>
          <input type="date" />
        </div>
        <span>CEP</span>
        <input type="text" />
        <div className="checkboxClass">
          <input type="checkbox" />
          <span>Compreendo e aceito com os </span><a href="/forms">Termos e Condições do site</a>
        </div>
        <button>Cadastrar</button>
      </form>
    </div>
    </div>
  );
}