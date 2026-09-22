Ext.define('MBilling.view.services.Tag', {
    extend: 'Ext.form.field.Tag',
    alias: 'widget.servicestag',
    name: 'id_services',
    fieldLabel: t('Services'),
    displayField: 'name',
    valueField: 'id',
    store: Ext.create('MBilling.store.Services', {
        proxy: {
            type: 'uxproxy',
            module: 'services',
            limitParam: undefined
        }
    })
});