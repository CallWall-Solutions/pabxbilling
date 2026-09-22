Ext.define('MBilling.view.userRate.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.userrateform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: !App.user.isAdmin ? 'textfield' : 'userlookup',
            ownerForm: me,
            fieldLabel: t('Username'),
            name: 'id_user',
            hidden: !App.user.isAdmin,
            allowBlank: !App.user.isAdmin
        }, {
            xtype: 'prefixlookup',
            ownerForm: me,
            name: 'id_prefix',
            fieldLabel: t('Destination'),
            hidden: !App.user.isAdmin,
            allowBlank: !App.user.isAdmin
        }, {
            xtype: 'moneyfield',
            name: 'rateinitial',
            fieldLabel: t('Sell price'),
            mask: App.user.currency + ' #9.999.990,' + App.user.decimalPrecision,
            readOnly: App.user.isClient
        }, {
            xtype: 'numberfield',
            name: 'initblock',
            fieldLabel: t('Initial block'),
            hidden: App.user.isClient
        }, {
            xtype: 'numberfield',
            name: 'billingblock',
            fieldLabel: t('Billing block'),
            hidden: App.user.isClient
        }];
        me.callParent(arguments);
    }
});