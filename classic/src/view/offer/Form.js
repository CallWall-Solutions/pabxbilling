Ext.define('MBilling.view.offer.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.offerform',
    fieldsHideUpdateLot: ['name'],
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'label',
            fieldLabel: t('Name')
        }, {
            xtype: 'offertypecombo',
            name: 'packagetype',
            fieldLabel: t('Package type')
        }, {
            name: 'freetimetocall',
            fieldLabel: t('Free time to call')
        }, {
            xtype: 'billingtypecombo',
            name: 'billingtype',
            fieldLabel: t('Billing type')
        }, {
            xtype: 'moneyfield',
            name: 'price',
            fieldLabel: t('Price'),
            mask: App.user.currency + ' #9.999.990,00'
        }, {
            xtype: 'numberfield',
            name: 'initblock',
            fieldLabel: t('Initial block'),
            value: 60,
            minValue: 1,
            maxValue: 60,
            hidden: App.user.isClient
        }, {
            xtype: 'numberfield',
            name: 'billingblock',
            fieldLabel: t('Billing block'),
            value: 60,
            minValue: 1,
            maxValue: 60,
            hidden: App.user.isClient
        }, {
            xtype: 'numberfield',
            name: 'minimal_time_charge',
            fieldLabel: t('Minimum time to charge'),
            value: 0,
            minValue: 0,
            hidden: App.user.isClient
        }]
        me.callParent(arguments);
    }
});