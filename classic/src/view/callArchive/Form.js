Ext.define('MBilling.view.callArchive.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.callarchiveform',
    fieldsHideUpdateLot: ['calledstation'],
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'calledstation',
            fieldLabel: t('Number'),
            readOnly: true
        }, {
            name: 'sessiontime',
            fieldLabel: t('Duration'),
            readOnly: App.user.isClient || App.user.isAgent,
            hidden: App.user.isClient || App.user.isAgent
        }, {
            xtype: 'moneyfield',
            name: 'buycost',
            fieldLabel: t('Buy price'),
            mask: App.user.currency + ' #9.999.990,' + App.user.decimalPrecision,
            hidden: App.user.isClient || App.user.isAgent
        }, {
            xtype: 'moneyfield',
            name: 'sessionbill',
            fieldLabel: t('Sell price'),
            mask: App.user.currency + ' #9.999.990,' + App.user.decimalPrecision,
            readOnly: App.user.isClient || App.user.isAgent,
            hidden: App.user.isAgent || App.user.isClientAgent
        }, {
            xtype: 'moneyfield',
            name: 'agent_bill',
            fieldLabel: t('Sell price'),
            mask: App.user.currency + ' #9.999.990,' + App.user.decimalPrecision,
            readOnly: App.user.isAgent,
            hidden: !App.user.isAgent && !App.user.isClientAgent
        }];
        me.callParent(arguments);
    }
});