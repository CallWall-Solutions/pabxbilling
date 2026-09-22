Ext.define('MBilling.model.CallSummaryPerMonth', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'month',
        type: 'string'
    }, {
        name: 'sessiontime',
        type: 'int'
    }, {
        name: 'aloc_all_calls',
        type: 'int'
    }, {
        name: 'sessionbill',
        type: 'float'
    }, {
        name: 'buycost',
        type: 'float'
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
    }, 'sumsessiontime', 'sumbuycost', 'sumlucro', 'sumsessionbill', 'sumaloc_all_calls', 'sumnbcall'],
    proxy: {
        type: 'uxproxy',
        module: 'callSummaryPerMonth'
    }
});