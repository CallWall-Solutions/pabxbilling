Ext.define('MBilling.view.campaignRestrictPhone.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.campaignrestrictphonelist',
    store: 'CampaignRestrictPhone',
    buttonImportCsv: true,
    initComponent: function() {
        var me = this;
        me.extraButtons = [{
            text: t('Remove duplicate'),
            iconCls: 'callshop',
            handler: 'deleteDuplicados',
            disabled: false
        }];
        me.buttonUpdateLot = false;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Number'),
            dataIndex: 'number',
            flex: 4
        }, {
            header: t('Description'),
            dataIndex: 'description',
            flex: 4,
            hidden: !App.user.isAdmin
        }]
        me.callParent(arguments);
    }
});