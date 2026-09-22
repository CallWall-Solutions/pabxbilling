Ext.define('MBilling.view.did.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.didcombo',
    name: 'id_did',
    fieldLabel: t('DID'),
    displayField: 'did',
    forceSelection: true,
    editable: true,
    valueField: 'id',
    initComponent: function() {
        var me = this;
        me.store = Ext.create('MBilling.store.Did', {
            proxy: {
                type: 'uxproxy',
                module: 'did',
                limitParam: undefined
            }
        });
        me.callParent(arguments);
    }
});
Ext.define('MBilling.view.did.BuyCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.didbuycombo',
    name: 'id_did',
    forceSelection: true,
    editable: false,
    fieldLabel: t('DID'),
    displayField: 'did',
    valueField: 'id',
    triggerAction: 'all',
    multiSelect: true,
    initComponent: function() {
        var me = this;
        me.listConfig = {
            itemTpl: Ext.create('Ext.XTemplate', '<div>{did}  (' + t('Setup') + ': ' + App.user.currency + ' {connection_charge} --> ' + t('Monthly payment') + ': ' + App.user.currency + ' {fixrate})</div>')
        };
        me.displayTpl = Ext.create('Ext.XTemplate', '<tpl for="."> {did}</tpl>');
        me.store = Ext.create('MBilling.store.Did', {
            proxy: {
                type: 'uxproxy',
                module: 'did',
                actionRead: 'readBuy',
                limitParam: undefined
            }
        });
        me.callParent(arguments);
    }
});