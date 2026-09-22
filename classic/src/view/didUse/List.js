Ext.define('MBilling.view.didUse.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.diduselist',
    store: 'DidUse',
    fieldSearch: 'idDid.did',
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowPrint = false;
        me.buttonUpdateLot = false;
        me.allowCreate = false;
        me.allowDelete = false;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('DID'),
            dataIndex: 'idDiddid',
            filter: {
                type: 'string',
                field: 'idDid.did'
            },
            flex: 5
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
            header: t('Month payed'),
            dataIndex: 'month_payed',
            flex: 2
        }, {
            header: t('Reservation date'),
            renderer: Helper.Util.formatDateTime,
            dataIndex: 'reservationdate',
            flex: 5
        }, {
            header: t('Release date'),
            renderer: Helper.Util.formatDateTime,
            dataIndex: 'releasedate',
            flex: 5
        }, {
            header: t('Next due date'),
            renderer: Helper.Util.formatDateTime,
            dataIndex: 'next_due_date',
            flex: 5
        }]
        me.callParent(arguments);
    }
});