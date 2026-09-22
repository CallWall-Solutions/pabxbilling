Ext.define('MBilling.view.servicesUse.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.servicesuseform',
    initComponent: function() {
        var me = this;
        me.bodyPadding = 15,
            me.items = [{
                name: 'id',
                hidden: true,
                allowBlank: true
            }, {
                xtype: 'userlookup',
                ownerForm: me,
                name: 'id_user',
                fieldLabel: t('Username'),
                hidden: App.user.isClient,
                readOnly: true,
                allowBlank: App.user.isClient
            }, {
                xtype: 'serviceslookup',
                name: 'id_services',
                fieldLabel: t('Service'),
                ownerForm: me,
                readOnly: true
            }, {
                xtype: 'moneyfield',
                name: 'price',
                fieldLabel: t('Price'),
                mask: App.user.currency + ' #9.999.990,00',
                hidden: true,
                allowBlank: true,
                readOnly: true
            }, {
                xtype: 'methodpaycombo',
                name: 'method',
                fieldLabel: t('Payment methods'),
                allowBlank: true,
                hidden: true
            }, {
                xtype: 'numberfield',
                name: 'month_payed',
                fieldLabel: t('Month payed'),
                hidden: !App.user.isAdmin
            }, {
                xtype: 'datetimefield',
                name: 'reservationdate',
                fieldLabel: t('Reservation date'),
                format: 'Y-m-d H:i:s',
                value: new Date(),
                hidden: !App.user.isAdmin
            }, {
                xtype: 'datetimefield',
                name: 'termination_date',
                fieldLabel: t('Termination date'),
                format: 'Y-m-d',
                allowBlank: true,
                hidden: !App.user.isAdmin
            }, {
                xtype: 'datetimefield',
                name: 'contract_period',
                fieldLabel: t('End of minimum contract period'),
                format: 'Y-m-d',
                allowBlank: true,
                hidden: !App.user.isAdmin
            }];
        me.callParent(arguments);
    }
});