Ext.define('MBilling.view.groupUserGroup.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.groupusergroupform',
    fieldsHideUpdateLot: ['id_user'],
    initComponent: function() {
        var me = this;
        me.items = [{
            name: 'name',
            fieldLabel: t('Group'),
            readOnly: true
        }, {
            name: 'user_prefix',
            fieldLabel: t('User prefix'),
            allowBlank: true
        }, {
            xtype: 'fieldset',
            style: 'margin-top:25px; overflow: visible;',
            title: t('Select one or more groups'),
            collapsible: true,
            collapsed: false,
            items: [{
                xtype: 'groupusertag',
                name: 'id_group',
                fieldLabel: t('Group'),
                anchor: '100%',
                allowBlank: true
            }]
        }];
        me.callParent(arguments);
    }
});