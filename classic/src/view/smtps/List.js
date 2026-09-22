Ext.define('MBilling.view.smtps.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.smtpslist',
    store: 'Smtps',
    initComponent: function() {
        var me = this;
        me.extraButtons = [{
            text: t('Test SMTP'),
            iconCls: 'templatemail',
            handler: 'onSendEmail',
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
            header: t('Host'),
            dataIndex: 'host',
            flex: 4
        }, {
            header: t('Username'),
            dataIndex: 'username',
            flex: 2
        }, {
            header: t('Port'),
            dataIndex: 'port',
            flex: 3
        }, {
            header: t('Encryption'),
            dataIndex: 'encryption',
            flex: 3
        }]
        me.callParent(arguments);
    }
});