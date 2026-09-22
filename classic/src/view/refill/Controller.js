Ext.define('MBilling.view.refill.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.refill',
    aliasChart: 'refillchart',
    isSubmitForm: true,
    onInvoice: function (btn) {
        var me = this;
        var me = this,
            selected = me.list.getSelectionModel().getSelection()[0];
        if (me.list.getSelectionModel().getSelection().length == 1) {
            url = 'index.php/invoices/printInvoice/?id=' + selected.get('id');
            window.open(url);
        } else {
            Ext.ux.Alert.alert(me.titleError, t('Not available to multi refill.'), 'error');
        }
    },
    onSelectionChange: function (selModel, selections) {
        var me = this,
            btnInvoice = me.lookupReference('invoice');
        btnInvoice && btnInvoice.setDisabled(!selections.length);
        me.callParent(arguments);
    },
    onRenderModule: function () {
        var me = this,
            btnChart = me.lookupReference('chart');
        me.callParent(arguments);
        if (App.user.isAdmin) {
            me.store.on({
                scope: me,
                beforeload: function () {
                    btnChart && btnChart.el && btnChart.disable();
                },
                load: function (store) {
                    btnChart && btnChart.el && btnChart.enable();
                    me.onSetTotal();
                }
            });
        } else {
            me.store.on({
                scope: me,
                load: function (store) {
                    me.onSetTotal();
                }
            });
        }
        if (me.list.autoLoadList && !me.store.isLoading() && !me.store.loadCount) {
            me.store.load();
        }
    },
    onChart: function () {
        var me = this;
        me.chart = Ext.widget('window', {
            title: t('Charts'),
            iconCls: 'icon-chart-column',
            layout: 'fit',
            autoShow: true,
            modal: true,
            resizable: false,
            width: window.isThemeNeptune ? 740 : 710,
            items: {
                xtype: me.aliasChart
            }
        });
        me.chart.down('#tbTextSum').setText('<b>' + t('Total') + ': ' + App.user.currency + ' ' + me.sumData.sumCredit + '</b>');
    },
    onSetTotal: function (win) {
        var me = this;
        if (!me.store.getData().items[0]) return;
        me.sumData = me.store.getData().items[0].getData();
        if (!me.sumData) {
            return;
        }
        me.lookupReference('tbTextTotal') && me.lookupReference('tbTextTotal').setText('<b>' + t('Refill Total') + ': ' + App.user.currency + ' ' + me.sumData.sumCredit + '</b>');
    },
    onEdit: function () {
        var me = this,
            record = me.list.getSelectionModel().getSelection()[0];
        fieldImage = record.get('image');
        me.callParent(arguments);
        if (me.ImageExist(fieldImage) == true) {
            Ext.getCmp('imagePreview').update('<img width="100%" src="' + fieldImage + '">');;
        } else {
            Ext.getCmp('imagePreview').update('');
        }
    },
    ImageExist: function (url) {
        var img = new Image();
        img.src = url;
        return img.height != 0;
    }
});
