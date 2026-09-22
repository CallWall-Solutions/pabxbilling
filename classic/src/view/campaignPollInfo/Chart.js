Ext.define('MBilling.view.campaignPollInfo.Chart', {
    extend: 'Ext.ux.panel.Chart',
    alias: 'widget.campaignpollinfochart',
    controller: 'campaignpollinfo',
    store: 'CampaignPollInfoChart',
    fieldValue: 'sumresposta',
    fieldDescription: 'resposta_name',
    labelYLine: t('Count votes'),
    labelXLine: t('Options'),
    fieldLabel: 'percentage',
    initComponent: function() {
        var me = this,
            buttonsChart;
        me.bbarChart = [{
            xtype: 'tbtext',
            itemId: 'tbTextSum',
            reference: 'tbTextSum'
        }];
        me.rendererFieldValue = Ext.util.Format.numberRenderer('0'),
            me.rendererFieldValue = function(axis, label, layoutContext) {
                return layoutContext.renderer(label);
            };
        me.store = Ext.data.StoreManager.lookup(me.store);
        me.store.setRemoteFilter(true);
        filters = me.list.filters.getFilterData();
        me.store.filter('filter', Ext.encode(filters));
        me.store.load({
            scope: me,
            callback: function() {
                if (me.store.getData().items[0]) me.sumData = me.store.getData().items[0].getData();
                me.lookupReference('tbTextSum').setText(me.sumData.total_votos);
            }
        });
        me.callParent(arguments);
    }
});