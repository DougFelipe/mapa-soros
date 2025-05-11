async function carregarMapa(tipo) {
  const container = document.getElementById('map-frame-container');
  let caminho = '';

  if (!container) {
    console.error('Container #map-frame-container não encontrado!');
    return;
  }

  if (tipo === 'pontos') {
    caminho = './src/components/MapaPontos.html';
  } else if (tipo === 'heatmap') {
    caminho = './src/components/MapaHeatmap.html';
  }

  try {
    const res = await fetch(caminho);
    const html = await res.text();
    container.innerHTML = html;

    // Atualiza botão ativo
    document.getElementById('btn-pontos')?.classList.remove('active');
    document.getElementById('btn-heatmap')?.classList.remove('active');
    document.getElementById(`btn-${tipo}`)?.classList.add('active');

  } catch (err) {
    console.error(`Erro ao carregar o mapa "${tipo}":`, err);
  }
}

// Lógica de troca pelos botões
document.addEventListener('click', (e) => {
  if (e.target.id === 'btn-pontos') carregarMapa('pontos');
  if (e.target.id === 'btn-heatmap') carregarMapa('heatmap');
});

// Carrega o padrão ao abrir
window.addEventListener('load', () => {
  carregarMapa('pontos');
});
