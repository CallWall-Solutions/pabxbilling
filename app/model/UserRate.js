Ext.define('MBilling.model.UserRate', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'id_prefix',
        type: 'int'
    }, {
        name: 'rateinitial',
        type: 'number'
    }, {
        name: 'initblock',
        type: 'int'
    }, {
        name: 'billingblock',
        type: 'int'
    }, 'idUserusername', 'idPrefixdestination', 'idPrefixprefix'],
    proxy: {
        type: 'uxproxy',
        module: 'userRate'
    }
});