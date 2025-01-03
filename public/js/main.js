    // Inisialisasi View Map
    var mapview = new ol.View({
        center: ol.proj.fromLonLat([97.136457, 5.178044]),
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

    // Layer Polygon dari GeoServer untuk Keramba
    var kerambaLayer = new ol.layer.Tile({
        title: 'Keramba',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:keramba', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(kerambaLayer);

    // Layer Polygon dari GeoServer untuk Balai Pengajian
    var balaiPengajianLayer = new ol.layer.Tile({
        title: 'Balai Pengajian',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:balai_pengajian', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(balaiPengajianLayer);

    // Layer Polygon dari GeoServer untuk Rumah
    var rumahLayer = new ol.layer.Tile({
        title: 'Rumah',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:rumah', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(rumahLayer);

    // Layer Polygon dari GeoServer untuk Bengkel
    var bengkelLayer = new ol.layer.Tile({
        title: 'Bengkel',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:bengkel', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(bengkelLayer);

    // Layer Polygon dari GeoServer untuk Doorsmeer
    var doorsmeerLayer = new ol.layer.Tile({
        title: 'Doorsmeer',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:doorsmeer', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(doorsmeerLayer);

    // Layer Polygon dari GeoServer untuk Galon air
    var galonairLayer = new ol.layer.Tile({
        title: 'Galon Air',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:galon air', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(galonairLayer);

    // Layer Polygon dari GeoServer untuk Gudang
    var gudangLayer = new ol.layer.Tile({
        title: 'Gudang',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:gudang', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(gudangLayer);

    // Layer Polygon dari GeoServer untuk Hotel
    var hotelLayer = new ol.layer.Tile({
        title: 'Hotel',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:hotel', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(hotelLayer);

    // Layer Polygon dari GeoServer untuk Kantor
    var kantorLayer = new ol.layer.Tile({
        title: 'Kantor',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:kantor', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(kantorLayer);

    // Layer Polygon dari GeoServer untuk Kedai
    var kedaiLayer = new ol.layer.Tile({
        title: 'Kedai',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:kedai', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(kedaiLayer);

    // Layer Polygon dari GeoServer untuk Kedai Kopi
    var kedaikopiLayer = new ol.layer.Tile({
        title: 'Kedai Kopi',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:kedai_kopi', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(kedaikopiLayer);

    // Layer Polygon dari GeoServer untuk Kolam
    var kolamLayer = new ol.layer.Tile({
        title: 'Kolam',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:kolam', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(kolamLayer);

    // Layer Polygon dari GeoServer untuk Kuburan
    var kuburanLayer = new ol.layer.Tile({
        title: 'Kuburan',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:kuburan', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(kuburanLayer);

    // Layer Polygon dari GeoServer untuk Masjid
    var masjidLayer = new ol.layer.Tile({
        title: 'Masjid',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:masjid', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(masjidLayer);

    // Layer Polygon dari GeoServer untuk Ruko
    var rukoLayer = new ol.layer.Tile({
        title: 'Ruko',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:ruko', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(rukoLayer);

    // Layer Polygon dari GeoServer untuk Sekolah
    var sekolahLayer = new ol.layer.Tile({
        title: 'Sekolah',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:sekolah', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(sekolahLayer);

    // Layer Polygon dari GeoServer untuk Rawa
    var rawaLayer = new ol.layer.Tile({
        title: 'Rawa',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:rawa', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(rawaLayer);

    // Layer Polygon dari GeoServer untuk Tambak
    var tambakLayer = new ol.layer.Tile({
        title: 'Tambak',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:tambak', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(tambakLayer);

    // Layer Polygon dari GeoServer untuk Tanah Kosong
    var tanahkosongLayer = new ol.layer.Tile({
        title: 'Tanah Kosong',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:tanah_kosong', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(tanahkosongLayer);

    // Layer Polygon dari GeoServer untuk Terminal
    var terminalLayer = new ol.layer.Tile({
        title: 'Terminal',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:terninal', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(terminalLayer);

    // Layer Polygon dari GeoServer untuk Stadion
    var stadionLayer = new ol.layer.Tile({
        title: 'Stadion',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:stadion', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(stadionLayer);

    // Layer Polygon dari GeoServer untuk Tower Sinyal
    var towersinyalLayer = new ol.layer.Tile({
        title: 'Tower Sinyal',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:tower sinyal', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(towersinyalLayer);

    // Layer Polyline dari GeoServer untuk Jalan
    var jalanLayer = new ol.layer.Tile({
        title: 'Tower Sinyal',
        source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/gismongeudong/wms',
            params: { 'LAYERS': 'gismongeudong:tower sinyal', 'TILED': true },
            serverType: 'geoserver',
        }),
    });

    map.addLayer(jalanLayer);

    // Handle Klik Popup untuk Data
    map.on('singleclick', function (evt) {
        content.innerHTML = '';
        var resolution = map.getView().getResolution();
        var kerambaUrl = kerambaLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var balaiUrl = balaiPengajianLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var rumahUrl = rumahLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var bengkelUrl = bengkelLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var doorsmeerUrl = doorsmeerLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var galonairUrl = galonairLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var gudangUrl = gudangLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var hotelUrl = hotelLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var kantorUrl = kantorLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var kedaiUrl = kedaiLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var kedaikopiUrl = kedaikopiLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var kolamUrl = kolamLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var kuburanUrl = kuburanLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var masjidUrl = masjidLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var rukoUrl = rukoLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var sekolahUrl = sekolahLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var rawaUrl = rawaLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var tambakUrl = tambakLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var tanahkosongUrl = tanahkosongLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var terminalUrl = terminalLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var stadionUrl = stadionLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var towersinyalUrl = towersinyalLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );
        var jalanUrl = jalanLayer.getSource().getFeatureInfoUrl(
            evt.coordinate,
            resolution,
            'EPSG:3857',
            { INFO_FORMAT: 'application/json' }
        );

        if (kerambaUrl) {
            $.getJSON(kerambaUrl, function (data) {
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
        }

        if (balaiUrl) {
            $.getJSON(balaiUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlpn || 'N/A'}</p>
                        <p>Status: ${props.status || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (rumahUrl) {
            $.getJSON(rumahUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Informasi Rumah</h3>
                        <p>No Rumah: ${props.no_rmh || 'N/A'}</p>
                        <p>Status Kepala Keluarga: ${props.status_kep || 'N/A'}</p>
                        <p>Jenis Bangunan: ${props.jenis_bgn || 'N/A'}</p>
                        <p>Jenis Lantai: ${props.jenis_lnt || 'N/A'}</p>
                        <p>Pendidikan Tertinggi: ${props.pend_ter || 'N/A'}</p>
                        <p>Pekerjaan: ${props.pekerjaan || 'N/A'}</p>
                        <p>No Telp: ${props.no_telp || 'N/A'}</p>
                        <p>No KTP: ${props.no_ktp || 'N/A'}</p>
                        <p>Jumlah Laki-laki: ${props.jml_laki || 'N/A'}</p>
                        <p>Jumlah Perempuan: ${props.jml_peri || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                        <p>Nama Kepala Keluarga: ${props.nama_kk || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }
        
        if (bengkelUrl) {
            $.getJSON(bengkelUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlpn || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (doorsmeerUrl) {
            $.getJSON(doorsmeerUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (galonairUrl) {
            $.getJSON(galonairUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (gudangUrl) {
            $.getJSON(gudangUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (hotelUrl) {
            $.getJSON(hotelUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (kantorUrl) {
            $.getJSON(kantorUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (kedaiUrl) {
            $.getJSON(kedaiUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (kedaikopiUrl) {
            $.getJSON(kedaikopiUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (kolamUrl) {
            $.getJSON(kolamUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (kuburanUrl) {
            $.getJSON(kuburanUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (masjidUrl) {
            $.getJSON(masjidUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (rukoUrl) {
            $.getJSON(rukoUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (sekolahUrl) {
            $.getJSON(sekolahUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (rawaUrl) {
            $.getJSON(rawaUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (tambakUrl) {
            $.getJSON(tambakUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (tanahkosongUrl) {
            $.getJSON(tanahkosongUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (terminalUrl) {
            $.getJSON(terminalUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (stadionUrl) {
            $.getJSON(stadionUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (towersinyalUrl) {
            $.getJSON(towersinyalUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }

        if (jalanUrl) {
            $.getJSON(jalanUrl, function (data) {
                if (data.features.length > 0) {
                    var props = data.features[0].properties;
                    var popupContent = `
                        <h3>Nama Pemilik: ${props.nm_pmlk || 'N/A'}</h3>
                        <p>No Telp: ${props.no_tlp || 'N/A'}</p>
                        <p>Status Usaha: ${props.stat_usaha || 'N/A'}</p>
                        <p>Luas Bangunan: ${props.luas_bgn || 'N/A'}</p>
                    `;
                    content.innerHTML = popupContent;
                    popup.setPosition(evt.coordinate);
                }
            });
        }
    });
