sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'hc450.officesupplies.officesuppliesui',
            componentId: 'Products_textsObjectPage',
            contextPath: '/Products/texts'
        },
        CustomPageDefinitions
    );
});