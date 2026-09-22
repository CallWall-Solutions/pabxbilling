Ext.define('MBilling.view.diddestination.Controller', {
    extend: 'Ext.ux.app.ViewController',
    alias: 'controller.diddestination',
    init: function () {
        var me = this;
        me.control({
            'didtypecombo': {
                select: me.onSelectMethod
            }
        });
        me.callParent(arguments);
    },
    onSelectMethod: function (combo, records) {
        this.showFieldsRelated(records.getData().showFields);
    },
    showFieldsRelated: function (showFields) {
        var me = this,
            fields = me.formPanel.getForm().getFields();
        fields.each(function (field) {
            if (me.formPanel.idRecord && (field.name == 'id_user' || field.name == 'id_did')) {
                field.setVisible(false);
            } else {
                field.setVisible(showFields.indexOf(field.name) !== -1);
            }
        });
    },
    onEdit: function () {
        var me = this,
            form = me.formPanel.getForm(),
            record = me.list.getSelectionModel().getSelection()[0];
        method = record ? record.get('voip_call') : t('PJSIP');
        switch (method) {
            case 0:
                method = t('Call to PSTN');
                break;
            case 1:
                method = t('PJSIP');
                break;
            case 2:
                method = t('IVR');
                break;
            case 3:
                method = 'CallingCard';
                break;
            case 4:
                method = t('Direct extension');
                break;
            case 5:
                method = t('CID Callback');
                break;
            case 6:
                method = t('0800 Callback');
                break;
            case 7:
                method = t('Queue');
                break;
            case 8:
                method = t('SIP group');
                break;
            case 9:
                method = t('Custom');
                break;
            case 10:
                method = t('Context');
                break;
            case 11:
                method = t('Multiples IPs');
                break;
        }
        showFields = me.formPanel.down('didtypecombo').store.findRecord('name', method).getData().showFields;
        me.showFieldsRelated(showFields);
        me.callParent(arguments);
    },
    onNew: function () {
        var me = this,
            form = me.formPanel.getForm(),
            record = me.list.getSelectionModel().getSelection()[0];
        method = t('PJSIP');
        showFields = me.formPanel.down('didtypecombo').store.findRecord('name', method).getData().showFields;
        me.showFieldsRelated(showFields);
        me.callParent(arguments);
    }
});