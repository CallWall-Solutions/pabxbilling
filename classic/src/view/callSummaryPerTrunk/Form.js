Ext.define('MBilling.view.callSummaryPerTrunk.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.callsummarypertrunkform',
    defaults: {},
    labelWidthFields: 150,
    defaultType: 'displayfield',
    initComponent: function() {
        var me = this;
        me.allowUpdate = false;
        me.allowCreate = false;
        me.items = [{
            name: 'sumsessiontime',
            fieldLabel: t('Duration'),
            renderer: Ext.util.Format.numberRenderer('0'),
            allowBlank: true
        }, {
            name: 'sumsessionbill',
            fieldLabel: t('Sell price'),
            renderer: Helper.Util.formatMoneyDecimal,
            allowBlank: true
        }, {
            name: 'sumbuycost',
            fieldLabel: t('Buy price'),
            renderer: Helper.Util.formatMoneyDecimal,
            hidden: App.user.isClient,
            allowBlank: true,
            hidden: App.user.hidden_prices == 1
        }, {
            name: 'sumlucro',
            fieldLabel: t('Markup'),
            renderer: Helper.Util.formatMoneyDecimal,
            hidden: !App.user.isAdmin || App.user.hidden_prices == 1,
            allowBlank: true
        }, {
            name: 'sumnbcall',
            fieldLabel: t('Answered calls'),
            allowBlank: true
        }, {
            name: 'sumnbcallfail',
            fieldLabel: t('Failed calls'),
            allowBlank: true
        }];
        me.callParent(arguments);
    }
});