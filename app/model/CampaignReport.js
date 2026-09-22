Ext.define('MBilling.model.CampaignReport', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'id_campaign',
        type: 'int'
    }, {
        name: 'id_phonenumber',
        type: 'int'
    }, {
        name: 'id_user',
        type: 'int'
    }, {
        name: 'id_trunk',
        type: 'int'
    }, {
        name: 'status',
        type: 'int'
    }, {
        name: 'unix_timestamp',
        type: 'date',
        dateFormat: 'Y-m-d H:i:s'
    }, {
        name: 'payment',
        type: 'number'
    }, 'idCampaignname', 'idPhonenumbernumber', 'idTrunktrunkcode', 'idUserusername'],
    proxy: {
        type: 'uxproxy',
        module: 'campaignReport'
    }
});