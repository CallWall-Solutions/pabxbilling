Ext.define('MBilling.model.SipTrace', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'traced_data',
        type: 'string'
    }, {
        name: 'method',
        type: 'string'
    }, {
        name: 'callid',
        type: 'string'
    }, {
        name: 'fromip',
        type: 'string'
    }, {
        name: 'toip',
        type: 'string'
    }, {
        name: 'direction',
        type: 'string'
    }, {
        name: 'head',
        type: 'string'
    }, {
        name: 'sipto',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'sipTrace'
    }
});