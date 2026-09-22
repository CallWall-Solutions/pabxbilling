Ext.define('MBilling.view.groupModule.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.groupmoduleform',
    items: [{
        xtype: 'groupusercombo',
        name: 'id_group',
        fieldLabel: t('Group')
    }, {
        xtype: 'modulecombo',
        name: 'id_module',
        fieldLabel: t('Module')
    }]
});