Ext.define('MBilling.model.UserHistory', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'id_user',
        type: 'int'
    }, 'description', 'idUserusername'],
    proxy: {
        type: 'uxproxy',
        module: 'userHistory'
    }
});