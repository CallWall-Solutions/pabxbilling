Ext.define('MBilling.model.Signup', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'nome',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'signup'
    }
});