Ext.define('MBilling.model.Provider', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'provider_name',
        type: 'string'
    }, {
        name: 'creationdate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'credit_control',
        type: 'int'
    }, {
        name: 'credit',
        type: 'number'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'provider'
    }
});