Ext.define('MBilling.view.dashboard.Network', {
    extend: 'Ext.panel.Panel',
    xtype: 'network',
    requires: ['Ext.chart.CartesianChart', 'Ext.chart.axis.Category', 'Ext.chart.axis.Numeric', 'Ext.chart.series.Line', 'Ext.chart.interactions.PanZoom', 'Ext.ProgressBar'],
    cls: 'dashboard-main-chart shadow',
    reference: 'networkpanel',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function() {
        var me = this;
        me.title = t('Server hardware');
        me.items = [{
            flex: 1,
            layout: 'fit',
            height: 150,
            items: [{
                xtype: 'networkchart'
            }]
        }, {
            cls: 'graph-analysis-left',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                flex: 1,
                cls: 'dashboard-graph-analysis-left',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'component',
                    cls: 'top-info-container',
                    reference: 'cpuMediaUso',
                    html: ''
                }, {
                    xtype: 'progressbar',
                    cls: 'left-top-text progressbar-no-text',
                    reference: 'cpuPercent',
                    hideMode: 'offsets'
                }, {
                    xtype: 'component',
                    cls: 'left-top-text',
                    reference: 'diskFree',
                    html: '',
                    padding: '10 0 0 0'
                }, {
                    xtype: 'progressbar',
                    cls: 'left-top-text progressbar-no-text',
                    reference: 'diskPerc',
                    hideMode: 'offsets'
                }]
            }, {
                flex: 1,
                cls: 'graph-analysis-right',
                margin: '15 0 0 0',
                padding: '0 0 0 15',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                itemPadding: '0 0 10 0',
                items: [{
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    padding: '0 0 10 0',
                    items: [{
                        xtype: 'component',
                        flex: 1,
                        cls: 'graph-analysis-right-inner-container',
                        html: t('Mem total')
                    }, {
                        xtype: 'component',
                        flex: 1,
                        padding: '0 10 0 0',
                        cls: 'graph-analysis-right-inner-container right-value',
                        html: '0',
                        reference: 'memTotal'
                    }]
                }, {
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    padding: '0 0 10 0',
                    items: [{
                        xtype: 'component',
                        flex: 1,
                        cls: 'graph-analysis-right-inner-container',
                        html: t('Mem used')
                    }, {
                        xtype: 'component',
                        flex: 1,
                        padding: '0 10 0 0',
                        cls: 'graph-analysis-right-inner-container right-value',
                        html: '0',
                        reference: 'memUsed'
                    }]
                }, {
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    padding: '0 0 10 0',
                    items: [{
                        xtype: 'component',
                        flex: 1,
                        cls: 'graph-analysis-right-inner-container',
                        html: t('Uptime')
                    }, {
                        xtype: 'component',
                        flex: 1,
                        padding: '0 10 0 0',
                        cls: 'graph-analysis-right-inner-container right-value',
                        html: '0',
                        reference: 'uptime'
                    }]
                }]
            }]
        }]
        me.callParent(arguments);
    }
});