Ext.define('MBilling.view.campaign.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.campaigncombo',
    name: 'id_campaign',
    fieldLabel: t('Campaign'),
    displayField: 'name',
    forceSelection: true,
    editable: false,
    valueField: 'id',
    initComponent: function () {
        var me = this;
        me.store = Ext.create('MBilling.store.Campaign', {
            proxy: {
                type: 'uxproxy',
                module: 'campaign',
                limitParam: undefined
            }
        });
        me.callParent(arguments);
    }
});
Ext.define('MBilling.view.general.TypeCampaignDestination', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.typecampaigndestinationcombo',
    fieldLabel: t('Type'),
    forceSelection: true,
    editable: false,
    value: '',
    store: [
        ['', t('')],
        ['undefined', t('Undefined')],
        ['pjsip', t('PJSIP')],
        ['ivr', t('IVR')],
        ['queue', t('Queue')],
        ['group', t('Group')],
        ['custom', t('Custom')]
    ]
});