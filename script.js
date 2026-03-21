var drawnLayer = null;
var simplifiedLayer = null;
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

map.on(L.Draw.Event.CREATED, function (event) {
  var layer = event.layer;

  drawnItems.clearLayers();
  drawnItems.addLayer(layer);

  drawnLayer = layer; // store original line
});

function simplifyLine() {
  if (!drawnLayer) {
    alert("Draw a line first!");
    return;
  }

  // Convert Leaflet line to GeoJSON
  var geojson = drawnLayer.toGeoJSON();

  // Simplify using Turf
  var simplified = turf.simplify(geojson, {
    tolerance: 0.01,
    highQuality: false
  });

  // Remove old simplified line
  if (simplifiedLayer) {
    map.removeLayer(simplifiedLayer);
  }

  // Add simplified line (RED)
  simplifiedLayer = L.geoJSON(simplified, {
    style: {
      color: "red",
      weight: 4
    }
  }).addTo(map);
}