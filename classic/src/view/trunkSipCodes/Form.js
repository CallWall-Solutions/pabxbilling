Ext.define('MBilling.view.trunkSipCodes.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.trunksipcodesform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'textfield',
            name: 'ip',
            fieldLabel: t('IP')
        }, {
            xtype: 'numberfield',
            name: 'code',
            fieldLabel: t('Code')
        }, {
            xtype: 'numberfield',
            name: 'total',
            fieldLabel: t('Total')
        }];
        me.callParent(arguments);
    }
});