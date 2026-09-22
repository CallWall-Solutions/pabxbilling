Ext.define('MBilling.store.QueueDashBoard', {
    extend: 'Ext.data.Store',
    model: 'MBilling.model.QueueDashBoard',
    groupField: 'id_queue',
    remoteSort: false,
    sorters: [{
        property: 'score',
        direction: 'DESC'
    }]
});