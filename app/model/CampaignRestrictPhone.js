Ext.define('MBilling.model.CampaignRestrictPhone', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'number',
        type: 'string'
    }, {
        name: 'description',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'campaignRestrictPhone'
    }
});