Ext.define('MBilling.view.refillprovider.Form', {
    extend: 'Ext.ux.form.Panel',
    uses: ['Ext.ux.form.field.DateTime'],
    alias: 'widget.refillproviderform',
    bodyPadding: 0,
    fieldsHideUpdateLot: ['id_provider'],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'providercombo',
            name: 'id_provider',
            fieldLabel: t('Provider')
        }, {
            xtype: 'moneyfield',
            name: 'credit',
            fieldLabel: t('Credit'),
            mask: App.user.currency + ' #9.999.990,00'
        }, {
            xtype: 'textareafield',
            name: 'description',
            fieldLabel: t('Description'),
            allowBlank: true
        }, {
            xtype: 'yesnocombo',
            name: 'payment',
            fieldLabel: t('Add payment'),
            allowBlank: true
        }];
        me.callParent(arguments);
    }
});