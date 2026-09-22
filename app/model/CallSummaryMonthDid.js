Ext.define('MBilling.model.CallSummaryMonthDid', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'month',
        type: 'date',
        dateFormat: 'Y-m'
    }, {
        name: 'sessiontime',
        type: 'int'
    }, {
        name: 'aloc_all_calls',
        type: 'int'
    }, {
        name: 'nbcall',
        type: 'int'
    }, {
        name: 'sessionbill',
        type: 'float'
    }, {
        name: 'id_did',
        type: 'int'
    }, 'idDiddid', 'sumsessiontime', 'sumsessionbill', 'sumaloc_all_calls', 'sumnbcall'],
    proxy: {
        type: 'uxproxy',
        module: 'callSummaryMonthDid'
    }
});