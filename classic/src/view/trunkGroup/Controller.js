Ext.define('MBilling.view.trunkGroup.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.trunkgroup',
    init: function() {
        var me = this;
        me.control({
            'combobox[name=type]': {
                select: me.onSelectType
            }
        });
        me.callParent(arguments);
    },
    onSelectType: function(combo, records) {
        this.showFieldsRelated(records.getData().showFields);
    },
    showFieldsRelated: function(showFields) {
        var me = this,
            fieldType = me.formPanel.getForm().findField('type'),
            fieldWeight = me.formPanel.getForm().findField('weight');
        me.formPanel.getForm().findField('weight').setVisible(fieldType.getValue() == 4);
    },
    onEdit: function() {
        var me = this;
        me.formPanel.reset();
        me.callParent(arguments);
        fieldType = me.formPanel.getForm().findField('type')
        console.log(fieldType.getValue());
        me.formPanel.getForm().findField('weight').setVisible(fieldType.getValue() == 4);
    },
    onNew: function() {
        var me = this,
            fieldType = me.formPanel.getForm().findField('type');
        me.formPanel.getForm().findField('weight').setVisible(false);
        me.callParent(arguments);
    }
});