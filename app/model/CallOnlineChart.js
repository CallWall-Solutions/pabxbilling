/**
 * Classe que define a model "Callerid"
 *
 * ======================================= */
Ext.define('MBilling.model.CallOnlineChart', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'total',
        type: 'int'
    }, {
        name: 'answer',
        type: 'int'
    }, {
        name: 'date',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'CallOnlineChart'
    }
});