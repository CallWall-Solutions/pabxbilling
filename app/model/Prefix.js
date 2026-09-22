Ext.define('MBilling.model.Prefix', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'prefix',
        type: 'string'
    }, {
        name: 'destination',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'prefix'
    }
});