Ext.define('MBilling.view.refill.Chart', {
    extend: 'Ext.ux.panel.Chart',
    alias: 'widget.refillchart',
    controller: 'refill',
    store: 'RefillChart',
    fieldValue: 'sumCreditMonth',
    fieldDescription: 'CreditMonth',
    labelYLine: t('Credit'),
    labelXLine: t('Month'),
    reference: 'refillchart',
    btnShowColumn: true,
    btnShowBar: false,
    btnShowLine: false,
    btnShowPie: false,
    btnShowColumnHidden: true,
    showbuttons: true,
    initComponent: function() {
        var me = this,
            buttonsChart;
        me.rendererFieldValue = Ext.util.Format.numberRenderer('0'),
            me.tbarChart = [{
                hidden: !me.showbuttons,
                text: t('Per') + ' ' + t('Month'),
                scope: me,
                handler: 'onPerMonth',
                reference: 'btnMonth',
                disabled: true
            }, {
                hidden: !me.showbuttons,
                text: t('Per') + ' ' + t('Day'),
                scope: me,
                handler: 'onPerDay',
                reference: 'btnDay'
            }];
        me.bbarChart = [{
            xtype: 'tbtext',
            itemId: 'tbTextSum'
        }];
        me.callParent(arguments);
    },
    onPerMonth: function(btn) {
        var me = this;
        me.lookupReference('btnMonth').disable();
        me.lookupReference('btnDay').enable();
        me.store.setRemoteFilter(true);
        me.store.filter('type', 'month');
        me.store.load();
    },
    onPerDay: function(btn) {
        var me = this;
        me.lookupReference('btnDay').disable();
        me.lookupReference('btnMonth').enable();
        me.store.setRemoteFilter(true);
        me.store.filter('type', 'day');
        me.store.load();
    }
});