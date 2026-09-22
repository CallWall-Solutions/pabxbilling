Ext.define('MBilling.model.Refill', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'credit',
        type: 'number'
    }, {
        name: 'id_user',
        type: 'int'
    }, 'description', {
        name: 'refill_type',
        type: 'int'
    }, {
        name: 'payment',
        type: 'int'
    }, 'sumCredit', 'sumCreditMonth', 'CreditMonth', 'idUserusername', 'invoice_number'],
    proxy: {
        type: 'uxproxy',
        module: 'refill'
    }
});