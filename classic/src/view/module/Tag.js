Ext.define('MBilling.view.module.Tag', {
    extend: 'Ext.form.field.Tag',
    alias: 'widget.moduletag',
    name: 'id_module',
    fieldLabel: t('Module'),
    displayField: 'text',
    valueField: 'id',
    initComponent: function() {
        var me = this;
        me.store = Ext.create('MBilling.store.Module', {
            proxy: {
                type: 'uxproxy',
                module: 'plan',
                limitParam: undefined
            }
        });
        me.callParent(arguments);
    }
});