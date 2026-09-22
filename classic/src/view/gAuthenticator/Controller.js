Ext.define('MBilling.view.gAuthenticator.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.gauthenticator',
    init: function() {
        var me = this;
        me.control({
            'statususercombo': {
                select: me.onSelectMethod
            }
        });
        me.callParent(arguments);
    },
    onSelectMethod: function(combo, records) {
        this.showFieldsRelated(records.getData().showFields);
    },
    showFieldsRelated: function(showFields) {
        var me = this,
            fields = me.formPanel.getForm().getFields(),
            fieldGoogleAuthenticator_enable = me.formPanel.getForm().findField('googleAuthenticator_enable'),
            fieldGoogle_authenticator_key = me.formPanel.getForm().findField('google_authenticator_key'),
            fieldCode = me.formPanel.getForm().findField('code')
        if (fieldGoogleAuthenticator_enable.value != 1 && fieldGoogle_authenticator_key.value.length > 5) {
            fieldCode.setVisible(true);
            fieldCode.allowBlank = false;
        } else {
            fieldCode.setVisible(false);
            fieldCode.allowBlank = true;
        }
    },
    onEdit: function() {
        var me = this,
            form = me.formPanel.getForm();
        if (!App.user.isAdmin) return;
        form.findField('code').allowBlank = true;
        form.findField('code').setVisible(false);
        me.callParent(arguments);
    }
});