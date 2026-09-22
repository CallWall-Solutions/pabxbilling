Ext.define('MBilling.view.backup.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.backuplist',
    store: 'Backup',
    initComponent: function() {
        var me = this;
        me.extraButtons = [{
            text: t('Download') + ' Backup',
            glyph: icons.disk,
            handler: 'onDownload',
            width: 140,
            disabled: false
        }];
        me.buttonCsv = false;
        me.allowPrint = false;
        me.buttonUpdateLot = false;
        me.buttonCleanFilter = false;
        me.allowUpdate = false;
        me.columns = [{
            menuDisabled: true,
            header: t('Name'),
            dataIndex: 'name',
            flex: 1
        }, {
            menuDisabled: true,
            header: t('Size'),
            dataIndex: 'size',
            flex: 1
        }]
        me.callParent(arguments);
    }
});