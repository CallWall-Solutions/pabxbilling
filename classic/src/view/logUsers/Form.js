Ext.define('MBilling.view.logUsers.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.logusersform',
    fieldsHideEdit: ['cid'],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'usercombo',
            name: 'id_user',
            fieldLabel: t('Username'),
            allowBlank: true,
            readOnly: true
        }, {
            xtype: 'combobox',
            name: 'id_log_actions',
            fieldLabel: t('Action'),
            forceSelection: true,
            editable: false,
            value: '1',
            store: [
                [1, 'Login'],
                [2, 'Edit'],
                [3, 'Delete'],
                [4, 'New'],
                [5, 'Import'],
                [6, 'UpdateAll'],
                [7, 'Export'],
                [8, 'Logout']
            ],
            readOnly: true
        }, {
            name: 'ip',
            fieldLabel: t('IP'),
            readOnly: true
        }, {
            xtype: 'textareafield',
            name: 'description',
            fieldLabel: t('Description'),
            height: 400,
            anchor: '100%',
            allowBlank: true,
            readOnly: true
        }];
        me.callParent(arguments);
    }
});