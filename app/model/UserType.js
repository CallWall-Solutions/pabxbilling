Ext.define('MBilling.model.UserType', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, 'name'],
    proxy: {
        type: 'uxproxy',
        module: 'userType'
    }
});