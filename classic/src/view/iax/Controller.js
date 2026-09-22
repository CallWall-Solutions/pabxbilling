Ext.define('MBilling.view.iax.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.iax',
    onEdit: function() {
        this.callParent(arguments);
        var me = this,
            record = me.list.getSelectionModel().getSelection()[0],
            valueAllow = me.formPanel.idRecord ? record.get('allow').split(',') : ['g729', 'gsm', 'alaw', 'ulaw'],
            fieldAllow = me.formPanel.down('checkboxgroup');
        fieldAllow.setValue({
            allow: valueAllow
        });
    }
});