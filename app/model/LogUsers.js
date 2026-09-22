Ext.define('MBilling.model.LogUsers', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'description',
        type: 'string'
    }, {
        name: 'id_log_actions',
        type: 'int'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'ip',
        type: 'string'
    }, 'idUserusername', 'idLogActionsname'],
    proxy: {
        type: 'uxproxy',
        module: 'logUsers'
    }
});