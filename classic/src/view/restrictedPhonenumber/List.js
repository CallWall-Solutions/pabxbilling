Ext.define('MBilling.view.restrictedPhonenumber.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.restrictedphonenumberlist',
    store: 'RestrictedPhonenumber',
    buttonImportCsv: true,
    fieldSearch: 'number',
    initComponent: function () {
        var me = this;
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
            flex: 2,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('Number'),
            dataIndex: 'number',
            flex: 2
        }, {
            header: t('Direction'),
            dataIndex: 'direction',
            renderer: Helper.Util.formatDirection,
            filter: {
                type: 'list',
                options: window.dialC ? [
                    [1, t('Outbound')],
                    [2, t('Inbound')],
                    [3, t('Outbound & CallerID')],
                    [4, t('CallerID')]
                ] : [
                    [1, t('Outbound')],
                    [2, t('Inbound')]
                ]
            },
            flex: 1
        }]
        me.callParent(arguments);
    }
});


