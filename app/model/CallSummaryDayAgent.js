/**
 * Classe que define a model "CallSummaryDayUser"
 *
 * =======================================*/
Ext.define('MBilling.model.CallSummaryDayAgent', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'day',
        type: 'date',
        dateFormat: 'Y-m-d'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'sessiontime',
        type: 'int'
    }, {
        name: 'sessionbill',
        type: 'float'
    }, {
        name: 'buycost',
        type: 'float'
    }, {
        name: 'aloc_all_calls',
        type: 'int'
    }, {
        name: 'nbcall',
        type: 'int'
    }, {
        name: 'lucro',
        type: 'float'
    }, {
        name: 'nbcall_fail',
        type: 'int'
    }, {
        name: 'asr',
        type: 'float'
    }, 'idUserusername', 'sumsessiontime', 'sumbuycost', 'sumlucro', 'sumsessionbill', 'sumaloc_all_calls', 'sumnbcall', 'sumasr'],
    proxy: {
        type: 'uxproxy',
        module: 'callSummaryDayAgent'
    }
});