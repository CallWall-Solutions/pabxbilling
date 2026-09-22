Ext.define('MBilling.view.offerUse.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.offeruseform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'userlookup',
            ownerForm: me,
            name: 'id_user',
            fieldLabel: t('Username'),
            readOnly: true
        }, {
            xtype: 'offercombo',
            name: 'id_offer',
            fieldLabel: t('Offer'),
            readOnly: true
        }, {
            name: 'month_payed',
            fieldLabel: t('Month payed')
        }, {
            xtype: 'datefield',
            name: 'reservationdate',
            fieldLabel: t('Reservation date'),
            format: 'Y-m-d H:i:s'
        }];
        me.callParent(arguments);
    }
});