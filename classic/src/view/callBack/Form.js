Ext.define('MBilling.view.callBack.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.callbackform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'userlookup',
            name: 'id_user',
            fieldLabel: t('Username'),
            ownerForm: me,
            hidden: App.user.isClient
        }, {
            name: 'exten',
            fieldLabel: t('Destination number')
        }, {
            xtype: 'callbackcombo',
            name: 'status',
            fieldLabel: t('Status')
        }];
        me.callParent(arguments);
    }
});