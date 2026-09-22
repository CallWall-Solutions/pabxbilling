Ext.define('MBilling.view.offerCdr.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.offercdrlist',
    store: 'OfferCdr',
    initComponent: function() {
        var me = this;
        me.buttonUpdateLot = false;
        me.allowCreate = false;
        me.allowUpdate = false;
        me.allowDelete = false;
        me.columns = [{
            header: t('ID'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('Date'),
            renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
            dataIndex: 'date_consumption',
            flex: 3
        }, {
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
            header: t('Duration'),
            dataIndex: 'used_secondes',
            renderer: Helper.Util.formatsecondsToTime,
            flex: 3
        }];
        me.callParent(arguments);
    }
});