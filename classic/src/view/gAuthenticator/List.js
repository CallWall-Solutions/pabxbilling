Ext.define('MBilling.view.gAuthenticator.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.gauthenticatorlist',
    store: 'GAuthenticator',
    fieldSearch: 'username',
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowPrint = false;
        me.buttonUpdateLot = false;
        me.allowCreate = false;
        me.buttonCleanFilter = false;
        me.allowUpdate = App.user.isAdmin;
        me.allowDelete = false;
        if (!App.user.isAdmin) me.columns = [];
        else {
            me.columns = [{
                header: t('ID'),
                dataIndex: 'id',
                flex: 1,
                hidden: true,
                hideable: App.user.isAdmin
            }, {
                header: t('Username'),
                dataIndex: 'username',
                flex: 4
            }, {
                header: t('Status'),
                dataIndex: 'googleAuthenticator_enable',
                renderer: Helper.Util.formatBooleanActive,
                comboRelated: 'booleancombo',
                flex: 2,
                filter: {
                    type: 'list',
                    options: [
                        [1, t('Active')],
                        [0, t('Inactive')]
                    ]
                }
            }]
        }
        me.callParent(arguments);
    }
});