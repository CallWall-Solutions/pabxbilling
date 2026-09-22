Ext.define('MBilling.view.extra2.Module', {
    extend: 'Ext.form.Panel',
    alias: 'widget.extra2module',
    resizable: false,
    autoShow: true,
    header: false,
    items: [{
        xtype: "component",
        autoEl: {
            width: '100%',
            height: '100%',
            tag: "iframe",
            src: window.module2Extra
        }
    }]
});