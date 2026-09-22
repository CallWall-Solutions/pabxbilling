Ext.define('MBilling.model.Refillprovider', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'credit',
        type: 'int'
    }, {
        name: 'id_provider',
        type: 'int'
    }, 'description', 'idProviderprovider_name', {
        name: 'payment',
        type: 'int'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'refillprovider'
    }
});