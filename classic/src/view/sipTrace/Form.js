Ext.define('MBilling.view.sipTrace.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.siptraceform',
    initComponent: function() {
        var me = this;
        me.allowCreate = false;
        height = Ext.Element.getViewportHeight() - 200;
        me.items = [{
            xtype: 'textareafield',
            name: 'head',
            fieldLabel: t(''),
            height: height,
            anchor: '100%',
            allowBlank: true,
            readOnly: true
        }];
        me.callParent(arguments);
    }
});