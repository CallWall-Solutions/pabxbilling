Ext.define('MBilling.view.holidays.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.holidayslist',
    store: 'Holidays',
    fieldSearch: 'name',
    initComponent: function() {
        var me = this;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Name'),
            dataIndex: 'name',
            flex: 4
        }, {
            header: t('Date'),
            dataIndex: 'day',
            renderer: Ext.util.Format.dateRenderer('Y-m-d'),
            flex: 5
        }]
        me.callParent(arguments);
    }
});