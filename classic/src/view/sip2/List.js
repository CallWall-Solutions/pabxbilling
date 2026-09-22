Ext.define('MBilling.view.sip2.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.sip2list',
    store: 'Sip2',
    fieldSearch: 'name',
    initComponent: function() {
        var me = this;
        me.columns = me.columns || [{
            header: t('Username'),
            dataIndex: 'idUserusername',
            filter: {
                type: 'string',
                field: 'idUser.username'
            },
            flex: 4
        }, {
            header: t('SIP user'),
            dataIndex: 'name',
            flex: 4
        }];
        me.callParent(arguments);
    }
});