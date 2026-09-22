Ext.define('MBilling.view.campaignReport.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.campaignreport',
    formHidden: true,
    onRenderModule: function() {
        var me = this;
        me.callParent(arguments);
        btn = me.lookupReference('hour');
        btn.disable();
        me.store.defaultFilter = [];
    },
    onSetInterval: function(btn) {
        var me = this;
        me.lookupReference('hour').enable();
        me.lookupReference('day').enable();
        me.lookupReference('week').enable();
        me.lookupReference('month').enable();
        btn.disable();
        me.store.defaultFilter = [];
        activeFilter = {
            type: 'string',
            field: 'interval',
            value: btn.reference,
            comparison: 'ct'
        };
        me.store.defaultFilter.push(activeFilter);
        me.store.load();
    }
});