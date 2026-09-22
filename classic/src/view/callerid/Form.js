Ext.define('MBilling.view.callerid.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.calleridform',
    fieldsHideUpdateLot: ['id_user'],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'userlookup',
            name: 'id_user',
            fieldLabel: t('Username'),
            ownerForm: me,
            hidden: App.user.isClient,
            allowBlank: App.user.isClient
        }, {
            name: 'cid',
            fieldLabel: t('CallerID')
        }, {
            name: 'name',
            fieldLabel: t('Name'),
            allowBlank: true
        }, {
            xtype: 'textareafield',
            name: 'description',
            fieldLabel: t('Description'),
            allowBlank: true
        }, {
            xtype: 'booleancombo',
            name: 'activated',
            fieldLabel: t('Status')
        }];
        me.callParent(arguments);
    }
});