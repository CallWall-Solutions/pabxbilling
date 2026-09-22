Ext.define('MBilling.view.iax.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.iaxlist',
    store: 'Iax',
    fieldSearch: 'username',
    initComponent: function() {
        var me = this;
        me.columns = me.columns || [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Username'),
            dataIndex: 'idUserusername',
            filter: {
                type: 'string',
                field: 'idUser.username'
            },
            flex: 3
        }, {
            header: t('IAX user'),
            dataIndex: 'name',
            flex: 3
        }, {
            header: t('IAX pass'),
            dataIndex: 'secret',
            flex: 2
        }, {
            header: t('Host'),
            dataIndex: 'host',
            flex: 3
        }, {
            header: t('IP'),
            dataIndex: 'ipaddr',
            flex: 5
        }, { //HIDDEN COLUNNS
            header: t('Context'),
            dataIndex: 'context',
            hidden: true,
            hideable: !App.user.isClient,
            flex: 1
        }, {
            header: t('CallerID'),
            dataIndex: 'callerid',
            hidden: true,
            hideable: !App.user.isClient,
            flex: 1
        }, {
            header: t('Codec'),
            dataIndex: 'allow',
            hidden: true,
            hideable: !App.user.isClient,
            flex: 1
        }, {
            header: t('NAT'),
            dataIndex: 'nat',
            hidden: true,
            hideable: !App.user.isClient,
            flex: 1
        }, {
            header: t('Qualify'),
            dataIndex: 'qualify',
            hidden: true,
            hideable: !App.user.isClient,
            flex: 1
        }, {
            header: t('Dtmfmode'),
            dataIndex: 'dtmfmode',
            hidden: true,
            hideable: !App.user.isClient,
            flex: 1
        }, {
            header: t('Insecure'),
            dataIndex: 'insecure',
            hidden: true,
            hideable: !App.user.isClient,
            flex: 1
        }, {
            header: t('Type'),
            dataIndex: 'type',
            hidden: true,
            hideable: !App.user.isClient,
            flex: 1
        }];
        me.callParent(arguments);
    }
});