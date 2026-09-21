Ext.define('MBilling.model.CallBack', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'entry_time',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'last_attempt_time',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'status',
        type: 'string'
    }, {
        name: 'channel',
        type: 'string'
    }, {
        name: 'exten',
        type: 'string'
    }, {
        name: 'account',
        type: 'string'
    }, {
        name: 'variable',
        type: 'string'
    }, {
        name: 'sessiontime',
        type: 'int'
    }, {
        name: 'num_attempt',
        type: 'int'
    }, 'idUserusername', 'idDiddid'],
    proxy: {
        type: 'uxproxy',
        module: 'callBack'
    }
});