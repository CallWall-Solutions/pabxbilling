Ext.define('MBilling.view.rateCallshop.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.ratecallshopform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'numberfield',
            name: 'dialprefix',
            fieldLabel: t('Prefix')
        }, {
            name: 'destination',
            fieldLabel: t('Destination')
        }, {
            xtype: 'moneyfield',
            name: 'buyrate',
            fieldLabel: t('Sell price'),
            mask: App.user.currency + ' #9.999.990,' + App.user.decimalPrecision
        }, {
            xtype: 'numberfield',
            name: 'minimo',
            fieldLabel: t('Buy price initblock'),
            value: 1,
            minValue: 1
        }, {
            xtype: 'numberfield',
            name: 'block',
            fieldLabel: t('Buy price increment'),
            value: 1,
            minValue: 1
        }, {
            xtype: 'numberfield',
            name: 'minimal_time_charge',
            fieldLabel: t('Minimum time to charge'),
            value: 0,
            minValue: 0
        }];
        me.callParent(arguments);
    }
});