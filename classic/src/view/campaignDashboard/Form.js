Ext.define('MBilling.view.campaignDashboard.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.campaigndashboardform',
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'name',
            fieldLabel: t('Name')
        }]
        me.callParent(arguments);
    }
});