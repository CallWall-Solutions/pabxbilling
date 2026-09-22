Ext.define('MBilling.model.CampaignLog', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'total',
        type: 'int'
    }, {
        name: 'loops',
        type: 'int'
    }, {
        name: 'trunks',
        type: 'string'
    }, {
        name: 'campaigns',
        type: 'string'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'campaignLog'
    }
});