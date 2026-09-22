Ext.define('MBilling.view.methodPay.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.methodpaylist',
    store: 'MethodPay',
    initComponent: function() {
        var me = this;
        me.buttonUpdateLot = false;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Payment methods'),
            dataIndex: 'payment_method',
            flex: 2
        }, {
            header: t('Country'),
            dataIndex: 'country',
            flex: 2
        }, {
            header: t('Username'),
            dataIndex: 'idUserusername',
            filter: {
                type: 'string',
                field: 'idUser.username'
            },
            flex: 2
        }, {
            header: t('Active'),
            dataIndex: 'active',
            flex: 1,
            comboRelated: 'booleancombo',
            renderer: Helper.Util.formatBooleanActive,
            filter: {
                type: 'list',
                options: [
                    [1, t('Active')],
                    [0, t('Inactive')]
                ]
            }
        }];
        me.callParent(arguments);
    }
});