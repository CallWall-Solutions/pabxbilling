Ext.define('MBilling.view.campaignReport.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.campaignreportform',
    bodyPadding: 0,
    initComponent: function() {
        var me = this;
        me.items = [{
            fieldLabel: t('Name'),
            name: 'idCampaignname'
        }]
        me.callParent(arguments);
    }
});