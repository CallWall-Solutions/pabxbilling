Ext.define('MBilling.view.userHistory.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.userhistoryform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'userlookup',
            ownerForm: me,
            name: 'id_user',
            fieldLabel: t('Username'),
            hidden: App.user.isClient
        }, {
            xtype: 'datetimefield',
            name: 'date',
            fieldLabel: t('Date'),
            format: 'Y-m-d H:i:s',
            hidden: !App.user.isAdmin,
            allowBlank: true,
            value: new Date()
        }, {
            xtype: 'textareafield',
            name: 'description',
            fieldLabel: t(''),
            readOnly: App.user.isClient,
            height: 400,
            anchor: '100%',
            labelWidth: '100%',
            labelAlign: 'left'
        }];
        me.callParent(arguments);
    }
});