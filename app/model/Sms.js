Ext.define('MBilling.model.Sms', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'prefix',
        type: 'int'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'id_campaign',
        type: 'int'
    }, {
        name: 'channel',
        type: 'string'
    }, {
        name: 'provider_message_id',
        type: 'string'
    }, {
        name: 'result',
        type: 'string'
    }, {
        name: 'telephone',
        type: 'number'
    }, {
        name: 'date',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'sms',
        type: 'string'
    }, {
        name: 'sms_from',
        type: 'string'
    }, 'idUserusername', 'idCampaignname'],
    proxy: {
        type: 'uxproxy',
        module: 'sms'
    }
});
