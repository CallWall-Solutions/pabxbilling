Ext.define('MBilling.view.trunkSipCodes.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.trunksipcodeslist',
    store: 'TrunkSipCodes',
    fieldSearch: 'ip',
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowPrint = false;
        me.buttonUpdateLot = false;
        me.allowCreate = false;
        me.allowUpdate = false;
        me.textDelete = t('Reset');
        me.columns = me.columns || [{
            header: t('IP'),
            dataIndex: 'ip',
            flex: 3
        }, {
            header: t('SIP Code'),
            dataIndex: 'code',
            flex: 3
        }, {
            header: t('Total'),
            dataIndex: 'total',
            flex: 3
        }, {
            header: t('Percentage'),
            dataIndex: 'percentage',
            flex: 3
        }];
        me.callParent(arguments);
    }
});