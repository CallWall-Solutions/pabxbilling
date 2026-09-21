Ext.define('MBilling.model.Callerid', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'cid',
        type: 'string'
    }, {
        name: 'name',
        type: 'string'
    }, 'description', {
        name: 'description',
        type: 'string'
    }, {
        name: 'activated',
        type: 'int'
    }, 'idUserusername'],
    proxy: {
        type: 'uxproxy',
        module: 'callerid'
    }
});