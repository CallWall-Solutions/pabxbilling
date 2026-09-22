Ext.define('MBilling.model.GAuthenticator', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'googleAuthenticator_enable',
        type: 'int'
    }, {
        name: 'google_authenticator_key',
        type: 'string'
    }, {
        name: 'code',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'gAuthenticator'
    }
});