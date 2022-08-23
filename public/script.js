function formatarValor(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  }
  
  function adicionarDespesa() {
    const descricaoDespesa = window.prompt("Qual a descricao de sua despesa?");
    const valorDespesa = window.prompt("Qual o valor de sua despesa?");
  
    if (valorDespesa.indexOf(",") > 0) {
      alert(
        "Você deve digitar números com o símbolo decimal ponto, e não vírgula"
      );
      return;
    }
  
    if (isNaN(valorDespesa)) {
      alert("Você deve digitar um número no campo valor!");
      return;
    }
  
    const valor = Number(valorDespesa);
  
    const despesa = {
      descricao: descricaoDespesa,
      valor: valor,
      categoria: "Despesa"
    };
  
    //financas.transacoes.push(despesa);
    //financas.saldo = financas.saldo - valor;
  
    //setSaldo();
    //adicionaTransacoes();
    enviaDados(despesa);
    getTransacoes();
  }
  
  function adicionarReceita() {
    const descricaoReceita = window.prompt("Qual a descricao de sua receita?");
    const valorReceita = window.prompt("Qual o valor de sua receita?");
  
    if (valorReceita.indexOf(",") > 0) {
      alert(
        "Você deve digitar números com o símbolo decimal ponto, e não vírgula"
      );
      return;
    }
  
    if (isNaN(valorReceita)) {
      alert("Você deve digitar um número no campo valor!");
      return;
    }
  
    const valor = Number(valorReceita);
  
    const receita = {
      descricao: descricaoReceita,
      valor: valor,
      categoria: "Receita"
    };
    enviaDados(receita);
    getTransacoes();
  }
  
  function setSaldo(saldo) {
    document.getElementById("saldo").innerHTML = `Saldo: R$ ${saldo
    }`;
  }
  
  setSaldo();
  
  function adicionaTransacoes(transacoes) {
    let tabela = '';
  
    transacoes.forEach(transacao => {
      let colunaDescricao = `<td class="coluna-descricao">${transacao.descricao}</td>`;
      let colunaCategoria = ` <td class="coluna-categoria">${transacao.categoria}</td>`;
      let colunaValor = `<td class="coluna-valor">${transacao.valor}</td>`;
      let linha = `<tr>${colunaDescricao}${colunaCategoria}${colunaValor}</tr>`
      tabela += linha
    });
    document.getElementById('lista-transacoes-conteudo').innerHTML = tabela;
  }
  
  // Aqui estamos criando os eventos de clique nos botões
  document
    .getElementById("botao-despesa")
    .addEventListener("click", adicionarDespesa);
  document
    .getElementById("botao-receita")
    .addEventListener("click", adicionarReceita);
  
  async function getTransacoes() {
    const url = 'https://run.mocky.io/v3/ba2007f7-04ea-465b-985e-b16c11e8061d';
  
    const resposta = await fetch(url);
    const financas = await resposta.json();
    
    setSaldo(financas.saldo);
    adicionaTransacoes(financas.transacoes);
    
    
  }
  async function enviaDados(transacao){
    const url = 'https://run.mocky.io/v3/c50981e7-1c9b-471c-9128-3adf362cf36f'
    const req = await fetch(url, { method:'POST', body: JSON.stringfy(transacao)})
  }
  
  getTransacoes()