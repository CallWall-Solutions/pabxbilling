Ext.define('MBilling.view.callSummaryMonthDid.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.callsummarymonthdidform',
    defaults: {},
    labelWidthFields: 150,
    defaultType: 'displayfield',
    initComponent: function() {
        var me = this;
        me.allowUpdate = false;
        me.allowCreate = false;
        me.items = [{
            name: 'sumsessionbill',
            fieldLabel: t('Sell price'),
            renderer: Helper.Util.formatMoneyDecimal,
            allowBlank: true,
            hidden: App.user.hidden_prices == 1
        }, {
            name: 'sumsessiontime',
            fieldLabel: t('Duration'),
            renderer: Helper.Util.formatMoneyDecimal,
            hidden: !App.user.isAdmint || App.user.hidden_prices == 1,
            allowBlank: true
        }, {
            name: 'sumnbcall',
            fieldLabel: t('Total calls'),
            allowBlank: true
        }];
        me.callParent(arguments);
    }
});