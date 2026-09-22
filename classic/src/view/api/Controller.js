Ext.define('MBilling.view.api.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.api',
    onEdit: function() {
        var me = this,
            record = me.list.getSelectionModel().getSelection()[0];
        me.callParent(arguments);
        valueAllow = me.formPanel.idRecord ? record.get('action').split(',') : ['r'];
        fieldAllow = me.formPanel.down('checkboxgroup');
        fieldAllow.setValue({
            action: valueAllow
        });
    }
});