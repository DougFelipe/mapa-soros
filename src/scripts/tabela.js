// Exemplo de carregamento de dados (pode ser substituído por chamada de API)
const dadosExemplo = [
    { nome: "Hospital A", tipo: "Hospital", estado: "SP", municipio: "São Paulo", disponibilidade: "Sim" },
    { nome: "Posto Saúde B", tipo: "Posto de Saúde", estado: "RJ", municipio: "Rio de Janeiro", disponibilidade: "Sim" }
  ];
  
  function carregarTabela(dados) {
    const tabela = document.getElementById('tabelaDados');
    tabela.innerHTML = '';
  
    dados.forEach(item => {
      const linha = `<tr>
        <td>${item.nome}</td>
        <td>${item.tipo}</td>
        <td>${item.estado}</td>
        <td>${item.municipio}</td>
        <td>${item.disponibilidade}</td>
      </tr>`;
      tabela.innerHTML += linha;
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => carregarTabela(dadosExemplo));
  