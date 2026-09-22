Ext.define('MBilling.view.ivr.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.ivrlist',
    store: 'Ivr',
    fieldSearch: 'name',
    initComponent: function() {
        var me = this;
        me.allowPrint = false;
        me.buttonCsv = false;
        me.extraButtons = [{
            text: t('Delete audios'),
            handler: 'onDeleteAudio',
            which: 100,
            disabled: false,
            hidden: !App.user.isAdmin || !me.allowDelete
        }];
        me.columns = me.columns || [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Name'),
            dataIndex: 'name',
            flex: 5
        }, {
            header: t('Username'),
            dataIndex: 'idUserusername',
            filter: {
                type: 'string',
                field: 'idUser.username'
            },
            flex: 4,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }]
        me.callParent(arguments);
    }
});