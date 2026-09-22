Ext.define('MBilling.model.CampaignPollInfoChart', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'sumresposta',
        type: 'int'
    }, {
        name: 'resposta2',
        type: 'int'
    }, {
        name: 'resposta_name',
        type: 'string'
    }, {
        name: 'total_votos',
        type: 'string'
    }],
    proxy: {
        type: 'uxproxy',
        module: 'campaignPollInfoChart'
    }
});