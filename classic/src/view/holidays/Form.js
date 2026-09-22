Ext.define('MBilling.view.holidays.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.holidaysform',
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'name',
            fieldLabel: t('Name')
        }, {
            xtype: 'datefield',
            name: 'day',
            fieldLabel: t('Date')
        }];
        me.callParent(arguments);
    }
});