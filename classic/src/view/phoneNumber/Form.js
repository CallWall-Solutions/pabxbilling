Ext.define('MBilling.view.phoneNumber.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.phonenumberform',
    fieldsHideUpdateLot: ['number'],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'phonebookcombo',
            name: 'id_phonebook',
            fieldLabel: t('Phonebook')
        }, {
            name: 'number',
            fieldLabel: t('Number')
        }, {
            name: 'name',
            fieldLabel: t('Name'),
            allowBlank: true
        }, {
            name: 'doc',
            fieldLabel: t('DOC'),
            allowBlank: true
        }, {
            name: 'city',
            fieldLabel: t('City'),
            allowBlank: true
        }, {
            name: 'email',
            fieldLabel: t('Email'),
            allowBlank: true
        }, {
            xtype: 'statuscombo',
            name: 'status',
            fieldLabel: t('Status'),
            allowBlank: true
        }, {
            xtype: 'textareafield',
            name: 'info',
            fieldLabel: t('Description'),
            allowBlank: true,
            hidden: !App.user.isAdmin
        }];
        me.callParent(arguments);
    }
});