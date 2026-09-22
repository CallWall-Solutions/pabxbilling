Ext.define('MBilling.model.GroupUser', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, 'name', {
        name: 'id_user_type',
        type: 'int'
    }, {
        name: 'hidden_prices',
        type: 'int'
    }, 'idUserTypename', 'id_module'],
    proxy: {
        type: 'uxproxy',
        module: 'groupUser'
    }
});