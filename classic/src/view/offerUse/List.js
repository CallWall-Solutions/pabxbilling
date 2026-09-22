Ext.define('MBilling.view.offerUse.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.offeruselist',
    store: 'OfferUse',
    initComponent: function() {
        var me = this;
        me.buttonUpdateLot = false;
        me.allowDelete = false;
        me.columns = [{
            header: t('Username'),
            dataIndex: 'idUserusername',
            filter: {
                type: 'string',
                field: 'idUser.username'
            },
            flex: 3
        }, {
            xtype: 'templatecolumn',
            tpl: '{idOfferlabel}',
            header: t('Offer'),
            dataIndex: 'id_offer',
            comboFilter: 'offercombo',
            flex: 3
        }, {
            header: t('Month payed'),
            dataIndex: 'month_payed',
            flex: 3
        }, {
            header: t('Reservation date'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d'),
            dataIndex: 'reservationdate',
            flex: 3
        }, {
            header: t('Release date'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d'),
            dataIndex: 'releasedate',
            flex: 3
        }];
        me.callParent(arguments);
    }
});