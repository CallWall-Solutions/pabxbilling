Ext.define('MBilling.view.prefix.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.prefixcombo',
    name: 'id_prefix',
    fieldLabel: t('Destination'),
    displayField: 'prefix',
    filterMode: 'remote',
    valueField: 'id',
    listConfig: {
        itemTpl: Ext.create('Ext.XTemplate', '<div>{prefix} - {destination}</div>')
    },
    displayTpl: Ext.create('Ext.XTemplate', '<tpl for=".">{prefix} - {destination}</tpl>'),
    initComponent: function() {
        var me = this;
        me.store = Ext.create('MBilling.store.PrefixCombo', {
            proxy: {
                type: 'uxproxy',
                module: 'prefixCombo',
                limitParam: undefined
            }
        });
        me.callParent(arguments);
    }
});