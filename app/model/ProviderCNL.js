Ext.define('MBilling.model.ProviderCNL', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_provider',
        type: 'int'
    }, {
        name: 'cnl',
        type: 'int'
    }, {
        name: 'zone',
        type: 'string'
    }, {
        name: 'id_provider',
        type: 'int'
    }, 'idProviderprovider_name'],
    proxy: {
        type: 'uxproxy',
        module: 'providerCNL'
    }
});