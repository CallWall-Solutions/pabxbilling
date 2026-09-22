Ext.define('MBilling.view.voucher.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.voucher',
    onSave: function() {
        var me = this;
        me.callParent(arguments);
        me.store.load();
    }
});