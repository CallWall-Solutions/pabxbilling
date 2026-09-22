Ext.define('MBilling.view.configuration.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.configurationform',
    items: [{
        name: 'config_value',
        fieldLabel: t('Value'),
        allowBlank: true
    }, {
        xtype: 'textarea',
        name: 'config_description',
        fieldLabel: t('Description'),
        height: 200,
        anchor: '100%',
        readOnly: true
    }]
});