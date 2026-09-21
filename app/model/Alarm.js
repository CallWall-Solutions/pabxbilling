Ext.define('MBilling.model.Alarm', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_plan',
        type: 'int'
    }, {
        name: 'type',
        type: 'int'
    }, {
        name: 'amount',
        type: 'int'
    }, {
        name: 'condition',
        type: 'int'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'email',
        type: 'string'
    }, {
        name: 'period',
        type: 'int'
    }, {
        name: 'creationdate',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, 'idPlanname'],
    proxy: {
        type: 'uxproxy',
        module: 'alarm'
    }
});