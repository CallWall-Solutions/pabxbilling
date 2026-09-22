Ext.define('MBilling.model.RefillChart', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, 'sumCreditMonth', 'CreditMonth'],
    proxy: {
        type: 'uxproxy',
        module: 'refillChart'
    }
});