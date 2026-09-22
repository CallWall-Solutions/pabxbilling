Ext.define('MBilling.view.methodPay.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.methodpaycombo',
    name: 'id_methodpay',
    fieldLabel: t('Payment methods'),
    displayField: 'show_name',
    valueField: 'id',
    forceSelection: true,
    editable: false,
    initComponent: function() {
        var me = this;
        me.store = Ext.create('MBilling.store.MethodPay', {
            proxy: {
                type: 'uxproxy',
                module: 'methodpay',
                limitParam: undefined
            }
        });
        me.callParent(arguments);
    }
});