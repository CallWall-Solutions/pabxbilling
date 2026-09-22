Ext.define('MBilling.view.campaignPollInfo.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.campaignpollinfoform',
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'number',
            fieldLabel: t('Number'),
            readOnly: true
        }, {
            name: 'resposta',
            fieldLabel: t('Result'),
            readOnly: true
        }];
        me.callParent(arguments);
    }
});