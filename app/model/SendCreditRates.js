Ext.define('MBilling.model.SendCreditRates', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'id_operator',
        type: 'int'
    }, {
        name: 'sell_price',
        type: 'string'
    }, 'idUserusername', 'idProductoperator_name', 'idProductcountry', 'idProductcurrency_dest', 'idProductproduct', 'idProductcurrency_orig', 'idProductwholesale_price'],
    proxy: {
        type: 'uxproxy',
        module: 'sendCreditRates'
    }
});