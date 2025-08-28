mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNkZXNpcXVlaXJhc2FudG9zIiwiYSI6ImNtNnBoczFtdTFmajYya3B4azBwNnVmN20ifQ.93k85FgVgMnWaU6UFUZQBg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/lucasdesiqueirasantos/cm713es4v003d01s8fjo30j49',
  center: [-53.43, -9.81],
  zoom: 2.61
});

const heatmapLayer = {
  id: 'heatmap',
  type: 'heatmap',
  source: 'composite',
  'source-layer': 'addresses-7td9su',
  layout: {},
  paint: {
    'heatmap-radius': 10,
    'heatmap-color': [
      'interpolate', ['linear'], ['heatmap-density'],
      0, 'rgba(0, 0, 255, 0)',
      0.1, 'royalblue',
      0.3, 'cyan',
      0.5, 'lime',
      0.7, 'yellow',
      1, 'red'
    ],
    'heatmap-intensity': 1,
    'heatmap-opacity': 0.7
  }
};

const pontosLayer = {
  id: 'points',
  type: 'circle',
  source: 'composite',
  'source-layer': 'addresses-7td9su',
  layout: {},
  paint: {
    'circle-color': 'rgb(0, 204, 92)',
    'circle-stroke-width': 0.5,
    'circle-radius': 3,
    'circle-blur': 0,
    'circle-opacity': 1,
    'circle-stroke-opacity': 0.38
  }
};

map.on('load', () => {
  map.addLayer(pontosLayer);

  const toggleHeatmap = () => {
    if (map.getLayer('points')) map.removeLayer('points');
    if (!map.getLayer('heatmap')) map.addLayer(heatmapLayer);
    document.getElementById('btnHeatmap').classList.add('active');
    document.getElementById('btnPontos').classList.remove('active');
  };

  const togglePontos = () => {
    if (map.getLayer('heatmap')) map.removeLayer('heatmap');
    if (!map.getLayer('points')) map.addLayer(pontosLayer);
    document.getElementById('btnPontos').classList.add('active');
    document.getElementById('btnHeatmap').classList.remove('active');
  };

  document.getElementById('btnHeatmap').addEventListener('click', toggleHeatmap);
  document.getElementById('btnPontos').addEventListener('click', togglePontos);
});
