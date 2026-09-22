Ext.define('MBilling.model.Holidays', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'day',
        type: 'date',
        dateFormat: 'Y-m-d'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'holidays'
    }
});