Ext.define('MBilling.view.provider.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.providerlist',
    store: 'Provider',
    initComponent: function() {
        var me = this;
        me.columns = me.columns || [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Name'),
            dataIndex: 'provider_name'
        }, {
            header: t('Description'),
            dataIndex: 'description',
            hidden: window.isTablet
        }, {
            header: t('Credit'),
            dataIndex: 'credit',
            renderer: Helper.Util.formatMoneyDecimal,
            hidden: window.isTablet
        }, {
            header: t('Creation date'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
            dataIndex: 'creationdate',
            hidden: window.isTablet
        }];
        me.callParent(arguments);
    }
});