Ext.define('MBilling.model.ServicesUse', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'id_services',
        type: 'int'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'month_payed',
        type: 'int'
    }, {
        name: 'reminded',
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
        name: 'next_due_date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, 'idServicesname', 'idServicesprice', 'idUserusername'],
    proxy: {
        type: 'uxproxy',
        module: 'servicesUse'
    }
});