Ext.define('MBilling.model.Configuration', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'status',
        type: 'string'
    }, 'config_title', 'config_key', 'config_value', 'config_description', 'config_group_title'],
    proxy: {
        type: 'uxproxy',
        module: 'configuration'
    }
});