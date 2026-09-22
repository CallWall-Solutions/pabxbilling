Ext.define('MBilling.view.providerCNL.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.providercnllist',
    store: 'ProviderCNL',
    buttonImportCsv: true,
    buttonUpdateLot: false,
    initComponent: function() {
        var me = this;
        me.columns = me.columns || [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            xtype: 'templatecolumn',
            tpl: '{idProviderprovider_name}',
            header: t('Provider'),
            dataIndex: 'id_provider',
            comboFilter: 'providercombo',
            flex: 2
        }, {
            header: t('CNL'),
            dataIndex: 'cnl',
            flex: 2
        }, {
            header: t('Zone'),
            dataIndex: 'zone',
            flex: 2
        }];
        me.callParent(arguments);
    }
});