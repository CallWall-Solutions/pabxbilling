Ext.define('MBilling.view.providerCNL.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.providercnlform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'providerlookup',
            ownerForm: me,
            name: 'id_provider',
            fieldLabel: t('Provider')
        }, {
            name: 'cnl',
            fieldLabel: t('CNL')
        }, {
            name: 'zone',
            fieldLabel: t('Zone')
        }];
        me.callParent(arguments);
    }
});