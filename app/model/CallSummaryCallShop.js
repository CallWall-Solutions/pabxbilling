/**
 * Classe que define a model "CallSummary"
 *
 * =======================================*/
 Ext.define('MBilling.model.CallSummaryCallShop', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'day',
        type: 'date',
        dateFormat: 'Y-m-d'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d'
    }, {
        name: 'sessiontime',
        type: 'int'
    }, {
        name: 'aloc_success_calls',
        type: 'int'
    }, {
        name: 'aloc_all_calls',
        type: 'int'
    }, {
        name: 'price',
        type: 'float'
    }, {
        name: 'buycost',
        type: 'float'
    }, {
        name: 'nbcall',
        type: 'int'
    }, {
        name: 'success_calls',
        type: 'int'
    }, {
        name: 'asr',
        type: 'int'
    }, {
        name: 'lucro',
        type: 'float'
    }, 'sumsessiontime', 'sumbuycost', 'sumlucro', 'sumprice', 'sumsuccess_calls', 'sumaloc_all_calls', 'sumnbcall', 'sumasr'],
    proxy: {
        type: 'uxproxy',
        module: 'callSummaryCallShop'
    }
});