// Create map centered on Calgary
var map = L.map('map').setView([51.0447, -114.0719], 12);

// Add basemap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Store drawn features
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// Draw control (ONLY polyline allowed)
var drawControl = new L.Control.Draw({
  draw: {
    polyline: true,
    polygon: false,
    rectangle: false,
    circle: false,
    marker: false,
    circlemarker: false
  },
  edit: {
    featureGroup: drawnItems,
    edit: false,
    remove: false
  }
});

map.addControl(drawControl);

// When user draws a line
map.on(L.Draw.Event.CREATED, function (event) {
  var layer = event.layer;

  drawnItems.clearLayers(); // only keep ONE line
  drawnItems.addLayer(layer);

  console.log("Polyline drawn:", layer.getLatLngs());
});