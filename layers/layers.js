var wms_layers = [];

var format_SudanAdministrationBoundary_0 = new ol.format.GeoJSON();
var features_SudanAdministrationBoundary_0 = format_SudanAdministrationBoundary_0.readFeatures(json_SudanAdministrationBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SudanAdministrationBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SudanAdministrationBoundary_0.addFeatures(features_SudanAdministrationBoundary_0);
var lyr_SudanAdministrationBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SudanAdministrationBoundary_0, 
                style: style_SudanAdministrationBoundary_0,
                popuplayertitle: "Sudan Administration Boundary",
                interactive: true,
                title: '<img src="styles/legend/SudanAdministrationBoundary_0.png" /> Sudan Administration Boundary'
            });

lyr_SudanAdministrationBoundary_0.setVisible(true);
var layersList = [lyr_SudanAdministrationBoundary_0];
lyr_SudanAdministrationBoundary_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_AR': 'ADM2_AR', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM2ALT1AR': 'ADM2ALT1AR', 'ADM2ALT2AR': 'ADM2ALT2AR', 'ADM1_EN': 'ADM1_EN', 'ADM1_AR': 'ADM1_AR', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_AR': 'ADM0_AR', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_SudanAdministrationBoundary_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_AR': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM2ALT1AR': 'TextEdit', 'ADM2ALT2AR': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_AR': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_AR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_SudanAdministrationBoundary_0.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADM2_EN': 'hidden field', 'ADM2_AR': 'inline label - always visible', 'ADM2_PCODE': 'hidden field', 'ADM2_REF': 'hidden field', 'ADM2ALT1EN': 'hidden field', 'ADM2ALT2EN': 'hidden field', 'ADM2ALT1AR': 'hidden field', 'ADM2ALT2AR': 'hidden field', 'ADM1_EN': 'hidden field', 'ADM1_AR': 'hidden field', 'ADM1_PCODE': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_AR': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', });
lyr_SudanAdministrationBoundary_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});