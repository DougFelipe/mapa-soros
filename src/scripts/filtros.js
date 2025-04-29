// Filtro simples baseado no texto digitado
document.addEventListener('input', function (e) {
    if (e.target.id === 'buscaMunicipio') {
      const termo = e.target.value.toLowerCase();
      const linhas = document.querySelectorAll('#tabelaDados tr');
  
      linhas.forEach(linha => {
        const municipio = linha.querySelector('td:nth-child(4)');
        if (municipio && municipio.textContent.toLowerCase().includes(termo)) {
          linha.style.display = '';
        } else {
          linha.style.display = 'none';
        }
      });
    }
  });
  