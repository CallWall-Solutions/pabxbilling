Ext.define('MBilling.model.Diddestination', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_ivr',
        type: 'int'
    }, {
        name: 'id_queue',
        type: 'int'
    }, {
        name: 'id_sip',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'id_did',
        type: 'int'
    }, {
        name: 'destination',
        type: 'string'
    }, {
        name: 'priority',
        type: 'int'
    }, {
        name: 'creationdate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'activated',
        type: 'int'
    }, {
        name: 'secondusedreal',
        type: 'number'
    }, {
        name: 'voip_call',
        type: 'int'
    }, {
        name: 'id_ivr',
        type: 'int'
    }, 'idDiddid', 'idIvrname', 'idUserusername', 'idQueuename', 'idSipname'],
    proxy: {
        type: 'uxproxy',
        module: 'diddestination'
    }
});