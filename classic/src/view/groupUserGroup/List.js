Ext.define('MBilling.view.groupUserGroup.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.groupusergrouplist',
    store: 'GroupUserGroup',
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowPrint = false;
        me.buttonUpdateLot = false;
        me.allowCreate = false;
        me.buttonCleanFilter = false;
        me.allowDelete = false;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Group'),
            dataIndex: 'name',
            flex: 4,
            readOnly: true,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }]
        me.callParent(arguments);
    }
});