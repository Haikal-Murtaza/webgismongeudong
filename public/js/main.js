// Inisialisasi View Map
var mapview = new ol.View({
    center: ol.proj.fromLonLat([97.136457, 5.178044]), // Koordinat Mongeudong
    zoom: 15,
});

// Inisialisasi Peta
var map = new ol.Map({
    target: 'map',
    view: mapview,
});

// Layer Dasar
var osmLayer = new ol.layer.Tile({
    title: 'Open Street Map',
    source: new ol.source.OSM(),
    visible: true,
});

var googleSatLayer = new ol.layer.Tile({
    title: 'Google Satellite',
    visible: false,
    source: new ol.source.XYZ({
        url: 'http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        maxZoom: 20,
    }),
});

// Group Layer Dasar
var baseGroup = new ol.layer.Group({
    title: 'Base Maps',
    layers: [osmLayer, googleSatLayer],
});

map.addLayer(baseGroup);

// Layer Polygon dari GeoServer
var kerambaLayer = new ol.layer.Tile({
    title: 'Keramba',
    source: new ol.source.TileWMS({
        url: 'http://localhost:8080/geoserver/gismongeudong/wms',
        params: { 'LAYERS': 'gis:keramba', 'TILED': true },
        serverType: 'geoserver',
    }),
});

map.addLayer(kerambaLayer);

// LayerSwitcher
var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    groupSelectStyle: 'children',
});
map.addControl(layerSwitcher);

// Popup
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: { duration: 250 },
});

map.addOverlay(popup);

closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};

// Handle Klik Popup
map.on('singleclick', function (evt) {
    content.innerHTML = '';
    var resolution = map.getView().getResolution();
    var url = kerambaLayer.getSource().getFeatureInfoUrl(
        evt.coordinate,
        resolution,
        'EPSG:3857',
        { INFO_FORMAT: 'application/json' }
    );

    if (url) {
        $.getJSON(url, function (data) {
            if (data.features.length > 0) {
                var props = data.features[0].properties;
                var popupContent = `
                    <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                    <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                    <p>Jenis Ikan: ${props.jenis_ikn || 'N/A'}</p>
                    <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                    <p>Luas: ${props.luas || 'N/A'}</p>
                `;
                content.innerHTML = popupContent;
                popup.setPosition(evt.coordinate);
            }
        });
    } else {
        popup.setPosition(undefined);
    }
});
