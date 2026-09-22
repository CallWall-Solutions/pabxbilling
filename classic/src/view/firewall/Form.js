Ext.define('MBilling.view.firewall.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.firewallform',
    initComponent: function () {
        var me = this;
        me.items = [{
            name: 'ip',
            fieldLabel: t('IP'),
            vtype: 'IPOrCIDR'
        }, {
            xtype: 'combobox',
            store: [
                ['0', 'Temp ban'],
                ['1', 'Permanent ban'],
                ['3', 'Unban'],
                ['5', 'Add to IgnoreIP']
            ],
            name: 'action',
            fieldLabel: t('Action'),
            forceSelection: true,
            editable: false,
            allowBlank: true,
            value: '0'
        }, {
            xtype: 'textarea',
            name: 'description',
            fieldLabel: t('Description'),
            allowBlank: true,
            height: 300,
            anchor: '100%',
            readOnly: true
        }];
        me.callParent(arguments);
    }
});