Ext.define('MBilling.model.Backup', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'size',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'backup'
    }
});