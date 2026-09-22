Ext.define('MBilling.view.firewall.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.firewalllist',
    store: 'Firewall',
    initComponent: function () {
        var me = this;
        me.textDelete = 'Unban';
        me.buttonCsv = false;
        me.buttonUpdateLot = false;
        me.buttonCleanFilter = true;
        me.allowPrint = false;
        me.allowCreate = true;
        me.allowDelete = true;
        me.buttonNewWidth = 120;
        me.columns = [{
            header: t('IP'),
            dataIndex: 'ip',
            flex: 4
        }, {
            header: t('Type'),
            dataIndex: 'jail',
            flex: 4
        }, {
            header: t('Action'),
            dataIndex: 'action',
            renderer: Helper.Util.formatFail2banAction,
            filter: {
                type: 'list',
                options: [
                    [0, t('Temp ban')],
                    [1, t('Permanent ban')],
                    [3, t('Unban')],
                    [5, t('IgnoreIP')]
                ]
            },
            flex: 2
        }, {
            header: t('Server'),
            dataIndex: 'idServername',
            filter: {
                type: 'string',
                field: 'idServer.name'
            },
            flex: 3,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }]
        me.callParent(arguments);
    }
});