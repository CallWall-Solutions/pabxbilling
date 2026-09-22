Ext.define('MBilling.view.backup.Module', {
    extend: 'Ext.ux.panel.Module',
    alias: 'widget.backupmodule',
    controller: 'backup',
    initComponent: function() {
        var me = this;
        //me.mbpkg();
        me.callParent(arguments);
    }
});