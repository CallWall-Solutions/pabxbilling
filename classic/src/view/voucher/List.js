Ext.define('MBilling.view.voucher.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.voucherlist',
    store: 'Voucher',
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowPrint = false;
        me.buttonUpdateLot = false;
        me.allowUpdate = false;
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
            header: t('Credit'),
            dataIndex: 'credit',
            renderer: Helper.Util.formatMoneyDecimal,
            filter: {
                type: 'int',
                field: 't.credit'
            },
            flex: 3
        }, {
            header: t('Voucher'),
            dataIndex: 'voucher',
            flex: 5
        }, {
            header: t('Description'),
            dataIndex: 'tag',
            flex: 3,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('Use date'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
            dataIndex: 'usedate',
            flex: 4
        }, {
            header: t('Date'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
            dataIndex: 'creationdate',
            flex: 4,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }];
        me.callParent(arguments);
    }
});