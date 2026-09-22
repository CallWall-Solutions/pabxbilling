Ext.define('MBilling.model.Offer', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'creationdate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'label',
        type: 'string'
    }, {
        name: 'packagetype',
        type: 'int'
    }, {
        name: 'billingtype',
        type: 'int'
    }, {
        name: 'startday',
        type: 'int'
    }, {
        name: 'freetimetocall',
        type: 'int'
    }, {
        name: 'price',
        type: 'number'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'offer'
    }
});