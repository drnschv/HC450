const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {
    const { Products } = this.entities();

    this.after('each', 'Products', row => {
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

    this.on('get_supplier_info', async () => {
        try {
            const db = await cds.connect.to('db');
            const dbClass = require("sap-hdbext-promisfied");
            let dbConn = new dbClass(await dbClass.createConnection(db.options.credentials));
            const hdbext = require("@sap/hdbext");
            const sp = await dbConn.loadProcedurePromisified(hdbext, null, 'get_supplier_info');
            const output = await dbConn.callProcedurePromisified(sp, []);
            console.log(output.results);
            return output.results;

        }
        catch (error) {
            console.error(error);
            return;

        }
    });


});