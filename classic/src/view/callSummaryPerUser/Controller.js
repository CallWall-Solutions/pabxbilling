Ext.define('MBilling.view.callSummaryPerUser.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.callsummaryperuser',
    formHidden: true,
    onEdit: function() {
        me = this;
        me.sumData = me.store.getData().items[0].getData();
        if (!me.sumData) {
            return;
        }
        me.formPanel.getForm().getFields().each(function(field) {
            field.setValue(me.sumData[field.name]);
        });
        me.formPanel.expand();
    },
    onExportCsvUser: function(grid, rowIndex, colIndex) {
        var me = this,
            store = me.list.getStore(),
            filter = me.list.filters.getFilterData().length ? Ext.encode(me.list.filters.getFilterData()) : store.proxy.extraParams.filter;
        window.open('index.php/callSummaryPerUser/exportCsvCalls?id=' + grid.getStore().getAt(rowIndex).getData().idUserusername + '&filter=' + filter);
    }
});