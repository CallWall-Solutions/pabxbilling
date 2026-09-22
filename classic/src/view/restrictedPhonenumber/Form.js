Ext.define('MBilling.view.restrictedPhonenumber.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.restrictedphonenumberform',
    fieldsHideUpdateLot: ['id_user'],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'userlookup',
            ownerForm: me,
            name: 'id_user',
            fieldLabel: t('Username'),
            hidden: App.user.isClient,
            readOnly: App.user.isClient,
            allowBlank: App.user.isClient
        }, {
            name: 'number',
            fieldLabel: t('Number')
        }, {
            xtype: 'combobox',
            name: 'direction',
            fieldLabel: t('Direction'),
            forceSelection: true,
            editable: false,
            value: '1',
            store: window.dialC ? [
                [1, t('Outbound')],
                [2, t('Inbound')],
                [3, t('Outbound & CallerID')],
                [4, t('CallerID')]
            ] : [
                [1, t('Outbound')],
                [2, t('Inbound')]
            ]
        }];
        me.callParent(arguments);
    }
});