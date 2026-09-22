Ext.define('MBilling.view.sip.ImportCsv', {
    extend: 'Ext.ux.window.ImportCsv',
    alias: 'widget.sipimportcsv',
    fieldsImport: [{
        fieldLabel: t('Table'),
        hidden: true,
        allowBlank: true
    }]
});