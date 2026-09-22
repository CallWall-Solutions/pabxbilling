Ext.define('MBilling.model.RestrictedPhonenumber', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'direction',
        type: 'int'
    }, {
        name: 'number',
        type: 'string'
    }, 'idUserusername'],
    proxy: {
        type: 'uxproxy',
        module: 'restrictedPhonenumber'
    }
});