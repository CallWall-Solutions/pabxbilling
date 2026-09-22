Ext.define('MBilling.view.main.Start', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.start',
    layout: 'border',
    controller: 'main',
    initComponent: function() {
        var me = this;
        me.items = [];
        me.callParent(arguments);
    }
});