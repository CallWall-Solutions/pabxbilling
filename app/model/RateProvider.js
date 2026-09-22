Ext.define('MBilling.model.RateProvider', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_prefix',
        type: 'int'
    }, {
        name: 'id_provider',
        type: 'int'
    }, {
        name: 'buyrate',
        type: 'number'
    }, {
        name: 'buyrateinitblock',
        type: 'int'
    }, {
        name: 'buyrateincrement',
        type: 'int'
    }, {
        name: 'minimal_time_buy',
        type: 'int'
    }, 'idPrefixdestination', 'idProviderprovider_name', 'idPrefixprefix'],
    proxy: {
        type: 'uxproxy',
        module: 'RateProvider'
    }
});