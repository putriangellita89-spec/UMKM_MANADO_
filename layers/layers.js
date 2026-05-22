var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaManado_1 = new ol.format.GeoJSON();
var features_KotaManado_1 = format_KotaManado_1.readFeatures(json_KotaManado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaManado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaManado_1.addFeatures(features_KotaManado_1);
var lyr_KotaManado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaManado_1, 
                style: style_KotaManado_1,
                popuplayertitle: 'Kota Manado',
                interactive: false,
                title: '<img src="styles/legend/KotaManado_1.png" /> Kota Manado'
            });
var format_Kelurahan_2 = new ol.format.GeoJSON();
var features_Kelurahan_2 = format_Kelurahan_2.readFeatures(json_Kelurahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_2.addFeatures(features_Kelurahan_2);
var lyr_Kelurahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_2, 
                style: style_Kelurahan_2,
                popuplayertitle: 'Kelurahan',
                interactive: false,
                title: '<img src="styles/legend/Kelurahan_2.png" /> Kelurahan'
            });
var format_Kecamatan_3 = new ol.format.GeoJSON();
var features_Kecamatan_3 = format_Kecamatan_3.readFeatures(json_Kecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_3.addFeatures(features_Kecamatan_3);
var lyr_Kecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_3, 
                style: style_Kecamatan_3,
                popuplayertitle: 'Kecamatan',
                interactive: false,
    title: 'Kecamatan<br />\
    <img src="styles/legend/Kecamatan_3_0.png" /> Bunaken<br />\
    <img src="styles/legend/Kecamatan_3_1.png" /> Bunaken Kepulauan<br />\
    <img src="styles/legend/Kecamatan_3_2.png" /> Malalayang<br />\
    <img src="styles/legend/Kecamatan_3_3.png" /> Mapanget<br />\
    <img src="styles/legend/Kecamatan_3_4.png" /> Paal Dua<br />\
    <img src="styles/legend/Kecamatan_3_5.png" /> Sario<br />\
    <img src="styles/legend/Kecamatan_3_6.png" /> Singkil<br />\
    <img src="styles/legend/Kecamatan_3_7.png" /> Tikala<br />\
    <img src="styles/legend/Kecamatan_3_8.png" /> Tuminiting<br />\
    <img src="styles/legend/Kecamatan_3_9.png" /> Wanea<br />\
    <img src="styles/legend/Kecamatan_3_10.png" /> Wenang<br />\
    <img src="styles/legend/Kecamatan_3_11.png" /> <br />' });
var format_Titik_4 = new ol.format.GeoJSON();
var features_Titik_4 = format_Titik_4.readFeatures(json_Titik_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_4.addFeatures(features_Titik_4);
var lyr_Titik_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_4, 
                style: style_Titik_4,
                popuplayertitle: 'Titik',
                interactive: false,
    title: 'Titik<br />\
    <img src="styles/legend/Titik_4_0.png" /> Bengkel<br />\
    <img src="styles/legend/Titik_4_1.png" /> Kios<br />\
    <img src="styles/legend/Titik_4_2.png" /> Warung<br />\
    <img src="styles/legend/Titik_4_3.png" /> <br />' });
var format_Bangunan_5 = new ol.format.GeoJSON();
var features_Bangunan_5 = format_Bangunan_5.readFeatures(json_Bangunan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_5.addFeatures(features_Bangunan_5);
var lyr_Bangunan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_5, 
                style: style_Bangunan_5,
                popuplayertitle: 'Bangunan',
                interactive: false,
                title: '<img src="styles/legend/Bangunan_5.png" /> Bangunan'
            });
var format_Fasilitas_Ekonomi_6 = new ol.format.GeoJSON();
var features_Fasilitas_Ekonomi_6 = format_Fasilitas_Ekonomi_6.readFeatures(json_Fasilitas_Ekonomi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Ekonomi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Ekonomi_6.addFeatures(features_Fasilitas_Ekonomi_6);
var lyr_Fasilitas_Ekonomi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_Ekonomi_6, 
                style: style_Fasilitas_Ekonomi_6,
                popuplayertitle: 'Fasilitas_Ekonomi',
                interactive: false,
                title: '<img src="styles/legend/Fasilitas_Ekonomi_6.png" /> Fasilitas_Ekonomi'
            });
