Ext.define('MBilling.view.queueMember.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.queuememberlist',
    store: 'QueueMember',
    initComponent: function() {
        var me = this;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Destination'),
            dataIndex: 'interface',
            flex: 4
        }, {
            header: t('Queues'),
            dataIndex: 'queue_name',
            flex: 4
        }, {
            header: t('Username'),
            dataIndex: 'idUserusername',
            filter: {
                type: 'string',
                field: 'idUser.username'
            },
            flex: 4,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('Paused'),
            dataIndex: 'paused',
            renderer: Helper.Util.formattyyesno,
            filter: {
                type: 'list',
                options: [
                    [0, t('No')],
                    [1, t('Yes')]
                ]
            },
            flex: 2
        }]
        me.callParent(arguments);
    }
});