Ext.define('MBilling.view.gAuthenticator.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.gauthenticatorform',
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'username',
            fieldLabel: t('Username'),
            readyOnly: true
        }, {
            xtype: 'statususercombo',
            name: 'googleAuthenticator_enable',
            fieldLabel: t('Status'),
            allowBlank: true
        }, {
            vtype: 'numberfield',
            name: 'code',
            fieldLabel: t('Code'),
            hidden: true,
            maxLength: 6,
            minLength: 6,
            allowBlank: true
        }, {
            name: 'google_authenticator_key',
            fieldLabel: t('Google authenticator key'),
            readyOnly: true,
            allowBlank: true,
            hidden: true
        }];
        me.callParent(arguments);
    }
});