Ext.define('MBilling.view.campaignRestrictPhone.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.campaignrestrictphone',
    onEdit: function() {
        var me = this;
        me.callParent(arguments);
    },
    deleteDuplicados: function(btn) {
        var me = this,
            store = me.list.getStore(),
            filter = me.list.filters.getFilterData().length ? Ext.encode(me.getList().filters.getFilterData()) : store.proxy.extraParams.filter;
        btn.disable();
        me.list.setLoading(true);
        Ext.Msg.confirm('Confirm', 'Confirme que quer deletar os numeros duplicados?', function(btnYes) {
            if (btnYes === 'yes') {
                Ext.Ajax.request({
                    url: 'index.php/campaignRestrictPhone/deleteDuplicados/',
                    params: {
                        filter: filter
                    },
                    scope: me,
                    success: function(response) {
                        response = Ext.decode(response.responseText);
                        if (response[me.nameSuccessRequest]) {
                            Ext.ux.Alert.alert(me.titleSuccess, response[me.nameMsgRequest], 'success');
                        } else {
                            var errors = Helper.Util.convertErrorsJsonToString(response[me.nameMsgRequest]);
                            Ext.ux.Alert.alert(me.titleError, errors, 'error');
                        }
                        me.list.setLoading(false);
                        btn.enable();
                    }
                });
            }
        });
    }
});