var format_Jalan_Utama_7 = new ol.format.GeoJSON();
var features_Jalan_Utama_7 = format_Jalan_Utama_7.readFeatures(json_Jalan_Utama_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Utama_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Utama_7.addFeatures(features_Jalan_Utama_7);
var lyr_Jalan_Utama_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Utama_7, 
                style: style_Jalan_Utama_7,
                popuplayertitle: 'Jalan_Utama',
                interactive: false,
                title: '<img src="styles/legend/Jalan_Utama_7.png" /> Jalan_Utama'
            });
var format_Info_8 = new ol.format.GeoJSON();
var features_Info_8 = format_Info_8.readFeatures(json_Info_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Info_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Info_8.addFeatures(features_Info_8);
var lyr_Info_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Info_8, 
                style: style_Info_8,
                popuplayertitle: 'Info',
                interactive: true,
                title: '<img src="styles/legend/Info_8.png" /> Info'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KotaManado_1.setVisible(true);lyr_Kelurahan_2.setVisible(true);lyr_Kecamatan_3.setVisible(true);lyr_Titik_4.setVisible(true);lyr_Bangunan_5.setVisible(true);lyr_Fasilitas_Ekonomi_6.setVisible(true);lyr_Jalan_Utama_7.setVisible(true);lyr_Info_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KotaManado_1,lyr_Kelurahan_2,lyr_Kecamatan_3,lyr_Titik_4,lyr_Bangunan_5,lyr_Fasilitas_Ekonomi_6,lyr_Jalan_Utama_7,lyr_Info_8];
