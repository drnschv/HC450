sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hc450/officesupplies/officesuppliesui/test/integration/FirstJourney',
		'hc450/officesupplies/officesuppliesui/test/integration/pages/ProductsList',
		'hc450/officesupplies/officesuppliesui/test/integration/pages/ProductsObjectPage',
		'hc450/officesupplies/officesuppliesui/test/integration/pages/Products_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, Products_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hc450/officesupplies/officesuppliesui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage,
					onTheProducts_textsObjectPage: Products_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);