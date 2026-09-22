Ext.define('MBilling.model.Services', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'type',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'price',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'calllimit',
        type: 'int'
    }, {
        name: 'disk_space',
        type: 'int'
    }, {
        name: 'sipaccountlimit',
        type: 'int'
    }, {
        name: 'return_credit',
        type: 'int'
    }, {
        name: 'next_due_date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'services'
    }
});