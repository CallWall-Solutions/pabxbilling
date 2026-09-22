Ext.define('MBilling.model.StatusSystem', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'cpuMediaUso',
        type: 'number'
    }, {
        name: 'cpuPercent',
        type: 'number'
    }, {
        name: 'memUsed',
        type: 'number'
    }, {
        name: 'networkin',
        type: 'number'
    }, {
        name: 'networkout',
        type: 'number'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'statusSystem'
    }
});