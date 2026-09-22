Ext.define('MBilling.view.smtps.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.smtpsform',
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'host',
            fieldLabel: t('Host'),
            hidden: App.user.isClient
        }, {
            name: 'username',
            fieldLabel: t('Username'),
            hidden: App.user.isClient
        }, {
            name: 'password',
            fieldLabel: t('Password'),
            inputType: 'password',
            hidden: App.user.isClient
        }, {
            xtype: 'numberfield',
            name: 'port',
            fieldLabel: t('Port'),
            value: 587,
            hidden: App.user.isClient
        }, {
            xtype: 'combobox',
            name: 'encryption',
            fieldLabel: t('Encryption'),
            hidden: App.user.isClient,
            value: 'null',
            store: [
                ['ssl', t('SSl')],
                ['tls', t('TLS')],
                ['null', t('NULL')]
            ]
        }];
        me.callParent(arguments);
    }
});