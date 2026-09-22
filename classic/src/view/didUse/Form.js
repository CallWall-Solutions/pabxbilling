Ext.define('MBilling.view.didUse.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.diduseform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'didcombo',
            name: 'id_did',
            fieldLabel: t('DID'),
            readOnly: true
        }, {
            xtype: 'numberfield',
            name: 'month_payed',
            fieldLabel: t('Month payed'),
            hidden: !App.user.isAdmin
        }, {
            xtype: 'datefield',
            name: 'reservationdate',
            fieldLabel: t('Reservation date'),
            format: 'Y-m-d H:i:s',
            hidden: !App.user.isAdmin
        }];
        me.callParent(arguments);
    }
});