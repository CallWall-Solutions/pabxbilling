Ext.define('MBilling.view.callSummaryCallShop.Chart', {
    extend: 'Ext.ux.panel.Chart',
    alias: 'widget.callsummarycallshopchart',
    controller: 'callsummarycallshop',
    store: 'CallSummaryCallShop',
    fieldValue: 'sessiontime',
    fieldDescription: 'day',
    labelYLine: t('Duration') + ' Min',
    labelXLine: t('Day'),
    initComponent: function() {
        var me = this,
            buttonsChart;
        me.rendererFieldValue = Ext.util.Format.numberRenderer('0'),
            me.rendererFieldDescription = Ext.util.Format.dateRenderer('Y-m-d');
        me.tbarChart = [{
            xtype: 'buttongroup',
            toggleGroup: 'charts',
            defaults: {
                enableToggle: true,
                toggleGroup: 'charts',
                allowDepress: false,
                listeners: {
                    toggle: 'onToggleGroupButton'
                }
            },
            items: [{
                pressed: true,
                text: t('Duration'),
                chart: 'sessiontime',
                sumName: 'sumsessiontime'
            }, {
                text: t('Buy price'),
                sumRenderer: Helper.Util.formatMoneyDecimal,
                chart: 'buycost',
                sumName: 'sumbuycost'
            }, {
                text: t('Sell price'),
                sumRenderer: Helper.Util.formatMoneyDecimal,
                chart: 'price',
                sumName: 'sumprice'
            }, {
                text: t('Markup'),
                sumRenderer: Helper.Util.formatMoneyDecimal,
                chart: 'lucro',
                sumName: 'sumlucro',
                hidden: App.user.isClient || App.user.isAgent
            }, {
                text: t('Total calls'),
                chart: 'nbcall',
                sumName: 'sumnbcall'
            }]
        }];
        me.bbarChart = [{
            xtype: 'tbtext',
            itemId: 'tbTextSum'
        }];
        me.callParent(arguments);
    }
});