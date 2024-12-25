var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pendidikan_1_betul_1 = new ol.format.GeoJSON();
var features_Pendidikan_1_betul_1 = format_Pendidikan_1_betul_1.readFeatures(json_Pendidikan_1_betul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_1_betul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_1_betul_1.addFeatures(features_Pendidikan_1_betul_1);
var lyr_Pendidikan_1_betul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_1_betul_1, 
                style: style_Pendidikan_1_betul_1,
                popuplayertitle: 'Pendidikan_1_betul',
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_1_betul_1.png" /> Pendidikan_1_betul'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pendidikan_1_betul_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pendidikan_1_betul_1];
lyr_Pendidikan_1_betul_1.set('fieldAliases', {'No': 'No', 'Nama_Sekol': 'Nama_Sekol', 'Alamat': 'Alamat', 'X': 'X', 'Y': 'Y', 'Jenjang_Se': 'Jenjang_Se', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Pendidikan_1_betul_1.set('fieldImages', {'No': '', 'Nama_Sekol': '', 'Alamat': '', 'X': '', 'Y': '', 'Jenjang_Se': '', 'Easting': '', 'Northing': '', });
lyr_Pendidikan_1_betul_1.set('fieldLabels', {'No': 'inline label - visible with data', 'Nama_Sekol': 'inline label - visible with data', 'Alamat': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Jenjang_Se': 'inline label - visible with data', 'Easting': 'inline label - visible with data', 'Northing': 'inline label - visible with data', });
lyr_Pendidikan_1_betul_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});