Ext.define('MBilling.view.callSummaryDayAgent.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.callsummarydayagent',
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
    }
});