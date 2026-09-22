Ext.define('MBilling.view.campaignRestrictPhone.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.campaignrestrictphoneform',
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'number',
            fieldLabel: t('Number')
        }, {
            xtype: 'textareafield',
            name: 'description',
            fieldLabel: t('Description'),
            allowBlank: true
        }];
        me.callParent(arguments);
    }
});