Ext.define('MBilling.model.Firewall', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'ip',
        type: 'string'
    }, {
        name: 'action',
        type: 'int'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'jail',
        type: 'string'
    }, 'idServername'],
    proxy: {
        type: 'uxproxy',
        module: 'firewall'
    }
});