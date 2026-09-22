Ext.define('MBilling.view.callShopCdr.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.callshopcdrform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'userlookup',
            name: 'id_user',
            fieldLabel: t('Username'),
            ownerForm: me,
            hidden: App.user.isClient,
            allowBlank: App.user.isClient
        }];
        me.callParent(arguments);
    }
});