lyr_KotaManado_1.set('fieldAliases', {'kd_propins': 'kd_propins', 'kd_dati2': 'kd_dati2', 'nm_dati2': 'nm_dati2', });
lyr_Kelurahan_2.set('fieldAliases', {'kd_propins': 'kd_propins', 'kd_dati2': 'kd_dati2', 'kd_kecamat': 'kd_kecamat', 'kd_kelurah': 'kd_kelurah', 'nm_kelurah': 'nm_kelurah', });
lyr_Kecamatan_3.set('fieldAliases', {'kd_kecamat': 'kd_kecamat', 'nm_kecamat': 'nm_kecamat', });
lyr_Titik_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', '@id': '@id', 'name': 'name', 'jenisusaha': 'jenisusaha', });
lyr_Bangunan_5.set('fieldAliases', {'id': 'id', '@id': '@id', 'access': 'access', 'access_roo': 'access_roo', 'addr_city': 'addr_city', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_postc': 'addr_postc', 'addr_provi': 'addr_provi', 'addr_stree': 'addr_stree', 'admin_leve': 'admin_leve', 'air_condit': 'air_condit', 'alt_name': 'alt_name', 'amenity': 'amenity', 'area': 'area', 'baby_feedi': 'baby_feedi', 'bicycle': 'bicycle', 'branch': 'branch', 'brand': 'brand', 'brand_wiki': 'brand_wiki', 'bridge': 'bridge', 'bridge_nam': 'bridge_nam', 'building': 'building', 'building_l': 'building_l', 'building_r': 'building_r', 'building_s': 'building_s', 'building_w': 'building_w', 'capacity': 'capacity', 'foot': 'foot', 'government': 'government', 'healthcare': 'healthcare', 'height': 'height', 'highway': 'highway', 'horse': 'horse', 'junction': 'junction', 'lane_marki': 'lane_marki', 'lanes': 'lanes', 'layer': 'layer', 'leisure': 'leisure', 'maxspeed': 'maxspeed', 'name': 'name', 'name_en': 'name_en', 'note': 'note', 'office': 'office', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'operator': 'operator', 'operator_t': 'operator_t', 'phone': 'phone', 'religion': 'religion', 'school_typ': 'school_typ', 'shop': 'shop', 'short_name': 'short_name', 'smoking': 'smoking', 'source': 'source', 'source_ref': 'source_ref', 'surface': 'surface', 'tourism': 'tourism', 'tunnel': 'tunnel', 'website': 'website', 'wheelchair': 'wheelchair', 'width': 'width', 'wikidata': 'wikidata', });
lyr_Fasilitas_Ekonomi_6.set('fieldAliases', {'id': 'id', '@id': '@id', 'access': 'access', 'access_roo': 'access_roo', 'addr_city': 'addr_city', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_postc': 'addr_postc', 'addr_provi': 'addr_provi', 'addr_stree': 'addr_stree', 'admin_leve': 'admin_leve', 'air_condit': 'air_condit', 'alt_name': 'alt_name', 'amenity': 'amenity', 'area': 'area', 'baby_feedi': 'baby_feedi', 'bicycle': 'bicycle', 'branch': 'branch', 'brand': 'brand', 'brand_wiki': 'brand_wiki', 'bridge': 'bridge', 'bridge_nam': 'bridge_nam', 'building': 'building', 'building_l': 'building_l', 'building_r': 'building_r', 'building_s': 'building_s', 'building_w': 'building_w', 'capacity': 'capacity', 'foot': 'foot', 'government': 'government', 'healthcare': 'healthcare', 'height': 'height', 'highway': 'highway', 'horse': 'horse', 'junction': 'junction', 'lane_marki': 'lane_marki', 'lanes': 'lanes', 'layer': 'layer', 'leisure': 'leisure', 'maxspeed': 'maxspeed', 'name': 'name', 'name_en': 'name_en', 'note': 'note', 'office': 'office', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'operator': 'operator', 'operator_t': 'operator_t', 'phone': 'phone', 'religion': 'religion', 'school_typ': 'school_typ', 'shop': 'shop', 'short_name': 'short_name', 'smoking': 'smoking', 'source': 'source', 'source_ref': 'source_ref', 'surface': 'surface', 'tourism': 'tourism', 'tunnel': 'tunnel', 'website': 'website', 'wheelchair': 'wheelchair', 'width': 'width', 'wikidata': 'wikidata', });
lyr_Jalan_Utama_7.set('fieldAliases', {'id': 'id', '@id': '@id', 'access': 'access', 'access_roo': 'access_roo', 'addr_city': 'addr_city', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_postc': 'addr_postc', 'addr_provi': 'addr_provi', 'addr_stree': 'addr_stree', 'admin_leve': 'admin_leve', 'air_condit': 'air_condit', 'alt_name': 'alt_name', 'amenity': 'amenity', 'area': 'area', 'baby_feedi': 'baby_feedi', 'bicycle': 'bicycle', 'branch': 'branch', 'brand': 'brand', 'brand_wiki': 'brand_wiki', 'bridge': 'bridge', 'bridge_nam': 'bridge_nam', 'building': 'building', 'building_l': 'building_l', 'building_r': 'building_r', 'building_s': 'building_s', 'building_w': 'building_w', 'capacity': 'capacity', 'foot': 'foot', 'government': 'government', 'healthcare': 'healthcare', 'height': 'height', 'highway': 'highway', 'horse': 'horse', 'junction': 'junction', 'lane_marki': 'lane_marki', 'lanes': 'lanes', 'layer': 'layer', 'leisure': 'leisure', 'maxspeed': 'maxspeed', 'name': 'name', 'name_en': 'name_en', 'note': 'note', 'office': 'office', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'operator': 'operator', 'operator_t': 'operator_t', 'phone': 'phone', 'religion': 'religion', 'school_typ': 'school_typ', 'shop': 'shop', 'short_name': 'short_name', 'smoking': 'smoking', 'source': 'source', 'source_ref': 'source_ref', 'surface': 'surface', 'tourism': 'tourism', 'tunnel': 'tunnel', 'website': 'website', 'wheelchair': 'wheelchair', 'width': 'width', 'wikidata': 'wikidata', });
lyr_Info_8.set('fieldAliases', {'kd_kecamat': 'kd_kecamat', 'nm_kecamat': 'Nama Kecamatan', 'fid_count': 'fid_count', 'id_count': 'id_count', '@id_count': '@id_count', 'name_count': 'name_count', 'jenisusaha_count': 'Jumlah UMKM', 'jumlah_umkm': 'jumlah_umkm', 'kd_propins_count': 'kd_propins_count', 'kd_dati2_count': 'kd_dati2_count', 'kd_kecamat_count': 'kd_kecamat_count', 'kd_kelurah_count': 'kd_kelurah_count', 'nm_kelurah_count': 'Jumlah Kelurahan', });
lyr_KotaManado_1.set('fieldImages', {'kd_propins': 'TextEdit', 'kd_dati2': 'TextEdit', 'nm_dati2': 'TextEdit', });
lyr_Kelurahan_2.set('fieldImages', {'kd_propins': 'TextEdit', 'kd_dati2': 'TextEdit', 'kd_kecamat': 'TextEdit', 'kd_kelurah': 'TextEdit', 'nm_kelurah': 'TextEdit', });
lyr_Kecamatan_3.set('fieldImages', {'kd_kecamat': 'TextEdit', 'nm_kecamat': 'TextEdit', });
lyr_Titik_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', '@id': 'TextEdit', 'name': 'TextEdit', 'jenisusaha': 'TextEdit', });
lyr_Bangunan_5.set('fieldImages', {'id': '', '@id': '', 'access': '', 'access_roo': '', 'addr_city': '', 'addr_full': '', 'addr_house': '', 'addr_postc': '', 'addr_provi': '', 'addr_stree': '', 'admin_leve': '', 'air_condit': '', 'alt_name': '', 'amenity': '', 'area': '', 'baby_feedi': '', 'bicycle': '', 'branch': '', 'brand': '', 'brand_wiki': '', 'bridge': '', 'bridge_nam': '', 'building': '', 'building_l': '', 'building_r': '', 'building_s': '', 'building_w': '', 'capacity': '', 'foot': '', 'government': '', 'healthcare': '', 'height': '', 'highway': '', 'horse': '', 'junction': '', 'lane_marki': '', 'lanes': '', 'layer': '', 'leisure': '', 'maxspeed': '', 'name': '', 'name_en': '', 'note': '', 'office': '', 'oneway': '', 'opening_ho': '', 'operator': '', 'operator_t': '', 'phone': '', 'religion': '', 'school_typ': '', 'shop': '', 'short_name': '', 'smoking': '', 'source': '', 'source_ref': '', 'surface': '', 'tourism': '', 'tunnel': '', 'website': '', 'wheelchair': '', 'width': '', 'wikidata': '', });
lyr_Fasilitas_Ekonomi_6.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'access': 'TextEdit', 'access_roo': 'TextEdit', 'addr_city': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_provi': 'TextEdit', 'addr_stree': 'TextEdit', 'admin_leve': 'TextEdit', 'air_condit': 'TextEdit', 'alt_name': 'TextEdit', 'amenity': 'TextEdit', 'area': 'TextEdit', 'baby_feedi': 'TextEdit', 'bicycle': 'TextEdit', 'branch': 'TextEdit', 'brand': 'TextEdit', 'brand_wiki': 'TextEdit', 'bridge': 'TextEdit', 'bridge_nam': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_r': 'TextEdit', 'building_s': 'TextEdit', 'building_w': 'TextEdit', 'capacity': 'TextEdit', 'foot': 'TextEdit', 'government': 'TextEdit', 'healthcare': 'TextEdit', 'height': 'TextEdit', 'highway': 'TextEdit', 'horse': 'TextEdit', 'junction': 'TextEdit', 'lane_marki': 'TextEdit', 'lanes': 'TextEdit', 'layer': 'TextEdit', 'leisure': 'TextEdit', 'maxspeed': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'note': 'TextEdit', 'office': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'operator': 'TextEdit', 'operator_t': 'TextEdit', 'phone': 'TextEdit', 'religion': 'TextEdit', 'school_typ': 'TextEdit', 'shop': 'TextEdit', 'short_name': 'TextEdit', 'smoking': 'TextEdit', 'source': 'TextEdit', 'source_ref': 'TextEdit', 'surface': 'TextEdit', 'tourism': 'TextEdit', 'tunnel': 'TextEdit', 'website': 'TextEdit', 'wheelchair': 'TextEdit', 'width': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_Jalan_Utama_7.set('fieldImages', {'id': '', '@id': '', 'access': '', 'access_roo': '', 'addr_city': '', 'addr_full': '', 'addr_house': '', 'addr_postc': '', 'addr_provi': '', 'addr_stree': '', 'admin_leve': '', 'air_condit': '', 'alt_name': '', 'amenity': '', 'area': '', 'baby_feedi': '', 'bicycle': '', 'branch': '', 'brand': '', 'brand_wiki': '', 'bridge': '', 'bridge_nam': '', 'building': '', 'building_l': '', 'building_r': '', 'building_s': '', 'building_w': '', 'capacity': '', 'foot': '', 'government': '', 'healthcare': '', 'height': '', 'highway': '', 'horse': '', 'junction': '', 'lane_marki': '', 'lanes': '', 'layer': '', 'leisure': '', 'maxspeed': '', 'name': '', 'name_en': '', 'note': '', 'office': '', 'oneway': '', 'opening_ho': '', 'operator': '', 'operator_t': '', 'phone': '', 'religion': '', 'school_typ': '', 'shop': '', 'short_name': '', 'smoking': '', 'source': '', 'source_ref': '', 'surface': '', 'tourism': '', 'tunnel': '', 'website': '', 'wheelchair': '', 'width': '', 'wikidata': '', });
lyr_Info_8.set('fieldImages', {'kd_kecamat': 'TextEdit', 'nm_kecamat': 'TextEdit', 'fid_count': 'TextEdit', 'id_count': 'TextEdit', '@id_count': 'TextEdit', 'name_count': 'TextEdit', 'jenisusaha_count': 'TextEdit', 'jumlah_umkm': 'Range', 'kd_propins_count': 'TextEdit', 'kd_dati2_count': 'TextEdit', 'kd_kecamat_count': 'TextEdit', 'kd_kelurah_count': 'TextEdit', 'nm_kelurah_count': 'TextEdit', });
lyr_KotaManado_1.set('fieldLabels', {'kd_propins': 'no label', 'kd_dati2': 'no label', 'nm_dati2': 'no label', });
lyr_Kelurahan_2.set('fieldLabels', {'kd_propins': 'no label', 'kd_dati2': 'no label', 'kd_kecamat': 'no label', 'kd_kelurah': 'no label', 'nm_kelurah': 'no label', });
lyr_Kecamatan_3.set('fieldLabels', {'kd_kecamat': 'no label', 'nm_kecamat': 'no label', });
lyr_Titik_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', '@id': 'no label', 'name': 'no label', 'jenisusaha': 'no label', });
lyr_Bangunan_5.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'access': 'no label', 'access_roo': 'no label', 'addr_city': 'no label', 'addr_full': 'no label', 'addr_house': 'no label', 'addr_postc': 'no label', 'addr_provi': 'no label', 'addr_stree': 'no label', 'admin_leve': 'no label', 'air_condit': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'area': 'no label', 'baby_feedi': 'no label', 'bicycle': 'no label', 'branch': 'no label', 'brand': 'no label', 'brand_wiki': 'no label', 'bridge': 'no label', 'bridge_nam': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_r': 'no label', 'building_s': 'no label', 'building_w': 'no label', 'capacity': 'no label', 'foot': 'no label', 'government': 'no label', 'healthcare': 'no label', 'height': 'no label', 'highway': 'no label', 'horse': 'no label', 'junction': 'no label', 'lane_marki': 'no label', 'lanes': 'no label', 'layer': 'no label', 'leisure': 'no label', 'maxspeed': 'no label', 'name': 'no label', 'name_en': 'no label', 'note': 'no label', 'office': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'operator': 'no label', 'operator_t': 'no label', 'phone': 'no label', 'religion': 'no label', 'school_typ': 'no label', 'shop': 'no label', 'short_name': 'no label', 'smoking': 'no label', 'source': 'no label', 'source_ref': 'no label', 'surface': 'no label', 'tourism': 'no label', 'tunnel': 'no label', 'website': 'no label', 'wheelchair': 'no label', 'width': 'no label', 'wikidata': 'no label', });
lyr_Fasilitas_Ekonomi_6.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'access': 'no label', 'access_roo': 'no label', 'addr_city': 'no label', 'addr_full': 'no label', 'addr_house': 'no label', 'addr_postc': 'no label', 'addr_provi': 'no label', 'addr_stree': 'no label', 'admin_leve': 'no label', 'air_condit': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'area': 'no label', 'baby_feedi': 'no label', 'bicycle': 'no label', 'branch': 'no label', 'brand': 'no label', 'brand_wiki': 'no label', 'bridge': 'no label', 'bridge_nam': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_r': 'no label', 'building_s': 'no label', 'building_w': 'no label', 'capacity': 'no label', 'foot': 'no label', 'government': 'no label', 'healthcare': 'no label', 'height': 'no label', 'highway': 'no label', 'horse': 'no label', 'junction': 'no label', 'lane_marki': 'no label', 'lanes': 'no label', 'layer': 'no label', 'leisure': 'no label', 'maxspeed': 'no label', 'name': 'no label', 'name_en': 'no label', 'note': 'no label', 'office': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'operator': 'no label', 'operator_t': 'no label', 'phone': 'no label', 'religion': 'no label', 'school_typ': 'no label', 'shop': 'no label', 'short_name': 'no label', 'smoking': 'no label', 'source': 'no label', 'source_ref': 'no label', 'surface': 'no label', 'tourism': 'no label', 'tunnel': 'no label', 'website': 'no label', 'wheelchair': 'no label', 'width': 'no label', 'wikidata': 'no label', });
lyr_Jalan_Utama_7.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'access': 'no label', 'access_roo': 'no label', 'addr_city': 'no label', 'addr_full': 'no label', 'addr_house': 'no label', 'addr_postc': 'no label', 'addr_provi': 'no label', 'addr_stree': 'no label', 'admin_leve': 'no label', 'air_condit': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'area': 'no label', 'baby_feedi': 'no label', 'bicycle': 'no label', 'branch': 'no label', 'brand': 'no label', 'brand_wiki': 'no label', 'bridge': 'no label', 'bridge_nam': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_r': 'no label', 'building_s': 'no label', 'building_w': 'no label', 'capacity': 'no label', 'foot': 'no label', 'government': 'no label', 'healthcare': 'no label', 'height': 'no label', 'highway': 'no label', 'horse': 'no label', 'junction': 'no label', 'lane_marki': 'no label', 'lanes': 'no label', 'layer': 'no label', 'leisure': 'no label', 'maxspeed': 'no label', 'name': 'no label', 'name_en': 'no label', 'note': 'no label', 'office': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'operator': 'no label', 'operator_t': 'no label', 'phone': 'no label', 'religion': 'no label', 'school_typ': 'no label', 'shop': 'no label', 'short_name': 'no label', 'smoking': 'no label', 'source': 'no label', 'source_ref': 'no label', 'surface': 'no label', 'tourism': 'no label', 'tunnel': 'no label', 'website': 'no label', 'wheelchair': 'no label', 'width': 'no label', 'wikidata': 'no label', });
lyr_Info_8.set('fieldLabels', {'kd_kecamat': 'hidden field', 'nm_kecamat': 'header label - always visible', 'fid_count': 'hidden field', 'id_count': 'hidden field', '@id_count': 'hidden field', 'name_count': 'hidden field', 'jenisusaha_count': 'hidden field', 'jumlah_umkm': 'inline label - always visible', 'kd_propins_count': 'hidden field', 'kd_dati2_count': 'hidden field', 'kd_kecamat_count': 'hidden field', 'kd_kelurah_count': 'hidden field', 'nm_kelurah_count': 'inline label - visible with data', });
lyr_Info_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});