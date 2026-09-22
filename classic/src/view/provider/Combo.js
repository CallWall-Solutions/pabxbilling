Ext.define('MBilling.view.provider.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.providercombo',
    name: 'id_provider',
    fieldLabel: t('Provider'),
    forceSelection: true,
    editable: false,
    displayField: 'provider_name',
    valueField: 'id',
    initComponent: function() {
        var me = this;
        me.store = Ext.create('MBilling.store.Provider', {
            proxy: {
                type: 'uxproxy',
                module: 'provider',
                limitParam: undefined
            }
        });
        me.callParent(arguments);
    }
});