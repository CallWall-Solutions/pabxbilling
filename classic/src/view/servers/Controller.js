Ext.define('MBilling.view.servers.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.servers',
    init: function() {
        var me = this;
        me.control({
            'combobox': {
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
            fields = me.formPanel.getForm().getFields(),
            fieldWeight = me.formPanel.getForm().findField('weight'),
            form = me.formPanel.getForm();
        fields.each(function(field) {
            if (field.name == 'type') {
                if (field.value == 'asterisk' || field.value == 'mbilling') {
                    fieldWeight['show']();
                } else {
                    fieldWeight['hide']();
                }
            }
        });
    },
    onNew: function() {
        var me = this;
        fieldPid_server = me.lookupReference('id_server')['hide']();
        me.callParent(arguments);
    },
    onEdit: function() {
        var me = this,
            fieldWeight = me.formPanel.getForm().findField('weight'),
            fieldType = me.formPanel.getForm().findField('type');
        me.callParent(arguments);
        if (fieldType.value == 'asterisk' || fieldType.value == 'mbilling') {
            fieldWeight['show']();
        } else {
            fieldWeight['hide']();
        }
        if (fieldType.value == 'sipproxy') {
            fieldPid_server = me.lookupReference('id_server')['show']();
        } else {
            fieldPid_server = me.lookupReference('id_server')['hide']();
        }
    },
    onDelete: function(btn) {
        var me = this,
            records;
        notDelete = false;
        Ext.each(me.list.getSelectionModel().getSelection(), function(record) {
            if (record.get('id') == 1) {
                Ext.ux.Alert.alert(me.titleError, t('You cannot delete the') + ' server id 1', 'error');
                notDelete = true;
            }
        });
        if (notDelete == false) me.callParent(arguments);
    }
});