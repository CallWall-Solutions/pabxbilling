Ext.define('MBilling.view.services.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.serviceslist',
    store: 'Services',
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.columns = me.columns || [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Type'),
            dataIndex: 'type',
            flex: 3,
            renderer: Helper.Util.formatTranslate,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('Name'),
            dataIndex: 'name',
            flex: 4
        }, {
            header: t('Price'),
            dataIndex: 'price',
            renderer: Helper.Util.formatMoneyDecimal2,
            flex: 2
        }, {
            hidden: App.user.isClient,
            dataIndex: 'description',
            header: t('Description'),
            flex: 4
        }]
        me.callParent(arguments);
    }
});