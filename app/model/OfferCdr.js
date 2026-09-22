Ext.define('MBilling.model.OfferCdr', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'id_offer',
        type: 'int'
    }, {
        name: 'used_secondes',
        type: 'int'
    }, {
        name: 'date_consumption',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, 'idOfferlabel', 'idUserusername'],
    proxy: {
        type: 'uxproxy',
        module: 'offerCdr'
    }
});