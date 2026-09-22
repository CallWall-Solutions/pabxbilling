Ext.define('MBilling.view.smtps.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.smtps',
    onSendEmail: function(btn) {
        var me = this,
            selected = me.list.getSelectionModel().getSelection()[0];
        me.list.setLoading(true);
        if (me.list.getSelectionModel().getSelection().length == 1) {
            Ext.Ajax.request({
                url: 'index.php/smtps/testMail',
                params: {
                    id: selected.get('id')
                },
                scope: me,
                success: function(response) {
                    response = Ext.decode(response.responseText);
                    if (response[me.nameSuccessRequest]) {
                        Ext.ux.Alert.alert(me.titleSuccess, response[me.nameMsgRequest], 'success');
                    } else {
                        Ext.ux.Alert.alert(me.titleError, response[me.nameMsgRequest], 'error');
                    }
                    me.list.setLoading(false);
                }
            });
        } else {
            Ext.ux.Alert.alert(me.titleError, 'Please Select a Smtp', 'notification');
            me.list.setLoading(false);
        };
    }
});