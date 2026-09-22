Ext.define('MBilling.view.voucher.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.voucherform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'moneyfield',
            name: 'credit',
            fieldLabel: t('Credit'),
            mask: App.user.currency + ' #9.999.990,' + App.user.decimalPrecision,
            hidden: App.user.isClient,
            allowBlank: App.user.isClient
        }, {
            xtype: 'plancombo',
            name: 'id_plan',
            fieldLabel: t('Plan'),
            hidden: !App.user.isAdmin,
            allowBlank: !App.user.isAdmin
        }, {
            xtype: 'languagecombo',
            name: 'language',
            fieldLabel: t('Language'),
            hidden: !App.user.isAdmin,
            allowBlank: !App.user.isAdmin
        }, {
            name: 'prefix_local',
            fieldLabel: t('Prefix rules'),
            value: App.user.base_country == 'BRL' ? '0/55/11,0/55/12,*/5511/8,*/5511/9' : '',
            emptyText: 'match / replace / length',
            hidden: !App.user.isAdmin,
            allowBlank: true
        }, {
            xtype: 'numberfield',
            name: 'quantity',
            fieldLabel: t('Quantity'),
            hidden: !App.user.isAdmin,
            allowBlank: !App.user.isAdmin,
            value: 10
        }, {
            name: 'tag',
            fieldLabel: t('Description'),
            hidden: App.user.isClient,
            allowBlank: true
        }, {
            xtype: 'numberfield',
            name: 'voucher',
            fieldLabel: t('Voucher'),
            emptyText: App.user.isClient ? '' : t('Will be generated automatically'),
            maxLength: 6,
            minLength: 6,
            readOnly: App.user.isClient ? false : true,
            allowBlank: App.user.isClient ? false : true
        }];
        me.callParent(arguments);
    }
});