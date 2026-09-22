Ext.define('MBilling.view.sipuras.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.sipuraslist',
    store: 'Sipuras',
    initComponent: function() {
        var me = this;
        me.extraButtons = [{
            text: t('Rotate provisioning token'),
            handler: 'onRotateProvisionToken',
            reference: 'buttonRotateProvisionToken',
            disabled: true,
            hidden: !me.allowUpdate
        }];
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
            }
        }, {
            header: t('Serial'),
            dataIndex: 'nserie'
        }, {
            header: t('MAC'),
            dataIndex: 'macadr'
        }, {
            header: t('Username 1'),
            dataIndex: 'User_ID_1'
        }, {
            header: t('Username 2'),
            dataIndex: 'User_ID_2'
        }, {
            header: t('Last IP'),
            dataIndex: 'last_ip'
        }, {
            header: t('Description'),
            dataIndex: 'obs'
        }, {
            header: t('Last register'),
            dataIndex: 'fultmov',
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s')
        }];
        me.callParent(arguments);
    }
});
