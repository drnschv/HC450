using hc450.officesupplies as officesupplies from '../db/schema';

service CatalogService {
    @odata.draft.enabled :true
    entity Products  
        @(restrict : [
            { grant: [ 'READ' ], to: [ 'Vendor' ] },
            { grant: [ '*' ], to: [ 'ProcurementManager' ] }
        ]) as projection on officesupplies.Products;
    
    entity Suppliers as projection on officesupplies.Suppliers;
        @(restrict : [
            { grant: [ 'READ' ], to: [ 'Vendor' ] },
            { grant: [ '*' ], to: [ 'ProcurementManager' ] }
        ])

    function get_supplier_info() returns array of Suppliers;

};
