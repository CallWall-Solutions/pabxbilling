Ext.define('MBilling.view.prefix.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.prefixform',
    fieldsHideEdit: ['prefix'],
    items: [{
        name: 'prefix',
        fieldLabel: t('Prefix'),
        maxLength: 18
    }, {
        name: 'destination',
        fieldLabel: t('Destination')
    }]
});