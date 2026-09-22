Ext.define('MBilling.model.CampaignDashBoard', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'callsPlaced',
        type: 'int'
    }, {
        name: 'callsringing',
        type: 'int'
    }, {
        name: 'callsInTransfer',
        type: 'int'
    }, {
        name: 'callsTransfered',
        type: 'int'
    }, {
        name: 'callsTotalNumbers',
        type: 'int'
    }, {
        name: 'callsDialedtoday',
        type: 'int'
    }, {
        name: 'callsRemaningToDial',
        type: 'int'
    }, 'idUserusername', 'id_phonebook'],
    proxy: {
        type: 'uxproxy',
        module: 'campaignDashBoard'
    }
});