const cds = require('@sap/cds');

module.exports = cds.service.impl( function () {
    const {Products} = this.entities();

    this.after('each', 'Products', row =>{
        //console.log('Read Product ID: ${row.ID}')
        //console.log(`Read Product: ${row.ID}`);
        console.log('READ --->>>', row.ID);
    });

    this.after(['CREATE', 'UPDATE', 'DELETE'], [Products], async (Product, req) => {
        const header = req.data;
        req.on('succedded', () => {
            global.it || console.log(`emitting: event for product_change ${Product.ID}`);
            this.emmit('prod_Change', header);
        });


    });


});