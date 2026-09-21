/**
 * Classe que define a model "CallShopCdr"
 *
 * =======================================*/
Ext.define('MBilling.model.CallShopCdr', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'price',
        type: 'number'
    }, {
        name: 'buycost',
        type: 'number'
    }, {
        name: 'calledstation',
        type: 'number'
    }, {
        name: 'destination',
        type: 'string'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'sessiontime',
        type: 'int'
    }, {
        name: 'cabina',
        type: 'string'
    }, {
        name: 'priceSum',
        type: 'number'
    }, {
        name: 'markup',
        type: 'number'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'callShopCdr'
    }
});