Ext.define('MBilling.view.trunkGroup.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.trunkgrouplist',
    store: 'TrunkGroup',
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
            header: t('Description'),
            dataIndex: 'description',
            flex: 5,
            hidden: window.isTablet
        }]
        me.callParent(arguments);
    }
});