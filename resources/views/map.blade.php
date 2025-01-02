<!DOCTYPE html>
<html>
<head>
    <title>Peta Interaktif dengan Beberapa Layer WMS</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        #map {
            height: 600px;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script>
        // Inisialisasi peta
        var map = L.map('map').setView([4.25567, 98.06242], 15);

        // Menambahkan basemap OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Array layer yang akan ditambahkan
        var layers = [
            // { name: 'batas_gampong', label: 'Batas Gampong' },
            { name: 'keramba', label: 'Keramba' },
            // { name: 'gang', label: 'Layer Rumah' },
            // { name: 'gubuk', label: 'Layer Sekolah' },
            // { name: 'gudang', label: 'Layer Masjid' },
            // { name: 'jalan', label: 'Layer Kios' },
            // { name: 'kantor', label: 'Layer Kuburan' },
            // { name: 'kesehatan', label: 'Layer Rumah' },
            // { name: 'kilang_pertamina', label: 'Layer Sekolah' },
            // { name: 'kios', label: 'Layer Masjid' },
            // { name: 'kolam', label: 'Layer Kios' },
            // { name: 'kuburan', label: 'Layer Kuburan' },
            // { name: 'lahan kosong', label: 'Batas Gampong' },
            // { name: 'lapangan', label: 'Batas Gampong' },
            // { name: 'lorong', label: 'Layer Rumah' },
            // { name: 'lueng', label: 'Layer Sekolah' },
            // { name: 'masjid', label: 'Layer Masjid' },
            // { name: 'mushala', label: 'Layer Kios' },
            // { name: 'parit', label: 'Layer Kuburan' },
            // { name: 'penampungan kerikil aspal', label: 'Layer Rumah' },
            // { name: 'rumah', label: 'Layer Sekolah' },
            // { name: 'sawit', label: 'Layer Masjid' },
            // { name: 'sekolah', label: 'Layer Kios' },
            // { name: 'sekolah tinggi', label: 'Layer Kuburan' },
            // { name: 'spbu', label: 'Batas Gampong' },
            // { name: 'sungai', label: 'Layer Sekolah' },
            // { name: 'tambang minyak', label: 'Layer Masjid' },
        ];

        // Object untuk menyimpan layer WMS
        var overlayMaps = {};

        // Loop untuk menambahkan layer WMS secara dinamis
        layers.forEach(function(layer) {
            overlayMaps[layer.label] = L.tileLayer.wms('http://localhost:8080/geoserver/gismongeudong/wms', {
                layers: 'gismongeudong:' + layer.name,
                format: 'image/png',
                transparent: true,
                attribution: layer.label
            }).addTo(map);
        });

        // Kontrol layer untuk memilih layer yang ingin ditampilkan
        var baseMaps = {
            "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            })
        };

        // Menambahkan kontrol layer
        L.control.layers(baseMaps, overlayMaps).addTo(map);
    </script>
</body>
</html>