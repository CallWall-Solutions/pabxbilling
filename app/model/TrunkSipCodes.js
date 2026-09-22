Ext.define('MBilling.model.TrunkSipCodes', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'ip',
        type: 'string'
    }, {
        name: 'code',
        type: 'int'
    }, {
        name: 'total',
        type: 'int'
    }, {
        name: 'percentage',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'trunkSipCodes'
    }
});