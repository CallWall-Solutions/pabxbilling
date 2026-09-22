Ext.define('MBilling.view.callBack.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.callback',
    onReative: function(btn) {
        var me = this,
            store = me.store,
            filter = me.list.filters.getFilterData().length ? Ext.encode(me.list.filters.getFilterData()) : store.proxy.extraParams.filter;
        Ext.Ajax.request({
            url: 'index.php/callBack/reprocesar/',
            params: {
                filter: filter
            },
            scope: me,
            success: function(response) {
                response = Ext.decode(response.responseText);
                if (response[me.nameSuccessRequest]) {
                    Ext.ux.Alert.alert(me.titleSuccess, response[me.nameMsgRequest], 'success', true, false, 15000);
                    store.load();
                } else {
                    var errors = Helper.Util.convertErrorsJsonToString(response[me.nameMsgRequest]);
                    Ext.ux.Alert.alert(me.titleError, errors, 'error');
                }
            }
        });
    }
});