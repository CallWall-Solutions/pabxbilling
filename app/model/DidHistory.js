Ext.define('MBilling.model.DidHistory', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'username',
        type: 'string'
    }, {
        name: 'did',
        type: 'string'
    }, {
        name: 'month_payed',
        type: 'int'
    }, {
        name: 'reservationdate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'releasedate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'description',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'didHistory'
    }
});