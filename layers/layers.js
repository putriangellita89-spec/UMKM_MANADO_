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
                interactive: true,
                title: '<img src="styles/legend/KotaManado_1.png" /> Kota Manado'
            });
var format_Kecamatan_2 = new ol.format.GeoJSON();
var features_Kecamatan_2 = format_Kecamatan_2.readFeatures(json_Kecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_2.addFeatures(features_Kecamatan_2);
var lyr_Kecamatan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_2, 
                style: style_Kecamatan_2,
                popuplayertitle: 'Kecamatan',
                interactive: true,
    title: 'Kecamatan<br />\
    <img src="styles/legend/Kecamatan_2_0.png" /> Bunaken<br />\
    <img src="styles/legend/Kecamatan_2_1.png" /> Bunaken Kepulauan<br />\
    <img src="styles/legend/Kecamatan_2_2.png" /> Malalayang<br />\
    <img src="styles/legend/Kecamatan_2_3.png" /> Mapanget<br />\
    <img src="styles/legend/Kecamatan_2_4.png" /> Paal Dua<br />\
    <img src="styles/legend/Kecamatan_2_5.png" /> Sario<br />\
    <img src="styles/legend/Kecamatan_2_6.png" /> Singkil<br />\
    <img src="styles/legend/Kecamatan_2_7.png" /> Tikala<br />\
    <img src="styles/legend/Kecamatan_2_8.png" /> Tuminiting<br />\
    <img src="styles/legend/Kecamatan_2_9.png" /> Wanea<br />\
    <img src="styles/legend/Kecamatan_2_10.png" /> Wenang<br />\
    <img src="styles/legend/Kecamatan_2_11.png" /> <br />' });
var format_Kelurahan_3 = new ol.format.GeoJSON();
var features_Kelurahan_3 = format_Kelurahan_3.readFeatures(json_Kelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_3.addFeatures(features_Kelurahan_3);
var lyr_Kelurahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_3, 
                style: style_Kelurahan_3,
                popuplayertitle: 'Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/Kelurahan_3.png" /> Kelurahan'
            });
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
                interactive: true,
                title: '<img src="styles/legend/Titik_4.png" /> Titik'
            });
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
                interactive: true,
                title: '<img src="styles/legend/Bangunan_5.png" /> Bangunan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KotaManado_1.setVisible(true);lyr_Kecamatan_2.setVisible(true);lyr_Kelurahan_3.setVisible(true);lyr_Titik_4.setVisible(true);lyr_Bangunan_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KotaManado_1,lyr_Kecamatan_2,lyr_Kelurahan_3,lyr_Titik_4,lyr_Bangunan_5];
