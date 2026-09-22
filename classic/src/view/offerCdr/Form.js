Ext.define('MBilling.view.offerCdr.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.offercdrform',
    initComponent: function() {
        var me = this;
        me.columns = [{
            xtype: 'userlookup',
            ownerForm: me,
            name: 'id_user',
            fieldLabel: t('Username')
        }, {
            xtype: 'offercombo',
            name: 'id_offer',
            fieldLabel: t('Offer')
        }, {
            name: 'used_secondes',
            fieldLabel: t('Duration')
        }, {
            xtype: 'datefield',
            name: 'date_consumption',
            fieldLabel: t('Date'),
            format: 'Y-m-d H:i:s'
        }]
        me.callParent(arguments);
    }
});