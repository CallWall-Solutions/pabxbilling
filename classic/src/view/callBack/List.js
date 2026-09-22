Ext.define('MBilling.view.callBack.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.callbacklist',
    store: 'CallBack',
    initComponent: function() {
        var me = this;
        me.allowPrint = false;
        me.buttonCsv = true;
        me.buttonUpdateLot = false;
        me.extraButtons = [{
            text: t('Reprocess'),
            iconCls: 'call',
            handler: 'onReative'
        }];
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Username'),
            dataIndex: 'idUserusername',
            flex: 3,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('DID'),
            dataIndex: 'idDiddid',
            flex: 3,
            hidden: App.user.isClient,
            hideable: !App.user.isClient
        }, {
            header: t('Destination number'),
            dataIndex: 'exten',
            flex: 4
        }, {
            header: t('Status'),
            dataIndex: 'status',
            renderer: Helper.Util.formatBooleancallback,
            flex: 2,
            filter: {
                type: 'list',
                options: [
                    [1, t('Active')],
                    [2, t('Pending')],
                    [3, t('Sent')],
                    [4, t('Not working')]
                ]
            }
        }, {
            header: t('Num attempt'),
            dataIndex: 'num_attempt',
            flex: 2
        }, {
            header: t('Last attempt'),
            renderer: Helper.Util.formatDateTime,
            dataIndex: 'last_attempt_time',
            flex: 4
        }, {
            header: t('Duration'),
            dataIndex: 'sessiontime',
            renderer: Helper.Util.formatsecondsToTime,
            flex: 3
        }, {
            header: t('Created'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
            dataIndex: 'entry_time',
            flex: 4
        }];
        me.callParent(arguments);
    }
});