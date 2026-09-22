Ext.define('MBilling.view.didHistory.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.didhistoryform',
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'did',
            fieldLabel: t('DID'),
            readOnly: true
        }, {
            name: 'username',
            fieldLabel: t('Username'),
            readOnly: true
        }, {
            xtype: 'numberfield',
            name: 'month_payed',
            fieldLabel: t('Month payed'),
            readOnly: true
        }, {
            xtype: 'datefield',
            name: 'reservationdate',
            fieldLabel: t('Reservation date'),
            format: 'Y-m-d H:i:s',
            readOnly: true
        }, {
            xtype: 'textareafield',
            allowBlank: true,
            name: 'description',
            fieldLabel: t('Description'),
            hidden: !App.user.isAdmin
        }];
        me.callParent(arguments);
    }
});