Ext.define('MBilling.model.GroupUserGroup', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'user_prefix',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'groupUserGroup'
    }
});