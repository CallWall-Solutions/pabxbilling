Ext.define('MBilling.view.callOnlineChart.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.callonlinechartlist',
    store: 'CallOnlineChart',
    initComponent: function() {
        var me = this;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Total'),
            dataIndex: 'total',
            flex: 1
        }, {
            header: t('Date'),
            dataIndex: 'date',
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i'),
            flex: 1
        }]
        me.callParent(arguments);
    }
});