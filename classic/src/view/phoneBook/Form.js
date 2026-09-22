Ext.define('MBilling.view.phoneBook.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.phonebookform',
    bodyPadding: 0,
    fieldsHideUpdateLot: ['id_user', 'name'],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: App.user.isClient ? 'textfield' : 'userlookup',
            ownerForm: me,
            hidden: App.user.isClient,
            allowBlank: App.user.isClient
        }, {
            name: 'name',
            fieldLabel: t('Name')
        }, {
            xtype: 'booleancombo',
            name: 'status',
            fieldLabel: t('Status'),
            allowBlank: true
        }, {
            xtype: 'textareafield',
            name: 'description',
            fieldLabel: t('Description'),
            allowBlank: true
        }];
        me.callParent(arguments);
    }
});