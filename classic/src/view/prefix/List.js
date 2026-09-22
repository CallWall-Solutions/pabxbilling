Ext.define('MBilling.view.prefix.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.prefixlist',
    store: 'Prefix',
    requires: ['MBilling.view.prefix.ImportCsv'],
    fieldSearch: 'prefix',
    buttonImportCsv: true,
    initComponent: function() {
        var me = this;
        if (App.user.isClient) {
            me.buttonImportCsv = false;
        }
        me.buttonUpdateLot = false;
        me.columns = me.columns || [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Prefix'),
            dataIndex: 'prefix',
            filter: {
                type: 'string'
            }
        }, {
            header: t('Destination'),
            dataIndex: 'destination'
        }];
        me.callParent(arguments);
    }
});