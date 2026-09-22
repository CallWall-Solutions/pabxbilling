Ext.define('MBilling.view.provider.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.providerform',
    fieldsHideUpdateLot: ['provider_name'],
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'provider_name',
            fieldLabel: t('Name')
        }, {
            xtype: 'moneyfield',
            name: 'credit',
            fieldLabel: t('Credit'),
            mask: App.user.currency + ' #9.999.990,00',
            value: '0'
        }, {
            xtype: 'noyescombo',
            name: 'credit_control',
            fieldLabel: t('Credit control'),
            hidden: App.user.isClient
        }, {
            xtype: 'textareafield',
            name: 'description',
            fieldLabel: t('Description'),
            allowBlank: true
        }];
        me.callParent(arguments);
    }
});