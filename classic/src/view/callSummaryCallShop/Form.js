Ext.define('MBilling.view.callSummaryCallShop.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.callsummarycallshopform',
    defaults: {},
    labelWidthFields: 150,
    defaultType: 'displayfield',
    initComponent: function() {
        var me = this;
        me.allowUpdate = false;
        me.allowCreate = false;
        me.items = [{
            name: 'sumsessiontime',
            fieldLabel: t('Duration')
        }, {
            name: 'sumprice',
            fieldLabel: t('Sell price'),
            renderer: Helper.Util.formatMoneyDecimal,
            hidden: !App.user.isClient
        }, {
            name: 'sumlucro',
            fieldLabel: t('Markup'),
            renderer: Helper.Util.formatMoneyDecimal,
            hidden: !App.user.isClient
        }, {
            name: 'sumbuycost',
            fieldLabel: t('Buy price'),
            renderer: Helper.Util.formatMoneyDecimal,
            hidden: !App.user.isClient
        }, {
            name: 'sumnbcall',
            fieldLabel: t('Total calls'),
            hidden: !App.user.isClient
        }];
        me.callParent(arguments);
    }
});