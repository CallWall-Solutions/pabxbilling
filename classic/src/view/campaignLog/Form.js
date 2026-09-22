Ext.define('MBilling.view.campaignLog.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.campaignlogform',
    bodyPadding: 0,
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'total',
            fieldLabel: t('Total')
        }];
        me.callParent(arguments);
    }
});