Ext.define('MBilling.view.queueMember.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.queuememberform',
    fieldsHideUpdateLot: ['id_user', 'queue_name'],
    fieldsHideEdit: ['queue_name'],
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'queuelookup',
            ownerForm: me,
            name: 'queue_name',
            fieldLabel: t('Queue name'),
            displayField: 'queue_name',
            hidden: App.user.isClient,
            allowBlank: App.user.isClient
        }, {
            xtype: 'siplookup',
            ownerForm: me,
            name: 'interface',
            fieldLabel: t('Sip user'),
            displayField: 'interface'
        }, {
            xtype: 'noyescombo',
            name: 'paused',
            fieldLabel: t('Paused'),
            allowBlank: true
        }];
        me.callParent(arguments);
    }
});