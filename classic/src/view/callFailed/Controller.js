Ext.define('MBilling.view.callFailed.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.callfailed',
    requires: ['MBilling.view.callFailed.DiagnosticWindow'],
    formHidden: true,
    onCallDetails: function(btn) {
        var me = this,
            selected = me.list.getSelectionModel().getSelection()[0];
        if (me.list.getSelectionModel().getSelection().length == 1) {
            Ext.create('MBilling.view.callFailed.DiagnosticWindow', {
                cdrFailedId: selected.get('id')
            }).show();
        } else {
            Ext.ux.Alert.alert(me.titleError, t('Please select only a record'), 'notification');
        };
    }
});
