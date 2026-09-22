Ext.define('MBilling.model.CampaignPollInfo', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_campaign_poll',
        type: 'int'
    }, {
        name: 'resposta',
        type: 'string'
    }, {
        name: 'number',
        type: 'string'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'city',
        type: 'string'
    }, 'sumresposta', 'resposta2', {
        name: 'obs',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'campaignPollInfo'
    }
});