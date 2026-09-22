Ext.define('MBilling.view.configuration.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.configurationlist',
    store: 'Configuration',
    fieldSearch: 'config_title',
    comparisonfilter: 'ct',
    initComponent: function() {
        var me = this;
        me.allowPrint = false;
        me.buttonCsv = false;
        me.buttonUpdateLot = false;
        me.allowCreate = false;
        me.allowDelete = false;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Name'),
            dataIndex: 'config_title'
        }, {
            header: t('Value'),
            dataIndex: 'config_value'
        }];
        me.callParent(arguments);
    }
});