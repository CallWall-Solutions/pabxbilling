Ext.define('MBilling.model.RateCallshop', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'dialprefix',
        type: 'string'
    }, {
        name: 'buyrate',
        type: 'number'
    }, {
        name: 'minimo',
        type: 'int'
    }, {
        name: 'block',
        type: 'int'
    }, {
        name: 'destination',
        type: 'string'
    }, {
        name: 'minimal_time_charge',
        type: 'int'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'rateCallshop'
    }
});