lyr_KotaManado_1.set('fieldAliases', {'kd_propins': 'kd_propins', 'kd_dati2': 'kd_dati2', 'nm_dati2': 'nm_dati2', });
lyr_Kecamatan_2.set('fieldAliases', {'kd_propins': 'kd_propins', 'kd_dati2': 'kd_dati2', 'kd_kecamat': 'kd_kecamat', 'nm_kecamat': 'nm_kecamat', });
lyr_Kelurahan_3.set('fieldAliases', {'kd_propins': 'kd_propins', 'kd_dati2': 'kd_dati2', 'kd_kecamat': 'kd_kecamat', 'kd_kelurah': 'kd_kelurah', 'nm_kelurah': 'nm_kelurah', });
lyr_Titik_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', '@id': '@id', 'access': 'access', 'access_roo': 'access_roo', 'addr_city': 'addr_city', 'addr_distr': 'addr_distr', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'addr_postc': 'addr_postc', 'addr_provi': 'addr_provi', 'addr_stree': 'addr_stree', 'addr_subdi': 'addr_subdi', 'air_condit': 'air_condit', 'alt_name': 'alt_name', 'amenity': 'amenity', 'beauty': 'beauty', 'branch': 'branch', 'brand': 'brand', 'brand_en': 'brand_en', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand_zh': 'brand_zh', 'building': 'building', 'building_l': 'building_l', 'building_r': 'building_r', 'building_s': 'building_s', 'building_w': 'building_w', 'check_date': 'check_date', 'check_da_1': 'check_da_1', 'craft': 'craft', 'cuisine': 'cuisine', 'currency_I': 'currency_I', 'descriptio': 'descriptio', 'diet_halal': 'diet_halal', 'email': 'email', 'healthcare': 'healthcare', 'height': 'height', 'int_name': 'int_name', 'layer': 'layer', 'leisure': 'leisure', 'level': 'level', 'name': 'name', 'name_en': 'name_en', 'name_fr': 'name_fr', 'name_id': 'name_id', 'name_ja': 'name_ja', 'name_zh': 'name_zh', 'not_brand_': 'not_brand_', 'office': 'office', 'opening_ho': 'opening_ho', 'opening__1': 'opening__1', 'operator': 'operator', 'outdoor_se': 'outdoor_se', 'payment_ap': 'payment_ap', 'payment_ca': 'payment_ca', 'payment__1': 'payment__1', 'payment_co': 'payment_co', 'payment_cr': 'payment_cr', 'payment_de': 'payment_de', 'payment_ma': 'payment_ma', 'payment_qr': 'payment_qr', 'payment__2': 'payment__2', 'payment_vi': 'payment_vi', 'phone': 'phone', 'religion': 'religion', 'shop': 'shop', 'short_name': 'short_name', 'takeaway': 'takeaway', 'toilets': 'toilets', 'toilets_ac': 'toilets_ac', 'toilets_un': 'toilets_un', 'tourism': 'tourism', 'website': 'website', 'wheelchair': 'wheelchair', });
lyr_Bangunan_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', '@id': '@id', 'access': 'access', 'access_roo': 'access_roo', 'addr_city': 'addr_city', 'addr_distr': 'addr_distr', 'addr_full': 'addr_full', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'addr_postc': 'addr_postc', 'addr_provi': 'addr_provi', 'addr_stree': 'addr_stree', 'addr_subdi': 'addr_subdi', 'air_condit': 'air_condit', 'alt_name': 'alt_name', 'amenity': 'amenity', 'beauty': 'beauty', 'branch': 'branch', 'brand': 'brand', 'brand_en': 'brand_en', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand_zh': 'brand_zh', 'building': 'building', 'building_l': 'building_l', 'building_r': 'building_r', 'building_s': 'building_s', 'building_w': 'building_w', 'check_date': 'check_date', 'check_da_1': 'check_da_1', 'craft': 'craft', 'cuisine': 'cuisine', 'currency_I': 'currency_I', 'descriptio': 'descriptio', 'diet_halal': 'diet_halal', 'email': 'email', 'healthcare': 'healthcare', 'height': 'height', 'int_name': 'int_name', 'layer': 'layer', 'leisure': 'leisure', 'level': 'level', 'name': 'name', 'name_en': 'name_en', 'name_fr': 'name_fr', 'name_id': 'name_id', 'name_ja': 'name_ja', 'name_zh': 'name_zh', 'not_brand_': 'not_brand_', 'office': 'office', 'opening_ho': 'opening_ho', 'opening__1': 'opening__1', 'operator': 'operator', 'outdoor_se': 'outdoor_se', 'payment_ap': 'payment_ap', 'payment_ca': 'payment_ca', 'payment__1': 'payment__1', 'payment_co': 'payment_co', 'payment_cr': 'payment_cr', 'payment_de': 'payment_de', 'payment_ma': 'payment_ma', 'payment_qr': 'payment_qr', 'payment__2': 'payment__2', 'payment_vi': 'payment_vi', 'phone': 'phone', 'religion': 'religion', 'shop': 'shop', 'short_name': 'short_name', 'takeaway': 'takeaway', 'toilets': 'toilets', 'toilets_ac': 'toilets_ac', 'toilets_un': 'toilets_un', 'tourism': 'tourism', 'website': 'website', 'wheelchair': 'wheelchair', });
lyr_KotaManado_1.set('fieldImages', {'kd_propins': 'TextEdit', 'kd_dati2': 'TextEdit', 'nm_dati2': 'TextEdit', });
lyr_Kecamatan_2.set('fieldImages', {'kd_propins': 'TextEdit', 'kd_dati2': 'TextEdit', 'kd_kecamat': 'TextEdit', 'nm_kecamat': 'TextEdit', });
lyr_Kelurahan_3.set('fieldImages', {'kd_propins': 'TextEdit', 'kd_dati2': 'TextEdit', 'kd_kecamat': 'TextEdit', 'kd_kelurah': 'TextEdit', 'nm_kelurah': 'TextEdit', });
lyr_Titik_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', '@id': 'TextEdit', 'access': 'TextEdit', 'access_roo': 'TextEdit', 'addr_city': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_provi': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_subdi': 'TextEdit', 'air_condit': 'TextEdit', 'alt_name': 'TextEdit', 'amenity': 'TextEdit', 'beauty': 'TextEdit', 'branch': 'TextEdit', 'brand': 'TextEdit', 'brand_en': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand_zh': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_r': 'TextEdit', 'building_s': 'TextEdit', 'building_w': 'TextEdit', 'check_date': 'TextEdit', 'check_da_1': 'TextEdit', 'craft': 'TextEdit', 'cuisine': 'TextEdit', 'currency_I': 'TextEdit', 'descriptio': 'TextEdit', 'diet_halal': 'TextEdit', 'email': 'TextEdit', 'healthcare': 'TextEdit', 'height': 'TextEdit', 'int_name': 'TextEdit', 'layer': 'TextEdit', 'leisure': 'TextEdit', 'level': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'name_fr': 'TextEdit', 'name_id': 'TextEdit', 'name_ja': 'TextEdit', 'name_zh': 'TextEdit', 'not_brand_': 'TextEdit', 'office': 'TextEdit', 'opening_ho': 'TextEdit', 'opening__1': 'TextEdit', 'operator': 'TextEdit', 'outdoor_se': 'TextEdit', 'payment_ap': 'TextEdit', 'payment_ca': 'TextEdit', 'payment__1': 'TextEdit', 'payment_co': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_de': 'TextEdit', 'payment_ma': 'TextEdit', 'payment_qr': 'TextEdit', 'payment__2': 'TextEdit', 'payment_vi': 'TextEdit', 'phone': 'TextEdit', 'religion': 'TextEdit', 'shop': 'TextEdit', 'short_name': 'TextEdit', 'takeaway': 'TextEdit', 'toilets': 'TextEdit', 'toilets_ac': 'TextEdit', 'toilets_un': 'TextEdit', 'tourism': 'TextEdit', 'website': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_Bangunan_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', '@id': 'TextEdit', 'access': 'TextEdit', 'access_roo': 'TextEdit', 'addr_city': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_full': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_provi': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_subdi': 'TextEdit', 'air_condit': 'TextEdit', 'alt_name': 'TextEdit', 'amenity': 'TextEdit', 'beauty': 'TextEdit', 'branch': 'TextEdit', 'brand': 'TextEdit', 'brand_en': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand_zh': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'building_r': 'TextEdit', 'building_s': 'TextEdit', 'building_w': 'TextEdit', 'check_date': 'TextEdit', 'check_da_1': 'TextEdit', 'craft': 'TextEdit', 'cuisine': 'TextEdit', 'currency_I': 'TextEdit', 'descriptio': 'TextEdit', 'diet_halal': 'TextEdit', 'email': 'TextEdit', 'healthcare': 'TextEdit', 'height': 'TextEdit', 'int_name': 'TextEdit', 'layer': 'TextEdit', 'leisure': 'TextEdit', 'level': 'TextEdit', 'name': 'TextEdit', 'name_en': 'TextEdit', 'name_fr': 'TextEdit', 'name_id': 'TextEdit', 'name_ja': 'TextEdit', 'name_zh': 'TextEdit', 'not_brand_': 'TextEdit', 'office': 'TextEdit', 'opening_ho': 'TextEdit', 'opening__1': 'TextEdit', 'operator': 'TextEdit', 'outdoor_se': 'TextEdit', 'payment_ap': 'TextEdit', 'payment_ca': 'TextEdit', 'payment__1': 'TextEdit', 'payment_co': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_de': 'TextEdit', 'payment_ma': 'TextEdit', 'payment_qr': 'TextEdit', 'payment__2': 'TextEdit', 'payment_vi': 'TextEdit', 'phone': 'TextEdit', 'religion': 'TextEdit', 'shop': 'TextEdit', 'short_name': 'TextEdit', 'takeaway': 'TextEdit', 'toilets': 'TextEdit', 'toilets_ac': 'TextEdit', 'toilets_un': 'TextEdit', 'tourism': 'TextEdit', 'website': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_KotaManado_1.set('fieldLabels', {'kd_propins': 'no label', 'kd_dati2': 'no label', 'nm_dati2': 'no label', });
lyr_Kecamatan_2.set('fieldLabels', {'kd_propins': 'no label', 'kd_dati2': 'no label', 'kd_kecamat': 'no label', 'nm_kecamat': 'no label', });
lyr_Kelurahan_3.set('fieldLabels', {'kd_propins': 'no label', 'kd_dati2': 'no label', 'kd_kecamat': 'no label', 'kd_kelurah': 'no label', 'nm_kelurah': 'no label', });
lyr_Titik_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', '@id': 'no label', 'access': 'no label', 'access_roo': 'no label', 'addr_city': 'no label', 'addr_distr': 'no label', 'addr_full': 'no label', 'addr_house': 'no label', 'addr_hou_1': 'no label', 'addr_postc': 'no label', 'addr_provi': 'no label', 'addr_stree': 'no label', 'addr_subdi': 'no label', 'air_condit': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'beauty': 'no label', 'branch': 'no label', 'brand': 'no label', 'brand_en': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'brand_zh': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_r': 'no label', 'building_s': 'no label', 'building_w': 'no label', 'check_date': 'no label', 'check_da_1': 'no label', 'craft': 'no label', 'cuisine': 'no label', 'currency_I': 'no label', 'descriptio': 'no label', 'diet_halal': 'no label', 'email': 'no label', 'healthcare': 'no label', 'height': 'no label', 'int_name': 'no label', 'layer': 'no label', 'leisure': 'no label', 'level': 'no label', 'name': 'no label', 'name_en': 'no label', 'name_fr': 'no label', 'name_id': 'no label', 'name_ja': 'no label', 'name_zh': 'no label', 'not_brand_': 'no label', 'office': 'no label', 'opening_ho': 'no label', 'opening__1': 'no label', 'operator': 'no label', 'outdoor_se': 'no label', 'payment_ap': 'no label', 'payment_ca': 'no label', 'payment__1': 'no label', 'payment_co': 'no label', 'payment_cr': 'no label', 'payment_de': 'no label', 'payment_ma': 'no label', 'payment_qr': 'no label', 'payment__2': 'no label', 'payment_vi': 'no label', 'phone': 'no label', 'religion': 'no label', 'shop': 'no label', 'short_name': 'no label', 'takeaway': 'no label', 'toilets': 'no label', 'toilets_ac': 'no label', 'toilets_un': 'no label', 'tourism': 'no label', 'website': 'no label', 'wheelchair': 'no label', });
lyr_Bangunan_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', '@id': 'no label', 'access': 'no label', 'access_roo': 'no label', 'addr_city': 'no label', 'addr_distr': 'no label', 'addr_full': 'no label', 'addr_house': 'no label', 'addr_hou_1': 'no label', 'addr_postc': 'no label', 'addr_provi': 'no label', 'addr_stree': 'no label', 'addr_subdi': 'no label', 'air_condit': 'no label', 'alt_name': 'no label', 'amenity': 'no label', 'beauty': 'no label', 'branch': 'no label', 'brand': 'no label', 'brand_en': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'brand_zh': 'no label', 'building': 'no label', 'building_l': 'no label', 'building_r': 'no label', 'building_s': 'no label', 'building_w': 'no label', 'check_date': 'no label', 'check_da_1': 'no label', 'craft': 'no label', 'cuisine': 'no label', 'currency_I': 'no label', 'descriptio': 'no label', 'diet_halal': 'no label', 'email': 'no label', 'healthcare': 'no label', 'height': 'no label', 'int_name': 'no label', 'layer': 'no label', 'leisure': 'no label', 'level': 'no label', 'name': 'no label', 'name_en': 'no label', 'name_fr': 'no label', 'name_id': 'no label', 'name_ja': 'no label', 'name_zh': 'no label', 'not_brand_': 'no label', 'office': 'no label', 'opening_ho': 'no label', 'opening__1': 'no label', 'operator': 'no label', 'outdoor_se': 'no label', 'payment_ap': 'no label', 'payment_ca': 'no label', 'payment__1': 'no label', 'payment_co': 'no label', 'payment_cr': 'no label', 'payment_de': 'no label', 'payment_ma': 'no label', 'payment_qr': 'no label', 'payment__2': 'no label', 'payment_vi': 'no label', 'phone': 'no label', 'religion': 'no label', 'shop': 'no label', 'short_name': 'no label', 'takeaway': 'no label', 'toilets': 'no label', 'toilets_ac': 'no label', 'toilets_un': 'no label', 'tourism': 'no label', 'website': 'no label', 'wheelchair': 'no label', });
lyr_Bangunan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});