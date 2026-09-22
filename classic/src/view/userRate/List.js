Ext.define('MBilling.view.userRate.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.userratelist',
    store: 'UserRate',
    fieldSearch: 'idUser.username',
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowPrint = false;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Username'),
            dataIndex: 'idUserusername',
            filter: {
                type: 'string',
                field: 'idUser.username'
            },
            flex: 3,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('Prefix'),
            dataIndex: 'idPrefixprefix',
            flex: window.isTablet ? 2 : 3
        }, {
            dataIndex: 'idPrefixdestination',
            header: t('Destination'),
            flex: window.isTablet ? 2 : 3
        }, {
            header: t('Sell price'),
            dataIndex: 'rateinitial',
            renderer: Helper.Util.formatMoneyDecimal4,
            flex: 2
        }, {
            header: t('Initial block'),
            dataIndex: 'initblock',
            flex: 2
        }, {
            header: t('Billing block'),
            dataIndex: 'billingblock',
            flex: 2
        }]
        me.callParent(arguments);
    }
});